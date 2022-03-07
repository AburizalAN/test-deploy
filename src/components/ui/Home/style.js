import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from '@mui/icons-material';
import styled from 'styled-components';
import Badge from '@mui/material/Badge/Badge';
import media from 'utils/media-query';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import Link from 'next/link';
// import HomeIcons from "components/icons/home";

// !IMPORTANT, this boilerplate not supported for ssr
// !this make the style not implemented after page rendered
// I refactor these code to below
const Styled = {
  BodyWrapper: styled.div`
    padding: 0 1px;
  `,
  SectionWrapper: styled.section`
    margin: 10px 0 20px;
    display: flex;
  `,
  FlexContainer: styled.div`
    display: flex;
    flex-wrap: wrap;

    ${(props) => props};
  `,
  SectionIcon: styled.section`
    margin-bottom: 12px;

    display: flex;
    // justify-content: space-around;
    flex-wrap: wrap;
    padding: 0 0 0 17.5px;
  `,
  IconWrapper: styled.div`
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    // background: #cee5a8;
    border-radius: 8px;
    width: 48px;
    height: 48px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  `,
  IconSub: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    // margin-right: 10px;
    width: 40px;
    p {
      margin: 5px 0;
      font-size: 11px;
      text-align: center;
    }
    &&& {
      span.badgeNew {
        span {
          border-radius: 2px;
          font-size: 9px;
        }
      }
    }
  `,
  SectionArticle: styled.section`
    margin-bottom: 12px;

    div.headWrap {
      padding: 12px;
      font-size: 15px;

      p.title {
        font-weight: 700;
        margin: 0px;
        font-size: 13px;
      }

      p.articleHead {
        margin: 0;
        color: #57655a;
        max-width: 50%;
        font-weight: 700;
      }

      div.articleMore {
        display: flex;
        align-items: center;
        margin-left: auto;
        p {
          margin: 0;
        }
      }

      div.articleWrap {
        display: flex;
        justify-content: center;

        align-items: center;
        margin-top: 12px;

        .articlePic {
          width: 160px;
          height: 124px;
          border-radius: 10px;
          margin-right: 10px;
          display: flex;
        }

        .articleText {
          display: flex;
          flex-direction: column;
          align-self: flex-end;
          p {
            margin: 0;
            opacity: 0.5;
            color: #25282b;
            font-size: 13px;
          }
          div {
            display: flex;
            span {
              font-size: 13px;
              margin: 0;
              opacity: 0.5;
              color: #25282b;
            }
            span:nth-child(2) {
              margin-left: auto;
            }
          }
        }
      }
    }
  `,
  SlideWrapper: styled.div`
    padding: 12px 0 0 12px;
    margin-top: 1em;
    // padding-left: 20px;

    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    div.sliderItem {
      margin: 0 10px;
      border-radius: ${(props) => props.borderRadius};
    }
  `,
  PromoWrapper: styled.div`
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
      max-width: 350px;
    }
  `,
  SectionRecipe: styled.section`
    margin-bottom: 12px;
    div.imgWrapper {
      width: 100%;
      justify-content: space-around;
    }
    // div.twoRow {
    //   width: 50%;
    //   max-width: 185px;
    //   ${media.lessThan('screen320')`
    //     max-width: 180px;
    //   `}
    //   justify-content: flex-start;
    //   // margin-right: 5px;
    //   img {
    //     max-width: 100%;
    //     max-height: 300px;
    //   }
    // }
    div.oneWrapper {
      width: 50%;
      padding-left: 4px;
    }
  `,
  FullWrap: styled.div`
    display: flex;
    background-image: url('${(props) => props.bgImg}');
    width: 49%;
    min-height: 300px;
    align-items: flex-end;
    justify-content: flex-start;

    div.wrapText {
      margin: 10px;
      span {
        font-size: 9px;
        color: #fff;
      }
      p {
        color: white;
        font-weight: 700;
        margin: 10px 0 0;
        font-size: 15px;
      }
    }
  `,
  HalfWrap: styled.div`
    display: flex;
    align-items: flex-end;

    background-image: url('${(props) => props.bgImg}');
    margin-bottom: 1%;
    height: 149px;

    div.wrapText {
      margin: 10px;
      span {
        font-size: 9px;
        color: #fff;
      }

      p {
        color: white;
        font-weight: 700;
        font-size: 15px;

        margin: 10px 0 0;
      }
    }
  `,
  Title: styled.p`
    margin: 0;
    max-width: 50%;
    font-weight: 700;
    font-size: 15px;
  `,
  MoreWrapper: styled.div`
    display: flex;
    font-size: 15px;
    align-items: center;
    margin-left: auto;
    p {
      margin: 0;
    }
  `,

  SectionChannel: styled.section`
    padding: 12px;

    img.thumbnail {
      border-radius: 10px;
    }
  `,

  SectionInstagram: styled.section`
    padding: 12px;
  `,

  SectionTiktok: styled.section`
    padding: 12px;
  `,

  SectionNotes: styled.section`
    padding: 12px 29px;

    justify-content: center;
    div.iconWrapper {
      margin: 12px 0;

      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        margin: 0;
        font-size: 13px;
        max-width: 80px;
        text-align: center;
        font-weight: 700;
        margin-top: 35px;
      }
    }
  `,

  SectionFooter: styled.div`
    div.footerWrapper {
      display: flex;
      justify-content: center;
      background: #265329;
      text-align: center;

      img {
        height: 50px;
        width: 100px;
        object-fit: contain;
      }
    }
  `,
};

// !IMPORTANT, This is supported boilerplate
export const StyledBodyWrapper = styled.div`
  padding: 0 1px;
`;

export const StyledSectionWrapper = styled.section`
  margin: 10px 0 20px;
  display: flex;
`;

export const StyledFlexContainerSlider = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
  align-items: ${({ alignItems }) => alignItems ?? 'unset'};
  position: relative;
  padding: ${({ py }) => py ?? '0px'} ${({ px }) => px ?? '0px'};
  margin-bottom: ${({ mb }) => mb ?? '0px'};
  background: ${(props) => props.background};
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justifyContent};
  position: relative;
  padding: ${({ noPadding }) => (noPadding ? '0' : '16px 0')};

  .p-0 {
    padding: 0;
  }

  .MuiInputAdornment-positionCenter {
    position: absolute;
    top: 50%;
  }
  img {
    height: 90px;
  }

  .pics {
    width: 160px;
    height: 126px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const StyledSectionIcon = styled.section`
  margin-bottom: 12px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  ${'' /* padding: 12px 0 0 17.5px; */}
  padding: 0px 0 0 17.5px;
  margin-top: -10px;
  .slider::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #cee5a8;
  border-radius: 20px;
  width: 40px;
  min-height: 40px;
`;

export const StyledIconSub = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  // margin-right: 10px;
  width: 40px;
  p {
    margin: 5px 0;
    font-size: 11px;
    text-align: center;
  }
`;

export const StyledSectionArticle = styled.section`
  margin-bottom: 12px;

  div.headWrap {
    padding: 12px;
    font-size: 15px;

    p.title {
      font-weight: 700;
      margin: 0px;
      font-size: 13px;
    }

    p.articleHead {
      margin: 0;
      color: #57655a;
      max-width: 50%;
      font-weight: 700;
    }

    div.articleMore {
      display: flex;
      align-items: center;
      margin-left: auto;
      p {
        margin: 0;
      }
    }

    div.articleWrap {
      display: flex;
      justify-content: center;

      align-items: center;
      margin-top: 12px;

      .articlePic {
        width: 160px;
        margin-right: 10px;
      }

      .articleText {
        display: flex;
        flex-direction: column;
        p {
          margin: 0;
          opacity: 0.5;
          color: #25282b;
          font-size: 13px;
        }
        div {
          display: flex;
          span {
            font-size: 13px;
            margin: 0;
            opacity: 0.5;
            color: #25282b;
          }
          span:nth-child(2) {
            margin-left: auto;
          }
        }
      }
    }
  }
`;

export const StyledSlideWrapper = styled.div`
  // padding: 12px 0 0 12px;
  margin-top: 1em;
  // padding-left: 20px;

  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  div.sliderItem {
    margin: 0 10px;
    border-radius: ${(props) => props.borderRadius};
    flex-grow: 1;
    text-align: center;
  }

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

export const StyledPromoWrapper = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    max-width: 350px;
  }
`;

export const StyledSectionRecipe = styled.section`
  margin-bottom: 12px;
  div.imgWrapper {
    width: 100%;
    justify-content: space-around;
  }
  // div.twoRow {
  //   width: 50%;
  //   max-width: 185px;
  //   ${media.lessThan('screen320')`
    //     max-width: 180px;
    //   `}
  //   justify-content: flex-start;
  //   // margin-right: 5px;
  //   img {
  //     max-width: 100%;
  //     max-height: 300px;
  //   }
  // }
  div.oneWrapper {
    width: 50%;
    padding-left: 1%;
  }
  // div.oneRow {
  //   margin-bottom: 2.5px;
  //   width: 50%;

  //   img {
  //     max-width: 150px;
  //     max-height: 170px;
  //     max-width: 100%;
  //     max-height: 100%;
  //   }
  // }
`;

export const StyledFullWrap = styled.div`
  display: flex;
  background-image: url('${(props) => props.bgImg}');
  background-position: center;
  width: 49%;
  min-height: 300px;
  align-items: flex-end;
  justify-content: flex-start;
  background-repeat: no-repeat;
  background-size: cover;

  div.wrapText {
    margin: 10px;
    div.chip {
      background: #749d6e;
    }
    span {
      font-size: 9px;
    }
    p {
      color: white;
      font-weight: 700;
      margin: 10px 0 0;
      font-size: 15px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const StyledHalfWrap = styled.div`
  display: flex;
  align-items: flex-end;

  background-image: url('${(props) => props.bgImg}');
  background-position: center;
  background-size: cover;
  height: 149px;

  div.wrapText {
    div.chip {
      background: #749d6e;
      color: #fff;
    }
    margin: 10px;
    span {
      font-size: 9px;
    }

    p {
      color: white;
      font-weight: 700;
      font-size: 15px;

      margin: 10px 0 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const TitleWrapper = styled.div`
  // margin: 0;
  width: 55%;
  font-weight: 700;
  font-size: 15px;
`;
export const StyledTitle = styled.p`
  margin: 0;
  // max-width: 55%;
  font-weight: 800;
  font-size: 18px;
`;

export const StyledMoreWrapper = styled.a`
  display: flex;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  align-items: center;
  font-size: 13px;
  line-height: 18px;
  text-align: right;
  justify-content: flex-end;
  letter-spacing: 0.25px;
  color: #25282b;
  margin-left: auto;
  text-decoration: none;

  svg {
    width: 16px;
  }
`;

export const StyledSectionChannel = styled.section`
  padding: 12px 0;

  img.thumbnail {
    border-radius: 10px;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  div.sliderItemMini {
    padding: 20px;
  }
  img.minibanner {
    border-radius: 10px;
    width: 200px;
    margin-right: 12px;
    object-fit: cover;
  }
`;

export const StyledSectionInstagram = styled.section`
  padding: 12px 0;
`;

export const StyledSectionTiktok = styled.section`
  padding: 12px 0;
`;

export const StyledSectionNotes = styled.section`
  padding: 12px 29px;

  justify-content: center;
  div.iconWrapper {
    margin: 12px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 0;
      font-size: 13px;
      max-width: 80px;
      text-align: center;
      font-weight: 700;
      margin-top: 35px;
    }
  }
`;

export const StyledSectionFooter = styled.section`
  div.footerWrapper {
    display: flex;
    justify-content: center;
    background: #476040;
  }
`;

export const StyledWrapper = styled.div`
  padding: 0 12px;
`;

export const TitleSection = (props) => {
  const { title, bgColor, redirect, ...rest } = props;

  return (
    <StyledFlexContainer
      style={{
        width: '100%',
        background: bgColor,
        display: 'flex',
        alignItems: 'center',
        ...rest,
      }}
    >
      <TitleWrapper>
        <StyledTitle>{title}</StyledTitle>
      </TitleWrapper>
      <Link href={redirect} passHref>
        <StyledMoreWrapper>
          Lihat Semua
          <ChevronRight />
        </StyledMoreWrapper>
      </Link>
    </StyledFlexContainer>
  );
};

TitleSection.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  redirect: PropTypes.func,
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

export const IconMenu = ({ isNew = false, iconComponent, label }) => {
  return (
    <Styled.IconSub>
      {isNew ? (
        <ThemeProvider theme={theme}>
          <Badge badgeContent={'NEW'} color="error" className="badgeNew">
            <Styled.IconWrapper>{iconComponent}</Styled.IconWrapper>
          </Badge>
        </ThemeProvider>
      ) : (
        <Styled.IconWrapper>{iconComponent}</Styled.IconWrapper>
      )}
      <p>{label}</p>
    </Styled.IconSub>
  );
};

IconMenu.propTypes = {
  isNew: PropTypes.bool,
  iconComponent: PropTypes.node,
  label: PropTypes.string,
};

export const ImageArticleHighliht = styled.img`
  width: 160px;
  height: 126px;
  object-fit: cover;
`;

export const ArticleText = styled.div`
  .paraghraph-article p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const ImageGeneralCategory = styled.img`
  width: 60%;
`;

const Banner =
  'https://blog-staging.awalmula.co.id/wp-content/uploads/2021/11/banner-3.jpeg';
const AltBanner = 'banner';
const url = '/';

export const ImageBanner = ({
  banner = Banner,
  alt = { AltBanner },
  link = url,
  index = 0,
}) => {
  return (
    <Link href={link} passHref>
      <a>
        <ImageComponent
          key={index}
          src={banner}
          alt={alt}
          // onClick={() => imageClick()}
        />
      </a>
    </Link>
  );
};

export const BackgroundPromoImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
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

export const SectionPromoItem = styled.section`
  // padding: 12px;
  margin-top: 36px;
`;

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

ImageBanner.propTypes = {
  banner: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,
  index: PropTypes.number,
};

export const ImageComponent = styled.img`
  width: 100%;
`;

export default Styled;
