import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';
import useSWR from 'swr';
import styled from 'styled-components';

import fetcher from 'utils/fetcher';
import ArtikelCard from 'components/ui/bookmarks/ArtikelCard';
import ResepCard from 'components/ui/bookmarks/ResepCard';
import BookmarkEmpty from 'components/ui/bookmarks/BookmarkEmpty';
import TopNavigation from 'components/ui/bookmarks/TopNavigation';
import BookmarkOptions from 'components/ui/bookmarks/BookmarkOptions';

const BookmarksPage = () => {
  const router = useRouter();
  const [option, setOption] = useState('all');

  const { data, mutate } = useSWR(
    option === 'all'
      ? '/api/bookmark/all'
      : option === 'artikel'
      ? '/api/bookmark/all-article'
      : '/api/bookmark/all-recipe',
    fetcher,
    {
      onSuccess: (data) => {
        if (
          data.response.message ===
          "The consumer isn't authorized to access %resources."
        )
          router.push('/login');
      },
    }
  );

  useEffect(() => {
    if (!Cookie.get('AMToken')) router.push('/login');
  }, []);

  return (
    <div>
      <BookmarkOptions option={option} setOption={setOption} />
      {data !== undefined &&
        (data.response[0]?.message === 'Data not found' ? (
          <BookmarkEmpty />
        ) : (
          <ListWrapper>
            {data?.response.map((item, index) =>
              item.content_type === 'recipe' ? (
                <ResepCard
                  mutate={mutate}
                  item={item}
                  key={`${index}-${item.id}`}
                />
              ) : (
                <ArtikelCard
                  mutate={mutate}
                  item={item}
                  key={`${index}-${item.id}`}
                />
              )
            )}
          </ListWrapper>
        ))}
    </div>
  );
};

export default BookmarksPage;

BookmarksPage.getLayout = function getLayout(page) {
  return (
    <>
      <TopNavigation />
      {page}
    </>
  );
};

const ListWrapper = styled.div`
  display: grid;
  grid-gap: 12px;
  padding: 12px;
`;
