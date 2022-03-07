import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import useDraggableScroll from 'use-draggable-scroll';

import Skeleton from '@mui/material/Skeleton';

import ACTIONS from 'store/registerActions';

const ListYoutube = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { listYoutube, loading } = useSelector((state) => state.youtube);
  const { onMouseDown } = useDraggableScroll(ref, { direction: 'horizontal' });

  useEffect(() => {
    dispatch(ACTIONS.youtube.getListYoutube());
  }, []);

  if (loading)
    return (
      <Wrapper>
        <Skeleton variant="rectangular" width="448px" height="200px" />
        <div className="youtube__list">
          <Skeleton variant="rectangular" className="youtube__list__item" />
          <Skeleton variant="rectangular" className="youtube__list__item" />
          <Skeleton variant="rectangular" className="youtube__list__item" />
        </div>
      </Wrapper>
    );

  return (
    <Wrapper>
      <iframe src={listYoutube[0].acf.link.replace('watch?v=', 'embed/')} />
      <div className="youtube__list" ref={ref} onMouseDown={onMouseDown}>
        {listYoutube.map(
          (youtube, i) =>
            i > 0 && (
              <a
                key={`${i}-${youtube.acf.link}`}
                target="_blank"
                href={youtube.acf.link}
                rel="noopener noreferrer"
                className="youtube__list__item"
              >
                <img
                  src={youtube.acf.image}
                  alt={`youtube-${youtube.acf.title}`}
                />
              </a>
            )
        )}
      </div>
    </Wrapper>
  );
};
export default ListYoutube;

const Wrapper = styled.div`
  iframe {
    border: 0;
    filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
  }

  .youtube {
    &__list {
      margin-top: 24px;
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;

      &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
      }

      &__item {
        margin: 0 8px;

        img {
          border-radius: 8px;

          width: 200px;
          height: 125px;
          object-fit: cover;
        }

        &:first-child {
          margin: 0;
        }
        &:last-child {
          margin: 0;
        }
      }
    }
  }
`;
