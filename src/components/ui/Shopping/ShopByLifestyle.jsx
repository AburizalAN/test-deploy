import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Skeleton from '@mui/material/Skeleton';

import { useSelector } from 'react-redux';
import useDraggableScroll from 'use-draggable-scroll';

const ShopByLifestyle = () => {
  const ref = useRef(null);
  const scrollBarRef = useRef(null);
  const { listProductdietByLifestyle, loading } = useSelector(
    (state) => state.shopByLifestyle
  );
  const { onMouseDown } = useDraggableScroll(ref, { direction: 'horizontal' });

  const handleNavigation = () => {
    const scale =
      (ref.current.scrollWidth - ref.current.clientWidth) / (48 - 27);
    scrollBarRef.current.style.transform = `translateX(${
      ref.current.scrollLeft / scale
    }px)`;
  };

  useEffect(() => {
    if (ref.current) ref.current.addEventListener('scroll', handleNavigation);

    return () => {
      if (ref.current)
        ref.current.removeEventListener('scroll', handleNavigation);
    };
  }, []);

  if (listProductdietByLifestyle.length === 0) return <div />;

  return (
    <Wrapper>
      <h2 className="header">Shop by Lifestyle</h2>
      <div className="list" ref={ref} onMouseDown={onMouseDown}>
        {loading ? (
          <>
            <Skeleton
              variant="rectangular"
              width="115px"
              height="120px"
              className="list__loading"
            />
            <Skeleton
              variant="rectangular"
              width="115px"
              height="120px"
              className="list__loading"
            />
            <Skeleton
              variant="rectangular"
              width="115px"
              height="120px"
              className="list__loading"
            />
            <Skeleton
              variant="rectangular"
              width="115px"
              height="120px"
              className="list__loading"
            />
            <Skeleton
              variant="rectangular"
              width="115px"
              height="120px"
              className="list__loading"
            />
          </>
        ) : (
          listProductdietByLifestyle.map((product, index) => (
            <Link
              href={product.link_click_slider}
              passHref
              key={`${product.name}-${index}`}
            >
              <div className="card">
                <p className="card__title">{product.name}</p>
                <img src={product.image_slider} alt="" className="card__img" />
                <img
                  src="/assets/img/product_lifestyle_bg.png"
                  alt=""
                  className="card__img__bg"
                />
              </div>
            </Link>
          ))
        )}
      </div>

      <div className="scroll">
        <div className="scroll__bar" ref={scrollBarRef} />
      </div>
    </Wrapper>
  );
};

export default ShopByLifestyle;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  .header {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 800;
    font-size: 18px;
    letter-spacing: 0.15px;
    color: #000000;
  }

  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    &::-webkit-scrollbar {
      display: none;
    }

    &__loading {
      margin-right: 8px;
      flex-shrink: 0;
    }
  }

  .card {
    background: #ecf0d9;
    border-radius: 4px;
    width: 115px;
    height: 120px;
    padding: 8px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    z-index: 0;
    flex-shrink: 0;
    margin-right: 8px;
    p {
      margin: 0;
    }
    &__title {
      font-family: 'Nunito Sans', sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      letter-spacing: 0.15px;
      color: #265329;
      z-index: 3;
      position: relative;
    }
    &__img {
      position: absolute;
      bottom: -10px;
      right: 0;
      width: 71px;
      object-fit: cover;
      border-radius: 999px;
      z-index: 2;
      &__bg {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1;
      }
    }
  }

  .scroll {
    display: flex;
    flex-direction: row;
    background: #a8a9aa;
    border-radius: 46px;
    width: 48px;
    height: 6px;
    margin: 1rem auto;
    &__bar {
      background: #265329;
      border-radius: 46px;
      width: 27px;
      height: 100%;
      transform: translateX(0);
    }
  }
`;
