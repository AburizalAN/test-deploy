import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import useSWR from 'swr';

import Box from '@mui/material/Box';

import fetcher from 'utils/fetcher';
import { MICROSERVICE_BASE_URL } from 'utils/constant';
import BannerSection from 'components/ui/article/detail/banner';
import ArticleContent from 'components/ui/article/detail/content';
import RelatedRecipe from 'components/ui/article/detail/relatedRecipe';
import LoadingSkeleton from 'components/ui/article/detail/LoadingSkeleton';
import ArticleDetailLayout from 'components/ui/article/detail/ArticleDetailLayout';

export default function DetailArticle({ metaData }) {
  const router = useRouter();

  const { data } = useSWR(
    `${MICROSERVICE_BASE_URL}/posts?slug=${router.query.slug}`,
    fetcher
  );

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
        {metaData.og_image?.map((img, index) => (
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
      {data === undefined ? (
        <LoadingSkeleton />
      ) : (
        <React.Fragment>
          <Divider />
          <BannerSection
            title={data[0].title.rendered}
            img={
              data[0].better_featured_image?.source_url ??
              '/assets/img/load-failed/failed1.jpg'
            }
            author={metaData.twitter_misc['Written by']}
            date={data[0].date}
          />
          <ArticleContent content={data[0].content} />
          <Box sx={{ padding: '12px', position: 'relative', top: '-30px' }}>
            <RelatedRecipe id={data[0].id} />
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

DetailArticle.getLayout = function getLayout(page) {
  return <ArticleDetailLayout>{page}</ArticleDetailLayout>;
};

export async function getStaticProps({ params }) {
  const datas = await fetch(
    MICROSERVICE_BASE_URL + `/posts?slug=${params.slug}`
  ).then((r) => r.json());

  const user = await fetch(MICROSERVICE_BASE_URL + `/users/1`).then((r) =>
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
    MICROSERVICE_BASE_URL + `/posts?per_page=100`
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

const Divider = styled.div`
  margin-top: 41px;
`;
