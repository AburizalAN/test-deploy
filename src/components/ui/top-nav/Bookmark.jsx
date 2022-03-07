import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';
import useSWR from 'swr';

import { IconButton } from '@mui/material';

import fetcher from 'utils/fetcher';
import { MICROSERVICE_BASE_URL } from 'utils/constant';
import {
  BookmarkLight,
  Bookmark as BookmarkFilled,
} from 'components/icons/bookmark-light';

const Bookmark = () => {
  const router = useRouter();
  const AMToken = Cookie.get('AMToken');
  const linkAPI = router.route === '/resep/[slug]' ? 'recipe' : 'posts';
  const bookmarkAPI = router.route === '/resep/[slug]' ? 'recipe' : 'article';

  const [isBookmarked, setIsBookmarked] = useState(false);

  const { data } = useSWR(
    `${MICROSERVICE_BASE_URL}/${linkAPI}?slug=${router.query.slug}`,
    fetcher,
    {
      revalidateOnMount: true,
      onSuccess: async (data) => {
        const res = await fetch(
          `/api/bookmark/${bookmarkAPI}/${data[0].id}`
        ).then((res) => res.json());

        if (res?.content_id) setIsBookmarked(true);
      },
    }
  );

  const handleBookmark = async () => {
    if (AMToken === undefined) {
      await router.push('/login');
      return;
    }

    if (isBookmarked) {
      await handleRemoveBookmark();
    } else await handleAddBookmark();
  };

  const handleAddBookmark = async () => {
    const bookmark =
      router.route === '/resep/[slug]' ? 'add-recipe' : 'add-article';

    const res = await fetch(`/api/bookmark/${bookmark}`, {
      method: 'POST',
      body: JSON.stringify({
        content_id: data[0]?.id,
        url_key: router.query.slug,
      }),
    });

    if (res.status === 200) setIsBookmarked(true);
  };

  const handleRemoveBookmark = async () => {
    const bookmark =
      router.route === '/resep/[slug]' ? 'remove-recipe' : 'remove-article';

    const res = await fetch(`/api/bookmark/${bookmark}`, {
      method: 'POST',
      body: JSON.stringify({
        content_id: data[0]?.id,
        url_key: router.query.slug,
      }),
    });

    if (res.status === 200) setIsBookmarked(false);
  };

  return (
    <IconButton size="small" onClick={handleBookmark}>
      {isBookmarked ? <BookmarkFilled /> : <BookmarkLight />}
    </IconButton>
  );
};

export default Bookmark;
