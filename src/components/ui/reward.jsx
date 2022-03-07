import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Styled = {
  SliderWrapper: styled.div`
    max-width: 100%;
    .slick-dots {
      li {
        width: 10;
      }
    }

    .slick-slide {
      padding: 0 10px;

      .list {
        border: 1px solid #eee;
        background-color: #fff;
        height: 250px;
        padding: 0 10px;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
        border-radius: 13px;

        &.viewVoucher {
          height: 270px;
          margin: 5px 0;
          background-color: #588145;
          padding: 80px 0;

          .viewAllContent {
            text-align: center;
          }
        }

        &.viewProduct {
          height: 215px;
          background-color: #588145;
          padding: 50px 0;

          .viewAllProduct {
            text-align: center;
          }
        }
      }

      img {
        width: 100%;
        height: 120px;
        object-fit: contain;
        margin-left: auto;
        margin-right: auto;
        margin: 5px auto;
      }

      .desc {
        height: 40px;
      }

      .point {
        padding: 5px 0 0;
        text-align: left;
        font-size: 13px;
        font-weight: 600;
        color: #bc4749;
      }
    }

    .slick-list {
      padding: 0 20% 0 0 !important;
    }
  `,
  DotsWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 0 10px;
  `,
  Dots: styled.div`
    width: 4px;
    height: 4px;
    background: #d1d1d6;
    border-radius: 46px;
  `,
  DotsActive: styled.div`
    width: 18px;
    height: 4px;
    background: #a0c16b;
    border-radius: 46px;
  `,
};

export const SectionProductSlider = styled.section`
  .MuiTabs-scrollableX {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  }
  .MuiTabs-indicator {
    height: 4px !important;
  }
  .MuiTab-root {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    text-align: justify;
    color: #265329;
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
  align-items: ${({ alignItems }) => alignItems ?? 'unset'};
  position: relative;
  padding: ${({ py }) => py ?? '0px'} ${({ px }) => px ?? '0px'};
  margin-bottom: ${({ mb }) => mb ?? '0px'};
  background: ${(props) => props.background};
`;

export const SlideWrapper = styled.div.attrs({ className: 'scrollX' })`
  // padding: 12px 0 0 12px;
  // padding-left: 20px;
  padding: 7.5px ${({ px }) => px ?? '0px'};
  min-height: ${(props) => props.minHeight};

  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

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
    margin-left: 0px;
  }
`;

export const Reward = ({ dots = true, children, ...rest }) => {
  const [slideActive, setSlideActive] = React.useState(0);

  const settings = {
    dots,
    infinite: false,
    speed: 200,
    // slidesToShow: 4,
    // slidesToScroll: 1,
    centerMode: true,
    centerPadding: '28%',
    nextArrow: <React.Fragment />,
    beforeChange: (_, next) => {
      setSlideActive(next);
    },
    customPaging: (i) => {
      return (
        <Styled.DotsWrapper isActive={i === slideActive}>
          {i === slideActive ? <Styled.DotsActive /> : <Styled.Dots />}
        </Styled.DotsWrapper>
      );
    },
    ...rest,
  };

  return (
    <Styled.SliderWrapper>
      <Slider {...settings}>{children}</Slider>
    </Styled.SliderWrapper>
  );
};

Reward.propTypes = {
  // children: PropTypes.oneOf([PropTypes.node, PropTypes.string, PropTypes.any]),
  children: PropTypes.any,
  dots: PropTypes.bool,
};

export default Reward;
