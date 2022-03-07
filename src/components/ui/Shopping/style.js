import PropTypes from 'prop-types';
import { ChevronRight } from '@mui/icons-material';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import { StyledButton } from '../button';
import { createTheme, ThemeProvider } from '@mui/material';
import mediaQuery from 'utils/media-query';

const BrandChoice = '/assets/img/brand-choice.png';
const BrandPartner = '/assets/img/brand-choice-mitra.png';

// const Styled = {
//   FlexContainer: styled.div`
//     display: flex;
//     flex-wrap: wrap;
//   `,
//   SectionSlider: styled.section`
//     margin: 5px 0 20px;
//     display: flex;
//   `,
//   SectionIcons: styled.section`
//     padding: 12px;

//     div.iconWrapper {
//       background: #ffffff;
//       box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
//       border-radius: 8px;
//       min-height: 100%;
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;
//       // align-items: center;
//       padding: 12px;

//       div.columnIcon {
//         // margin: 10px 0;
//         display: flex;
//         align-items: flex-start;
//         // flex-direction: column;
//         justify-content: space-between;
//       }
//       div.columnIcon:nth-child(2) {
//         margin-top: 20px;
//       }
//     }
//   `,
//   IconWrapper: styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background: #cee5a8;
//     border-radius: 20px;
//     width: 40px;
//     min-height: 40px;
//   `,
//   IconSub: styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//     flex-direction: column;
//     // margin-right: 10px;
//     width: 40px;

//     p {
//       margin: 5px 0;
//       font-size: 11px;
//       text-align: center;
//     }
//   `,
//   SectionPromo: styled.section`
//     padding: 12px;

//     div.titleWrapper {
//       margin: 8px 0 16px;
//       text-align: center;
//       font-weight: 700;
//       font-size: 15px;
//       p {
//         margin: 0;
//       }
//     }

//     .slideCenter {
//       max-height: 128px;

//       // .slick-slide {
//       //   margin-left: 10px;
//       // }
//       // .slick-list {
//       //   margin-left: -10px;
//       // }

//       .slick-slide {
//         padding: 0 8px;
//         box-sizing: border-box;
//       }

//       img {
//         // margin: 0 10px;
//         // width: 100%;
//         max-height: 128px;

//         border-radius: 10px;
//       }
//     }
//   `,
//   SectionPromoItem: styled.section`
//     // padding: 12px;
//     margin-top: 36px;
//   `,
//   SectionBorder: styled.section`
//     margin: 10px 0 0;
//   `,
//   SlideWrapper: styled.div`
//     // padding: 12px 0 0 12px;
//     // padding-left: 20px;
//     min-height: 300px;

//     display: flex;
//     flex-wrap: nowrap;
//     overflow-x: auto;

//     div.sliderItem {
//       height: 100%;
//       margin: 0 10px;
//       border-radius: ${(props) => props.borderRadius};
//     }
//     div.sliderItems {
//       height: 100%;
//       // margin: 7.5px 12px;
//       border-radius: ${(props) => props.borderRadius};
//     }

//     div.sliderItem:nth-child(1) {
//       margin-left: 0px;
//     }
//   `,
//   ItemWrapper: styled.div`
//     border: 1px solid #c4c4c4;
//     background: ${(props) => (props.bgColor ? props.bgColor : '#ffffff')};
//     border-radius: 10px;
//     height: 285px;
//     width: 132px;
//     margin: 7.5px 6px;

//     .productDesc {
//       color: #25282b;
//       padding: 0 4px;
//       p {
//         margin: 0;
//       }
//       p.categoryDesc {
//         margin: 12px 0;
//         color: #ed8734;
//         font-weight: 700;
//         font-size: 13px;
//       }
//       p.productName {
//         margin-bottom: 20px;
//         font-size: 15px;
//         font-weight: 700;
//       }
//       p.productWeight {
//         font-weight: 600;
//         color: #6f6f6f;
//         font-size: 13px;
//         margin-bottom: 24px;
//       }
//       p.productWeight {
//         font-size: 15px;
//         margin-bottom: 12px;
//       }
//       p.productPrice {
//         font-size: 15px;
//         font-weight: 700;
//         margin-bottom: 12px;
//       }
//     }
//   `,
//   OtherWrapper: styled.div`
//     // border: 1px solid #c4c4c4;
//     background: ${(props) => (props.bgColor ? props.bgColor : '#ffffff')};
//     border-radius: 10px;
//     height: 285px;
//     min-width: 132px;
//     max-width: 132px;
//     margin: 7.5px 12px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: white;

//     div.iconChev {
//       display: flex;
//       flex-direction: column;
//       align-items: center;

//       svg {
//         background: rgba(255, 255, 255, 0.3);
//         padding: 5px;
//         border-radius: 20px;
//       }
//     }
//   `,
//   PhotoWrapper: styled.div`
//     border-radius: 10px 10px 0 0;
//     background: #f7f7f7;
//     // width: 132px;
//     padding: 12px;

//     height: 132px;
//   `,
//   BadgePromo: styled.div`
//     border-radius: 10px 0 0 10px;
//     background: #a0c16b;
//     position: absolute;
//     margin: -12px 0 0 -12px;
//     padding: ;
//   `,

//   SectionBannerCategory: styled.section`
//     padding: 8px 12px;
//     img.bannerCategory:nth-child(1) {
//       margin-right: 4px;
//       width: 49%;
//     }
//   `,
//   Title: styled.p`
//     margin: 0;
//     max-width: 50%;
//     font-weight: 700;
//     font-size: 15px;
//   `,
//   SectionProductSlide: styled.section`
//     // padding:12px;
//   `,
//   SectionBrandAds: styled.section`
//     padding: 12px;
//     margin-top: 36px;

//     img.bannerAds {
//       width: 100%;
//     }
//   `,
//   SectionLifestyle: styled.section`
//     padding: 12px;
//     margin-top: 36px;
//     background: #faf7e4;

//     div.lifestyleWrapper {
//       background: #7da024;
//       min-width: 130px;
//       height: 176px;
//       border-radius: 10px;
//       margin: 0 4px;

//       div.logoWrap {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         padding: 15px;
//         height: 70%;
//       }
//       div.textWrap {
//         display: flex;
//         background: #fff;
//         text-align: center;
//         align-items: center;
//         justify-content: center;
//         // padding:15px;
//         height: 30%;
//         font-size: 15px;
//         border-radius: 0 0 10px 10px;
//         font-weight: 700;
//         padding: 12px 0;
//       }
//     }
//   `,
//   SectionBrand: styled.section`
//     margin-top: 32px;
//     background: #eef6eb;
//     padding-left: 12px;
//     padding-bottom: 8px;

//     div.brandWrapper {
//       position: relative;
//       margin-top: 20px;
//       margin-right: 20px;
//       border-radius: 8px;
//       background: #fff;
//       height: 240px;
//       min-width: 174px;

//       div.logoBrand {
//         position: absolute;
//         display: flex;
//         align-self: center;
//         margin-top: -20px;
//         padding: 8px 12px;
//         background: #ffffff;
//         box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
//         border-radius: 10px;
//         min-height: 40px;
//         min-width: 100px;
//         left: 50%;
//         transform: translate(-50%, 0%);
//       }

//       div.imgWrapper {
//         min-height: 160px;
//         img {
//           border-radius: 0px 0px 8px 8px;
//         }
//       }

//       div.discountWrapper {
//         padding: 30px 12px 10px;

//         div.discount {
//           border-radius: 4px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: #e4f9c3;
//           padding: 10px;
//           // text-align: center;
//           color: #63901a;
//           font-weight: 700;
//           p {
//             font-size: 15px;
//             margin: 0;
//           }
//         }
//       }
//     }
//   `,
//   SectionAds: styled.section`
//     margin: 36px 12px;
//     max-height: 100px;
//     width: 351px;

//     img {
//       width: 100%;
//     }
//   `,
// };

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

export const SectionSlider = styled.section`
  margin: 5px 0 10px;
  display: flex;
`;
export const SectionIcons = styled.section`
  position: relative;
  overflow: hidden;
  padding: 12px 17.5px 0px;
  justify-content: space-around;
  flex-wrap: wrap;
  display: flex;
  // background: #eef6eb;
  display: flex;
  justify-content: center;

  .sliderIcons::-webkit-scrollbar {
    display: none;
  }

  div.iconWrapper {
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // align-items: center;
    padding: 12px;

    div.columnIcon {
      // margin: 10px 0;
      display: flex;
      align-items: flex-start;
      // flex-direction: column;
      justify-content: space-between;
    }
    div.columnIcon:nth-child(2) {
      margin-top: 20px;
    }
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 46px;
  min-height: 46px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  overflow: hidden;
  img {
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    object-fit: contain;
    max-height: 28px;
  }
`;
export const IconSub = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 15px;
  width: 80px;

  &:not(:last-child) {
    margin-right: 24px;
  }

  p {
    font-weight: 700;
    color: #486140; // todo: theming primary etc
    margin: 8px 0;
    font-size: 13px;
    text-align: center;
  }
  &&& {
    span.badgeNew {
      span {
        border-radius: 2px;
        padding: 4px;
        font-size: 9px;
      }
    }
  }
`;
export const SectionPromo = styled.section`
  padding: 12px;

  div.titleWrapper {
    margin: 8px 0 16px;
    text-align: center;
    font-weight: 800;
    font-size: 18px;
    p {
      margin: 0;
    }
  }

  .slideCenter {
    max-height: 128px;

    // .slick-slide {
    //   margin-left: 10px;
    // }
    // .slick-list {
    //   margin-left: -10px;
    // }

    .slick-slide {
      padding: 0 8px;
      box-sizing: border-box;
    }

    img {
      // margin: 0 10px;
      // width: 100%;
      max-height: 128px;

      border-radius: 10px;
    }
  }
`;
export const SectionPromoItem = styled.section`
  // padding: 12px;
  margin-top: 36px;
`;
export const SectionBorder = styled.section`
  margin: 10px 0 0;
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
export const ItemWrapper = styled.div`
  border: 1px solid #c4c4c4;
  background: ${(props) => (props.bgColor ? props.bgColor : '#ffffff')};
  border-radius: 10px;
  height: 285px;
  width: 132px;
  margin: 7.5px 6px;

  .productDesc {
    color: #25282b;
    padding: 0 4px;
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
      margin-bottom: 20px;
      font-size: 15px;
      font-weight: 700;
    }
    p.productWeight {
      font-weight: 600;
      color: #6f6f6f;
      font-size: 13px;
      margin-bottom: 24px;
    }
    p.productWeight {
      font-size: 15px;
      margin-bottom: 12px;
    }
    p.productPrice {
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 12px;
    }
  }
`;
export const OtherWrapper = styled.div`
  // border: 1px solid #c4c4c4;
  background: ${(props) => (props.bgColor ? props.bgColor : '#ffffff')};
  border-radius: 10px;
  height: 285px;
  min-width: 75px;
  max-width: 75px;
  height: 100%;
  margin: auto 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white !important;
  z-index: 0;

  a {
    color: white !important;
  }

  div.iconChev {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      background: rgba(255, 255, 255, 0.3);
      padding: 5px;
      border-radius: 20px;
    }
  }
`;
export const PhotoWrapper = styled.div`
  border-radius: 10px 10px 0 0;
  background: #f7f7f7;
  // width: 132px;
  padding: 12px;

  height: 132px;
`;
export const BadgePromo = styled.div`
  border-radius: 10px 0 0 10px;
  background: #a0c16b;
  position: absolute;
  margin: -12px 0 0 -12px;
  padding: ;
`;
export const SectionBannerCategory = styled.section`
  padding: 8px 12px;
  margin-bottom: 32px;

  .imgWrap {
    flex: 1;
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
  // img.bannerCategory:nth-child(1) {
  //   margin-right: 4px;
  //   // width: 49%;
  // }
  img.bannerCategory {
    width: 100%;
  }
`;
export const StyledLink = styled.a`
  text-decoration: none;
`;
export const Title = styled.p`
  margin: 0;
  max-width: 50%;
  font-weight: 800;
  font-size: 18px;
  margin: 0;
`;
export const SectionProductSlide = styled.section`
  // padding:12px;
`;
export const SectionBrandAds = styled.section`
  padding: 12px;
  margin-top: -46px;

  img.bannerAds {
    width: 100%;
  }
`;
export const SectionLifestyle = styled.section`
  padding: 12px;
  margin-top: 36px;
  background: #faf7e4;

  div.lifestyleWrapper {
    background: #7da024;
    min-width: 130px;
    height: 176px;
    border-radius: 10px;
    margin: 0 4px;

    div.logoWrap {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      height: 70%;
    }
    div.textWrap {
      display: flex;
      background: #fff;
      text-align: center;
      align-items: center;
      justify-content: center;
      // padding:15px;
      height: 30%;
      font-size: 15px;
      border-radius: 0 0 10px 10px;
      font-weight: 700;
      padding: 12px 0;
    }
  }
`;
export const SectionBrand = styled.section`
  margin-top: 32px;
  background: #eef6eb;
  padding-left: 12px;
  padding-bottom: 8px;

  div.brandWrapper {
    position: relative;
    margin-top: 20px;
    margin-right: 20px;
    border-radius: 8px;
    background: #fff;
    height: 240px;
    min-width: 174px;

    div.logoBrand {
      position: absolute;
      display: flex;
      align-self: center;
      margin-top: -20px;
      padding: 8px 12px;
      background: #ffffff;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      min-height: 40px;
      min-width: 100px;
      left: 50%;
      transform: translate(-50%, 0%);
    }

    div.imgWrapper {
      height: 160px;
      img {
        border-radius: 0px 0px 8px 8px;
      }
    }

    div.discountWrapper {
      padding: 30px 12px 10px;

      div.discount {
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #e4f9c3;
        padding: 10px;
        // text-align: center;
        color: #63901a;
        font-weight: 700;
        p {
          font-size: 15px;
          margin: 0;
        }
      }
    }
  }
`;
export const SectionAds = styled.section`
  margin: 36px 12px;
  max-height: 100px;
  // width: 351px;

  img {
    width: 100%;
  }
`;

export const TitleSection = ({ title, ...rest }) => {
  return (
    <StyledFlexContainer style={{ padding: 12, ...rest }}>
      <Title>{title}</Title>
      {/* <Styled.MoreWrapper>
        <p>Lihat Semua</p>
        <ChevronRight />
      </Styled.MoreWrapper> */}
    </StyledFlexContainer>
  );
};
export const OtherItem = ({ bgColor = '#ffffff', onClick }) => {
  return (
    <OtherWrapper onClick={onClick} bgColor={bgColor}>
      {/* <Styled.PhotoWrapper></Styled.PhotoWrapper> */}
      <div className="iconChev">
        <ChevronRight />
        <p>Lainnya</p>
      </div>
    </OtherWrapper>
  );
};
export const BackgroundPromoImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

OtherItem.propTypes = {
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#486140',
    },
    error: {
      main: '#FE6047',
    },
  },
});

export const IconMenu = ({ isNew = false, iconComponent, label, link }) => {
  return (
    <IconSub onClick={link}>
      {isNew ? (
        <ThemeProvider theme={theme}>
          <Badge badgeContent={'NEW'} color="error" className="badgeNew">
            <IconWrapper>{iconComponent}</IconWrapper>
          </Badge>
        </ThemeProvider>
      ) : (
        <IconWrapper>{iconComponent}</IconWrapper>
      )}
      <p>{label}</p>
    </IconSub>
  );
};

TitleSection.propTypes = {
  title: PropTypes.string,
};

IconMenu.propTypes = {
  iconComponent: PropTypes.node,
  label: PropTypes.string,
  isNew: PropTypes.bool,
  link: PropTypes.func,
};

export const LifestyleArea = ({ iconComponent, label = '' }) => {
  return (
    <div className="lifestyleWrapper">
      <div className="logoWrap">{iconComponent}</div>
      <div className="textWrap">
        <p>{label}</p>
      </div>
    </div>
  );
};

LifestyleArea.propTypes = {
  iconComponent: PropTypes.node,
  label: PropTypes.string,
};

export const BrandArea = () => {
  return (
    <div className="brandWrapper">
      <div className="logoBrand">
        <img src={BrandPartner} alt="brands" />
      </div>
      <div className="discountWrapper">
        <div className="discount">
          <p>Disc 75%</p>
        </div>
      </div>
      <div className="imgWrapper">
        <img src={BrandChoice} alt="brands" />
        <StyledButton absolutecenter bgcolor="#B42519" border="none">
          SHOP NOW
        </StyledButton>
      </div>
    </div>
  );
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

// BrandArea.propTypes = {
//   iconComponent: PropTypes.node,
//   label: PropTypes.string
// };

// export default Styled;

export const BottomNavigation = styled.div`
  &&& {
    z-index: 999;
    background-color: #ffffff;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 28rem;
    margin: auto;
  }
`;

export const EmptyStateWrapper = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
  h3 {
    font-size: 15px;
    font-weight: 700;
    line-height: 20.46px;
    margin: 0;
  }
  p {
    color: #6f6f6f;
    padding: 0px 48px;
    margin-bottom: 20px;
    margin-top: 8px;
  }
`;
