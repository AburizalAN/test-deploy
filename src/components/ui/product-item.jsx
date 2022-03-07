import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rupiah } from 'utils/currency';
import mediaQuery from 'utils/media-query';
import FavoriteLightIcon from 'components/icons/favorite';
import FavoriteRedIcon from 'components/icons/favorite-red';
import Box from '@mui/material/Box';

const BadgeGluten = '/assets/icons/gluten.svg';
const Product = '/assets/img/product.png';

const ItemWrapper = styled.div`
  border: 1px solid #c4c4c4;
  background: ${(props) => (props.bgColor ? props.bgColor : '#ffffff')};
  border-radius: 10px;
  min-width: 132px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;
  filter: ${(props) => (props['aria-disabled'] ? 'grayscale(100%)' : '')};

  .productDesc {
    color: #25282b;
    padding: 0 4px;
    display: flex;
    flex-direction: column;
    flex: 1;
    p {
      margin: 0;
    }
    p.categoryDesc {
      margin: 8px 0;
      color: #ed8734;
      font-weight: 700;
      font-size: 13px;
    }
    p.productName {
      margin-bottom: 8px;
      font-size: 15px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    p.productWeight {
      font-weight: 600;
      color: #6f6f6f;
      font-size: 13px;
      margin-bottom: 24px;
    }
    p.productWeight {
      font-size: 15px;
      margin-bottom: 8px;
    }
    p.productPrice {
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 12px;
    }
  }
`;
// const OtherWrapper = styled.div`
//   // border: 1px solid #c4c4c4;
//   background: ${(props) => (props.bgColor ? props.bgColor : '#ffffff')};
//   border-radius: 10px;
//   height: 285px;
//   min-width: 132px;
//   max-width: 132px;
//   margin: 7.5px 12px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;

//   div.iconChev {
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     svg {
//       background: rgba(255, 255, 255, 0.3);
//       padding: 5px;
//       border-radius: 20px;
//     }
//   }
// `;
const PhotoWrapper = styled.div`
  border-radius: 10px 0 10px 0;
  ${'' /* background: #f7f7f7; */}
  // width: 132px;
  padding: 12px;
  // display: flex;
  // align-items: center;
  display: inline-flex;

  height: 132px;
  img.product {
    width: 100%;
    height: 120px;
    object-fit: contain;
    object-position: center;
  }
`;
const BadgePromo = styled.div`
  border-radius: 10px 0 10px 0;
  background: ${(props) => props.bgColors ?? '#a0c16b'};
  position: absolute;
  // margin: -12px 0 0 -12px;
  top: -1px;
  left: 0;
  padding: 2px 12px;
  p {
    margin: 0;
    color: #fff;
    font-size: 13px;
  }
`;
const BadgeWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  margin-top: 12px;
  margin-right: 5px;
  svg {
    margin: 0px 0 4px;
  }

  div.badgeIcon {
    min-width: 24px;
    max-width: 24px;
    min-height: 24px;
    max-height: 24px;
    margin-bottom: 4px;
    img {
      width: 100%;
    }
  }
`;
const BadgeFlashSale = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const ProductLarge = styled.div`
  overflow: hidden;
  border: 1px solid #c4c4c4;
  background: ${(props) => (props.bgColor ? props.bgColor : '#ffffff')};
  filter: ${(props) => (props['aria-disabled'] ? 'grayscale(1)' : '')};
  border-radius: 10px;
  min-height: 310px;
  ${'' /* max-height: 365px; */}
  min-width: 160px;
  max-width: 160px;

  ${mediaQuery.greaterThan('screen375')`
    min-width: 165px;
    max-width: 165px;
  `}
  ${mediaQuery.lessThan('screen360')`
    min-width: 135px;
    max-width: 135px;
  `}

  margin: 7.5px 6px;
  overflow: hidden;
  position: relative;

  .productDesc {
    color: #25282b;
    padding: 0 12px;
    min-height: 130px;
    display: grid;
    align-content: space-evenly;
    p {
      margin: 0;
    }
    p.categoryDesc {
      margin: 12px 0;
      color: #ed8734;
      font-weight: 700;
      font-size: 13px;
    }
    p.productName {
      color: #25282b;
      margin-bottom: 8px;
      font-size: 13px;
      font-weight: 700;
      line-height: 17.73px;
      max-height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    p.productWeight {
      font-weight: 600;
      color: #6f6f6f;
      font-size: 15px;
      margin-bottom: 8px;
    }
    p.productPrice {
      font-size: 15px;
      font-weight: 700;
      // margin-bottom: 8px;
    }

    div.discWrapper {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      p {
        margin: 0;
      }
      p.disc {
        padding: 4px 8px;
        background: #feeceb;
        color: #b42519;
        font-weight: 400;
        font-size: 9px;
        border-radius: 4px;
      }
      p.discStrike {
        font-size: 9px;
        margin-left: 8px;
        color: #6f6f6f;
        text-decoration: line-through;
      }
    }

    div.priceWrapper {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      justify-content: space-between;
      svg.favIcons {
        max-width: 20px;
        margin-left: auto;
        fill: #d8d8d8;
      }
    }

    div.buttonWrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px 0;
    }
  }
`;
const DiscountWrapper = styled.div`
  display: flex;
  align-items: center;
  span:not(:last-child) {
    margin-right: 8px;
  }
  margin-bottom: 8px;
  .discount {
    background-color: #feeceb;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    font-size: 9px;
    color: #b42519;
  }
  .priceBefore {
    font-size: 9px;
    color: #6f6f6f;
    text-decoration: line-through;
  }
`;

export const RibbonTop = ({ text = 'PROMO', bgColors }) => {
  return (
    <BadgePromo bgColors={bgColors}>
      <p>{text}</p>
    </BadgePromo>
  );
};

const RibbonFlashSale = () => {
  return (
    <BadgeFlashSale>
      <img src="/assets/img/ribbon-flashsale.png" alt="ribbon-flashsale" />
    </BadgeFlashSale>
  );
};

export const ProductItem = ({
  name,
  image,
  brand,
  price,
  specialPrice,
  weight,
  promo = false,
  badge = [],
  productActive,
  onClick,
  isFlashSale,
}) => {
  const discount = parseInt(((price - specialPrice) / price) * 100);
  return (
    <ItemWrapper
      aria-disabled={!productActive}
      onClick={productActive ? onClick : null}
    >
      <PhotoWrapper>
        {promo == true && <RibbonTop />}
        {isFlashSale ? <RibbonFlashSale /> : null}
        <BadgeWrapper>
          {badge.map((item, index) => {
            if (item?.image_url) {
              return (
                <div key={index} className="badgeIcon">
                  <img src={item.image_url} alt={item.name} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </BadgeWrapper>
        <div>
          <img src={image} alt="product" className="product" />
        </div>
      </PhotoWrapper>
      <div className="productDesc">
        <p className="categoryDesc">{brand !== '&nbsp' ? brand : '\u00a0'}</p>
        <div>
          <p className="productName">{name || 'Java Breakfast'}</p>
        </div>
        <p className="productWeight">{`${weight}` || ''}</p>
        {specialPrice ? (
          <DiscountWrapper>
            <span className="discount">{discount}%</span>
            <span className="priceBefore">
              Rp {new Intl.NumberFormat('id').format(price)}
            </span>
          </DiscountWrapper>
        ) : null}
        <p className="productPrice">{rupiah(specialPrice || price)}</p>
      </div>
    </ItemWrapper>
  );
};

const Discount = ({ discount = 0, priceStrike = 0 }) => {
  if (discount !== 100) {
    return (
      <div className="discWrapper">
        <p className="disc">{discount}%</p>
        <p className="discStrike">{rupiah(priceStrike)}</p>
      </div>
    );
  } else {
    return (
      <div className="discWrapper" style={{ display: 'none' }}>
        <p className="disc">{discount}%</p>
        <p className="discStrike">{rupiah(priceStrike)}</p>
      </div>
    );
  }
};

export const ProductItems = ({
  name,
  brand = 'Singabera',
  discount,
  price,
  priceStrike,
  weight,
  promo = false,
  image = Product,
  callback,
  productActive,
  badge,
  handleAddToWishlist,
  activeWishlist,
}) => {
  return (
    <ProductLarge className="productLargeWrap" aria-disabled={!productActive}>
      <div onClick={productActive ? callback : null}>
        <PhotoWrapper>
          {promo == true && <RibbonTop />}
          <BadgeWrapper>
            {badge.map((item, index) => {
              let parseitem =
                typeof item === 'object' ? item : JSON.parse(item);

              if (parseitem?.image_url) {
                return (
                  <div key={index} className="badgeIcon">
                    <img src={parseitem?.image_url} alt={parseitem?.name} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </BadgeWrapper>
          <div>
            <img src={image} alt="product" className="product" />
          </div>
        </PhotoWrapper>
        <div className="productDesc">
          <p className="categoryDesc">{brand !== '&nbsp' ? brand : '\u00a0'}</p>
          <p className="productName">{name || 'Java Breakfast'}</p>
          <p className="productWeight">{weight || 'realfood'}</p>
          {/* hidden={discount !== 100 && 'hidden'} */}
          <Discount discount={discount} priceStrike={priceStrike} />
        </div>
      </div>
      <Box
        className="productDesc"
        sx={{
          flexDirection: 'row !important',
          py: '0 !important',
          minHeight: '20px !important',
          '& .priceWrapper': {
            justifyContent: 'space-between !important',
          },
        }}
        mb={1}
      >
        <div className="priceWrapper">
          <p className="productPrice">{rupiah(price || 1000)}</p>
          <div
            style={{ height: '25px', cursor: 'pointer' }}
            onClick={handleAddToWishlist}
          >
            {activeWishlist ? <FavoriteRedIcon /> : <FavoriteLightIcon />}
          </div>
        </div>
      </Box>
    </ProductLarge>
  );
};

RibbonTop.propTypes = {
  text: PropTypes.string,
  bgColors: PropTypes.string,
};

ProductItem.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  weight: PropTypes.string,
  price: PropTypes.number,
  specialPrice: PropTypes.number,
  promo: PropTypes.bool,
  image: PropTypes.string,
  badge: PropTypes.array,
  onClick: PropTypes.func,
  productActive: PropTypes.bool,
  isFlashSale: PropTypes.bool,
};
ProductItems.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  weight: PropTypes.string,
  price: PropTypes.number,
  priceStrike: PropTypes.number,
  promo: PropTypes.bool,
  image: PropTypes.string,
  badge: PropTypes.array,
};

export default ProductItem;
