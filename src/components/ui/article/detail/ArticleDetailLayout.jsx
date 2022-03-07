import React from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import fetcher from 'utils/fetcher';
import { MICROSERVICE_BASE_URL } from 'utils/constant';
import { TopNavDetail } from 'components/ui/top-nav';

const Breadcrumbs = dynamic(() => import('components/shared/Breadcrumbs'), {
  ssr: false,
});

const ArticleDetailLayout = ({ children }) => {
  const router = useRouter();

  const { data } = useSWR(
    `${MICROSERVICE_BASE_URL}/posts?slug=${router.query.slug}`,
    fetcher
  );

  const breadcrumbs = [
    <Link href="/" key="/">
      Home
    </Link>,
    <Link href="/artikel" key="/artikel">
      Artikel
    </Link>,
    <span key="span">{data && data[0].title.rendered}</span>,
  ];

  return (
    <>
      <TopNavDetail
        title={data && data[0].title.rendered}
        disableSearch
        isNoShadow
        isShowShareIcon
        isShowBookmark
      />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {children}
    </>
  );
};

export default ArticleDetailLayout;
