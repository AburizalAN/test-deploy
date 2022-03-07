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
  `,
  DotsWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 -5px;
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

export const SimpleSlider = ({
  dots = true,
  prevArrow = <React.Fragment />,
  nextArrow = <React.Fragment />,
  children,
  ...rest
}) => {
  const [slideActive, setSlideActive] = React.useState(0);
  const settings = {
    dots,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    beforeChange: (_, next) => {
      // here to detect slide change
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

SimpleSlider.propTypes = {
  // children: PropTypes.oneOf([PropTypes.node, PropTypes.string, PropTypes.any]),
  nextArrow: PropTypes.any,
  prevArrow: PropTypes.any,
  children: PropTypes.any,
  dots: PropTypes.bool,
};

export default SimpleSlider;
