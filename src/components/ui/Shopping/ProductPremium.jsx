import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { capitalizeEachWord } from 'utils/helper';
import ProductCategoryItem from '../product-category-item';
import useDraggableScroll from 'use-draggable-scroll';

const ProductPremium = ({ addToWishlist, removeWishlist }) => {
  const router = useRouter();
  const ref = useRef(null);
  const { productPremiumSlider } = useSelector(
    (state) => state.productbyCategory
  );
  const { wishlist } = useSelector((state) => state.me);

  const { onMouseDown } = useDraggableScroll(ref, { direction: 'horizontal' });

  if (productPremiumSlider === undefined || productPremiumSlider === null)
    return <div />;

  return (
    <Wrapper bg={productPremiumSlider?.hexa_color}>
      <img src={productPremiumSlider.image} alt="" className="img__banner" />
      <div className="list" ref={ref} onMouseDown={onMouseDown}>
        {productPremiumSlider.products.map((product, index) => {
          const activeWishlist = wishlist?.items?.filter(
            (res) => res?.product?.name === product?.name
          )?.length
            ? true
            : false;

          return (
            <div className={'sliderItems'} key={index}>
              <ProductCategoryItem
                name={product?.name}
                price={product?.price}
                specialPrice={product?.special_price}
                weight={
                  capitalizeEachWord(product.warehouse_data.name) || 'awalmula'
                }
                brand={product?.brand_name || '&nbsp'}
                image={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${product?.image}`}
                badge={product?.product_diet}
                onClick={() => router.push(`/produk/${product.url_key}`)}
                productActive={product?.is_salable === 1}
                handleAddToWishlist={() =>
                  activeWishlist
                    ? removeWishlist(
                        wishlist?.items?.filter(
                          (res) => res?.product?.sku === product?.sku
                        )[0]
                      )
                    : addToWishlist(product)
                }
                activeWishlist={activeWishlist}
              />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

ProductPremium.propTypes = { addToWishlist: PropTypes.func };

export default ProductPremium;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ bg }) => bg};

  div.sliderItem {
    height: 100%;
    margin: 0 10px;
    border-radius: ${(props) => props.borderRadius};
  }
  div.sliderItems {
    height: 100%;
    // margin: 7.5px 12px;
    border-radius: ${(props) => props.borderRadius};
    &:not(:last-child) {
      margin-right: 12px;
    }
  }

  div.sliderItem:nth-child(1) {
    margin-left: 0;
  }

  .list {
    padding: 7.5px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .img {
    &__banner {
      width: 156px;
      margin-right: 12px;
    }
  }
`;
