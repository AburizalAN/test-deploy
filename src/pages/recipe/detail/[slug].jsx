import Box from '@mui/material/Box';
import Head from 'next/head';

import { useState, useEffect } from 'react';
import ACTIONS from 'store/registerActions';
import { useSelector, useDispatch } from 'react-redux';
// new component
import { TopNavDetail } from 'components/ui/top-nav';
import Header from 'components/ui/recipe/detail/header';
import Article from 'components/ui/recipe/detail/article';
import RelatedRecipe from 'components/ui/recipe/detail/relatedRecipe';
// import Bahan from 'components/ui/recipe/detail/bahan';
// import Video from 'components/ui/recipe/detail/video';
// import CaraMembuat from 'components/ui/recipe/detail/caraMembuat';
// import Share from 'components/ui/recipe/detail/share';
// import RecommendProduct from 'components/ui/recipe/detail/recommendProduct';
// import FloatingButton from 'components/ui/recipe/detail/floatingButton';
// import { BASE_URL } from 'utils/constant';

import { MICROSERVICE_BASE_URL } from 'utils/constant';
import { useRouter } from 'next/router';

const FailedA = '/assets/img/load-failed/failed1.jpg';

export default function RecipeDetail({ datas, user }) {
  const router = useRouter();
  const recipeState = useSelector((state) => state.recipe);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACTIONS.recipe.getListRecipe());
  }, []);

  const recipeList = recipeState.listRecipes;

  const data = datas[0];
  let image = '';
  if (data.better_featured_image != null) {
    image = data.better_featured_image?.source_url;
  } else {
    image = FailedA;
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  // console.log(data);
  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <Head>
        <title>{data.yoast_head_json.title}</title>
        <meta name="description" content={data.yoast_head_json.description} />
        <meta name="twitter:card" content={data.yoast_head_json.twitter_card} />
        <meta property="og:locale" content={data.yoast_head_json.og_locale} />
        <meta property="og:type" content={data.yoast_head_json.og_type} />
        <meta property="og:title" content={data.yoast_head_json.og_title} />
        <meta
          property="og:description"
          content={data.yoast_head_json.og_description}
        />
        <meta property="og:url" content={data.yoast_head_json.og_url} />
        <meta
          property="og:site_name"
          content={data.yoast_head_json.og_site_name}
        />
        <meta
          property="article:published_time"
          content={data.yoast_head_json.article_published_time}
        />
        <meta
          property="article:modified_time"
          content={data.yoast_head_json.article_modified_time}
        />
        {data.yoast_head_json?.og_image?.map((img) => {
          // console.log(img);
          return (
            <>
              <meta property="og:image" content={img.url} />
              <meta property="og:image:width" content={img.width} />
              <meta property="og:image:height" content={img.height} />
              <meta property="og:image:type" content={img.type} />
            </>
          );
        })}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data.yoast_head_json.schema),
          }}
        />
      </Head>
      {/* <FloatingButton /> */}
      <TopNavDetail title={data.title.rendered} />
      <Box sx={{ padding: '12px' }}>
        <Header
          img={image}
          time={data.acf?.waktu_peyajian || '-'}
          date={data.date}
          user={user}
          porsi={data.acf.porsi}
        />
        <Article content={data.content} title={data.title.rendered} />
        {/* <Bahan />
        <Video /> */}
      </Box>
      {/* <CaraMembuat /> */}
      <Box sx={{ padding: '12px' }}>
        {/* <Share /> */}
        {/* <RecommendProduct recipes={recipeList} /> */}
        <RelatedRecipe id={data.id} />
      </Box>
    </Box>
  );
}

export async function getStaticProps({ params }) {
  const datas = await fetch(
    MICROSERVICE_BASE_URL + `/recipe?slug=${params.slug}`
  ).then((r) => r.json());
  const user = await fetch(MICROSERVICE_BASE_URL + `/users/1`).then((r) =>
    r.json()
  );
  return {
    props: {
      datas,
      user,
    },
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
