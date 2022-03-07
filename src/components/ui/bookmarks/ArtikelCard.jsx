import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import useSWR from 'swr';

import { IconButton, Skeleton } from '@mui/material';

import fetcher from 'utils/fetcher';
import { MICROSERVICE_BASE_URL } from 'utils/constant';
import { Bookmark as BookmarkFilled } from 'components/icons/bookmark-light';

const MONTH = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const ArtikelCard = ({ item, mutate }) => {
  const d = new Date(item.created_at);
  const monthName = MONTH[d.getMonth()];
  const day = d.getDate();

  const { data } = useSWR(
    `${MICROSERVICE_BASE_URL}/posts?slug=${item.url_key}`,
    fetcher,
    {
      revalidateOnMount: true,
      onSuccess: async (data) => {
        if (data.length === 0) await removeBookmark();
      },
    }
  );

  const handleRemoveBookmark = async (e) => {
    e.stopPropagation();
    await removeBookmark();
  };

  const removeBookmark = async () => {
    const res = await fetch(`/api/bookmark/remove-article`, {
      method: 'POST',
      body: JSON.stringify({
        content_id: item.content_id,
        url_key: item.url_key,
      }),
    });

    if (res.status === 200) mutate();
  };

  if (data === undefined)
    return (
      <Skeleton
        variant="rectangular"
        width="424px"
        height="124px"
        sx={{ borderRadius: '8px' }}
      />
    );

  if (data.length === 0) return null;

  return (
    <Link href={`/artikel/${data[0].slug}`} passHref>
      <Wrapper>
        <img
          src={data[0]?.better_featured_image?.source_url}
          alt=""
          className="info__img"
        />
        <div className="info">
          <div className="info__company">
            <img src="/assets/amLogo.png" alt="" />
            <span className="info__company--text">Awalmula</span>
          </div>
          <span className="info__title">{data[0]?.title?.rendered}</span>
          <div className="info__date">
            <span className="info__date--time">{`${monthName} ${day}`}</span>
            <span className="info__date--dot">•</span>
            <span className="info__date--time">{data[0]?.acf?.time}</span>
          </div>
        </div>
        <IconButton size="small" onClick={handleRemoveBookmark}>
          <BookmarkFilled />
        </IconButton>
      </Wrapper>
    </Link>
  );
};

export default ArtikelCard;

ArtikelCard.propTypes = {
  item: PropTypes.shape({
    content_id: PropTypes.string,
    content_type: PropTypes.string,
    created_at: PropTypes.string,
    customer_id: PropTypes.string,
    id: PropTypes.string,
    url_key: PropTypes.string,
  }),
  mutate: PropTypes.func,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px;
  background: #ffffff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  cursor: pointer;

  .info {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    height: 100%;

    &__img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin-right: 16px;
      border-radius: 8px;
    }
    &__company {
      display: flex;
      flex-direction: row;
      align-items: center;
      &--text {
        font-family: 'Nunito Sans', sans-serif;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: 0.1px;
        color: #6f6f6f;
      }
      img {
        width: 20px;
        height: 20px;
        object-fit: cover;
        margin-right: 8px;
      }
    }
    &__title {
      width: 220px;
      font-family: 'Nunito Sans', sans-serif;
      font-size: 15px;
      line-height: 20px;
      letter-spacing: 0.15px;
      color: #25282b;
      margin-top: 8px;
    }
    &__date {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: auto;
      &--time {
        font-family: 'Nunito Sans', sans-serif;
        font-size: 11px;
        line-height: 15px;
        color: #6f6f6f;
      }
      &--dot {
        color: #6f6f6f;
        font-size: 10px;
        margin: 0 8px;
      }
    }
  }
`;
