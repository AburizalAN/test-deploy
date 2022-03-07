import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useSWR from 'swr';

import Box from '@mui/material/Box';

import fetcher from 'utils/fetcher';
import { MICROSERVICE_BASE_URL } from 'utils/constant';
import ACTIONS from 'store/registerActions';
import Header from 'components/ui/recipe/detail/header';
import Article from 'components/ui/recipe/detail/article';
import RelatedRecipe from 'components/ui/recipe/detail/relatedRecipe';
import ResepLayout from 'components/ui/recipe/detail/ResepLayout';
import LoadingSkeleton from 'components/ui/recipe/detail/LoadingSkeleton';

export default function RecipeDetail({ metaData, user }) {
  // TODO commented because variables is not being used
  // const recipeState = useSelector((state) => state.recipe);
  // const recipeList = recipeState.listRecipes;

  const router = useRouter();
  const dispatch = useDispatch();

  const { data } = useSWR(
    `${MICROSERVICE_BASE_URL}/recipe?slug=${router.query.slug}`,
    fetcher
  );

  useEffect(() => {
    dispatch(ACTIONS.recipe.getListRecipe());
  }, []);

  if (router.isFallback) return <LoadingSkeleton />;

  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="twitter:card" content={metaData.twitter_card} />
        <meta property="og:locale" content={metaData.og_locale} />
        <meta property="og:type" content={metaData.og_type} />
        <meta property="og:title" content={metaData.og_title} />
        <meta property="og:description" content={metaData.og_description} />
        <meta property="og:url" content={metaData.og_url} />
        <meta property="og:site_name" content={metaData.og_site_name} />
        <meta
          property="article:published_time"
          content={metaData.article_published_time}
        />
        <meta
          property="article:modified_time"
          content={metaData.article_modified_time}
        />
        {metaData?.og_image?.map((img, index) => (
          <React.Fragment key={`${img.url}-${index}`}>
            <meta property="og:image" content={img.url} />
            <meta property="og:image:width" content={img.width} />
            <meta property="og:image:height" content={img.height} />
            <meta property="og:image:type" content={img.type} />
          </React.Fragment>
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metaData.schema),
          }}
        />
      </Head>

      {/* <FloatingButton /> */}

      {data === undefined ? (
        <LoadingSkeleton />
      ) : (
        <React.Fragment>
          <Box sx={{ padding: '12px', marginTop: '24px' }}>
            <Header
              img={
                data[0]?.better_featured_image?.source_url ??
                '/assets/img/load-failed/failed1.jpg'
              }
              time={data[0]?.acf?.waktu_peyajian || '-'}
              date={data[0]?.date}
              user={user}
              porsi={data[0]?.acf.porsi}
              icons={data[0]?.acf.product_diet}
            />
            <Article
              content={data[0]?.content}
              title={data[0]?.title.rendered}
            />
            {/* <Bahan />
        <Video /> */}
          </Box>
          {/* <CaraMembuat /> */}
          <Box sx={{ padding: '12px' }}>
            {/* <Share /> */}
            {/* <RecommendProduct recipes={recipeList} /> */}
            <RelatedRecipe id={data[0]?.id} />
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

RecipeDetail.getLayout = function getLayout(page) {
  return <ResepLayout>{page}</ResepLayout>;
};

export async function getStaticProps({ params }) {
  const datas = await fetch(
    `${MICROSERVICE_BASE_URL}/recipe?slug=${params.slug}`
  ).then((r) => r.json());

  const user = await fetch(`${MICROSERVICE_BASE_URL}/users/1`).then((r) =>
    r.json()
  );

  return {
    props: {
      metaData: datas[0].yoast_head_json,
      user,
    },
    revalidate: 60 * 60 * 24,
  };
}

export async function getStaticPaths() {
  const collections = await fetch(
    MICROSERVICE_BASE_URL + `/recipe?per_page=100`
  ).then((r) => r.json());

  return {
    paths: collections.map((collection) => {
      return {
        params: {
          id: String(collection.id),
          slug: String(collection.slug),
        },
      };
    }),
    fallback: 'blocking',
  };
}
