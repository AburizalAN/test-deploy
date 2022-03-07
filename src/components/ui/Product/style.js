import { ChevronRight } from '@mui/icons-material';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  StyledFlexContainer,
  StyledMoreWrapper,
  StyledTitle,
  TitleWrapper,
} from '../Home/style';
import { rupiah } from 'utils/currency';
import Button from '@mui/material/Button';
import { height } from '@mui/system';

export const SectionCategory = styled.section`
  display: flex;
  // width: 100vw;
  align-items: center;
  z-index:1;
  background: #fff;
  padding: 10px 12px;
  box-shadow: rgb(0 0 0 / 2%) 0px 12px 15px;
  max-height: 48px;
  position: relative;
  overflow: hidden;
  p {
    margin: 0;
  }
  .scrollX::-webkit-scrollbar {
    display: none;
  }
  .
`;

export const SlideWrapper = styled.div`
  // padding: 12px 0 0 12px;
  // padding-left: 20px;
  min-height: ${(props) => props.minHeight};

  display: flex;
  flex-wrap: nowrap;
  // overflow: hidden;
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
  }

  div.sliderItem:nth-child(1) {
    margin-left: 0px;
  }
`;

export const CategoryItem = styled.div`
  // display: inline-block;
  margin: 0;
  min-width: fit-content;
  font-weight: ${(props) => (props.isActive ? '700' : '')};
  background: ${(props) => (props.isActive ? '#f6f6f6' : '')};
  border-radius: ${(props) => (props.isActive ? '8px' : '')};
  padding: 4px 8px;
  color: ${(props) => (props.isActive ? ' #7DA024' : '#6F6F6F')};
`;

export const SectionProduct = styled.div`
  // display: inline-block;
  padding: 20px 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .productLargeWrap {
    margin: 7.5px 0px;
  }
  .productLargeWrap:nth-of-type(odd) {
    margin-right: 21px;
  }
`;

export const SectionProductChoice = styled.section`
  margin-top: 24px;
  padding: 0 12px;
`;

export const SectionPromo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;z
  margin: 12px 6px 24px;
  img:first-child{
    margin-right:11px;
  }
`;

export const SectionPhoto = styled.section`
  // display: flex;
  width: 100%;
  min-height: 388px;
  padding: 12px 20px 0;

  div.photoWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 210px;
    max-height: 210px;
  }

  div.previewWrap {
    display: flex;
    justify-content: center;

    // min-height: 48px;
    max-height: 48px;
    // max-width: 186px;

    .slideCenter {
      max-height: 48px;
      max-width: 170px;

      .slick-next {
        right: -10px;
        width: 20px;
      }

      .slick-list {
        .slick-track {
          .slick-slide {
            display: flex;
            justify-content: center;
            align-items: center;

            div {
              background: #f4f4f4;
              border-radius: 8px;
              display: flex;
              align-items: center;
              max-width: 48px;
              min-width: 48px;
              max-height: 48px;
              min-height: 48px;
            }

            img {
              max-height: 48px;
            }
          }
        }
      }
    }
  }
`;

export const BadgeWrapper = styled.div`
  display: flex;
  // width: 100%;
  height: 56px;
  padding: 10px 0;
  background: #edf7ed;
  justify-content: center;
  align-items: center;
  // margin: 0 20px;

  img {
    // min-width: 100%;
    max-width: 100%;
    max-height: 100%;
    margin-right: 32px;
    box-shadow: 0px 1px 8px -4px rgba(0, 0, 0, 0.15);
  }
  img:last-child {
    margin-right: 0;
  }
`;

export const ProductWrapper = styled.div`
  width: 100%;
  margin-top: 29px;

  p {
    margin: 0;
  }
  div.categoryWrap {
    font-size: 13px;
    font-weight: 700;
    color: #265329;
    ${'' /* margin-bottom: 12px; */}
  }
  div.nameWrap {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  span.disc {
    padding: 4px 8px;
    background: #feeceb;
    color: #b42519;
    font-weight: 400;
    font-size: 9px;
    border-radius: 4px;
    margin-right: 8px;
  }
  s.coret {
    font-size: 9px;
  }
  p.hargaCoret {
    margin-bottom: 4px;
  }
  div.priceWrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 22px;
    font-weight: 400;
    margin-bottom: 12px;

    .stock {
      background: #edf7ed;
      padding: 2.5px 9.5px;
      color: #486140;
      font-size: 11px;

      border: 1px solid #265329;
      box-sizing: border-box;
      border-radius: 4px;
    }
  }
`;

export const SectionChoice = styled.div`
  ${'' /* padding: 0px 12px 12px; */}
  width: 100%;
  ${'' /* margin-top: 12px; */}

  .optionWrap {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .quantityWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    position: fixed;
    bottom: 0;
    max-width: 28rem;
    width: 100%;
    z-index: 222;
    background: #fff;

    p.wordingQ {
      font-weight: 700;
      font-size: 13px;
      margin: 0;
    }

    div.quantityBtn {
      display: flex;
      align-items: center;
      background: #cbe0c5;
      border-radius: 35px;
      justify-content: space-between;
      padding: 4px;
      margin-right: 20px;

      button {
        font-size: 32px;
        min-width: 32px;
        max-width: 32px;
        min-height: 32px;
        max-height: 32px;
        background: #265329;
        border-radius: 50px;
        box-shadow: none;
        color: #ffff;
      }

      p {
        margin: 0 15.5px;
      }
    }
  }
  .cartWrap {
    display: flex;
    margin-top: 24px;

    .wishlistWrap {
      svg {
        color: #c4c4c4;
        height: 24px;
      }

      display: flex;
      align-items: center;
      background: #fbf9f9;
      padding: 9px;
      border-radius: 15px;
      margin-right: 12px;
    }
  }
`;

const OptWrap = styled(Button)`
  ${'' /* padding: 1.5px; */}
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  min-width: 160px;
  padding: 0px 24px;
  border-color: ${(props) =>
    props.indexActive === props.weight ? `#486140` : '#c4c4c4'};
  background-color: ${(props) =>
    props.indexActive === props.weight ? `#486140` : '#fff'};
  color: ${(props) => (props.indexActive === props.weight ? `#fff` : '#000')};
  &:hover {
    background-color: #486140;
    color: #fff;
  }
  .weight {
    font-size: 13px;
    ${'' /* color: #25282b; */}
    font-weight: 800;
    margin: 0;
    margin-bottom: 4px;
    margin-top: 4px;
  }
  .calories {
    margin: 0;
    font-size: 11px;
    font-weight: 400;
  }
`;

export const SliderIconWrapper = styled.div`
  position: absolute;
  top: 0px;
  // z-index: 1;

  svg {
    z-index: 1;
    transform: ${(props) => props.transform};
  }
`;

export const SectionAddress = styled.section`
  padding: 8px 12px;
  margin-top: 12px;
  min-height: 100px;
  max-height: 100px;
  display: flex;

  div.addressWrap {
    display: flex;
    width: 100%;
    min-height: 100%;
    align-items: center;
    border-color: rgba(77, 96, 68, 0.5);
    border-style: solid;
    border-width: 1.5px 0px;

    div.childAddr {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 0;

      p {
        color: #667869;
        margin: 0;
        margin-left: 8px;
        font-size: 11px;
        line-height: 15px;
        max-width: 131px;
        text-transform: capitalize;
      }
    }

    div.childAddr:first-child {
      border-right: 1px solid rgba(77, 96, 68, 0.5);
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${(props) => props.background};
`;

export const BadgeWrap = styled.div`
  display: flex;
  width: 100%;
  // justify-content: center;
  max-height: 112px;
  min-height: 112px;
  margin-top: 32px;

  div.badgeWrap {
    display: flex;
    align-items: flex-start;
    margin-right: 38px;

    img {
      height: 69px;
      width: 74.44px;
    }
  }

  div.textWrap {
    span {
      font-weight: 700;
      font-size: 13px;
      line-height: 17.73px;
    }
    p {
      font-weight: 400;
      font-size: 11px;
      margin: 0;
      line-height: 15px;
      text-align: justify;
    }
  }
`;

export const SectionDetails = styled.section`
  margin-top: 12px;
  padding: 6.5px 0 24px;
`;

const claimText = {
  gluten: {
    badge: '/assets/icons/gluten.svg',
    title: 'Gluten Free',
    text: 'Protein yang ditemukan pada tepung dan beberapa jenis gandum lain. Diperuntukan untuk orang yang berpenyakit Celiac dan baik pada orang yang mengalami sensitivitas Gluten Non-celiac.',
  },
  plant: {
    badge: '/assets/icons/gluten.svg',
    title: 'Plant Based',
    text: 'Asupan yang sebagian besar berasal dari nabati (tumbuhan). Membantu mengurangi berat badan bagi penderita obesitas, mengurangi risiko diabetes, kolesterol tinggi, hipertensi, dan penyakit jantung.',
  },
  low_calories: {
    badge: '/assets/icons/gluten.svg',
    title: 'Low Calories',
    text: 'Konsumsi makanan berenergi rendah. Cocok untuk kamu yang sedang diet rendah kalori dan mempunyai berat badan berlebih, yang mana meningkatnya ancaman diabetes maupun kolesterol tinggi.',
  },
  halal: {
    badge: '/assets/icons/gluten.svg',
    title: 'Halal',
    text: 'Sertifikasi halal yang dikeluarkan oleh LPPOM MUI memberikan jaminan halal bagi setiap produk yang tersertifikasi.',
  },
  local: {
    badge: '/assets/icons/gluten.svg',
    title: 'Produk Lokal',
    text: 'Dengan membeli produk dari dalam negeri kita sebagai konsumen ikut membantu perekonomian komunitas lokal Indonesia.',
  },
};

export const ChoiceOption = ({ weight, callback, activeVariant, status }) => {
  return (
    <OptWrap
      onClick={callback}
      weight={weight}
      variant={activeVariant?.optons?.option_label == weight ? '' : 'outlined'}
      // style={{ height: '40px' }}
      indexActive={activeVariant?.optons?.option_label || ''}
      disabled={!status}
    >
      <p className="weight">{weight}</p>
      {/* <p className="calories">{cal} Cal</p> */}
    </OptWrap>
  );
};

export const ClaimList = ({ gluten, halal, plant, lowCal, local }) => {
  return (
    <div>
      {gluten ? (
        <BadgeWrap>
          <div className="badgeWrap">
            <img src={claimText.gluten.badge} alt="badge-gluten" />
          </div>
          <div className="textWrap">
            <span>{claimText.gluten.title}</span>
            <p>{claimText.gluten.text}</p>
          </div>
        </BadgeWrap>
      ) : null}
      {plant ? (
        <BadgeWrap>
          <div className="badgeWrap">
            <img src={claimText.plant.badge} alt="badge-gluten" />
          </div>
          <div className="textWrap">
            <span>{claimText.plant.title}</span>
            <p>{claimText.plant.text}</p>
          </div>
        </BadgeWrap>
      ) : null}
      {lowCal ? (
        <BadgeWrap>
          <div className="badgeWrap">
            <img src={claimText.low_calories.badge} alt="badge-gluten" />
          </div>
          <div className="textWrap">
            <span>{claimText.low_calories.title}</span>
            <p>{claimText.low_calories.text}</p>
          </div>
        </BadgeWrap>
      ) : null}
      {halal ? (
        <BadgeWrap>
          <div className="badgeWrap">
            <img src={claimText.halal.badge} alt="badge-gluten" />
          </div>
          <div className="textWrap">
            <span>{claimText.halal.title}</span>
            <p>{claimText.halal.text}</p>
          </div>
        </BadgeWrap>
      ) : null}
      {local ? (
        <BadgeWrap>
          <div className="badgeWrap">
            <img src={claimText.local.badge} alt="badge-gluten" />
          </div>
          <div className="textWrap">
            <span>{claimText.local.title}</span>
            <p>{claimText.local.text}</p>
          </div>
        </BadgeWrap>
      ) : null}
    </div>
  );
};

export const ProductInfo = ({
  brand = 'Singabera',
  nameProduct = 'Salmon Green Sencha',
  price = 15000,
  hargaCoret = 15000,
  inStock = true,
}) => {
  const persenDiskon = ((hargaCoret - price) / hargaCoret) * 100;
  let diskonParse = parseInt(persenDiskon);
  return (
    <ProductWrapper>
      <div className="categoryWrap">
        <p>{brand}</p>
      </div>
      <div className="nameWrap">
        <p>{nameProduct}</p>
      </div>
      <div>
        {hargaCoret > price && (
          <p className="hargaCoret">
            <span className="disc">{diskonParse}%</span>
            <s className="coret">{rupiah(hargaCoret)}</s>
          </p>
        )}
      </div>
      <div className="priceWrap">
        <p className="price">
          {rupiah(hargaCoret > price ? price : hargaCoret)}
        </p>
        <p className="stock">{inStock ? 'Tersedia' : 'Habis'}</p>
      </div>
    </ProductWrapper>
  );
};

export const TitleSection = (props) => {
  const { title, bgColor, ...rest } = props;

  return (
    <StyledFlexContainer
      style={{
        width: '100%',
        padding: 12,
        background: bgColor,
        display: 'flex',
        alignItems: 'center',
        // backgroundImage: `url("${bgImg}")`,
        ...rest,
      }}
    >
      <TitleWrapper>
        <StyledTitle>{title}</StyledTitle>
      </TitleWrapper>
      <StyledMoreWrapper>
        <p>Lihat Semua</p>
        <ChevronRight />
      </StyledMoreWrapper>
    </StyledFlexContainer>
  );
};

ClaimList.propTypes = {
  gluten: PropTypes.bool,
  lowCal: PropTypes.bool,
  halal: PropTypes.bool,
  plant: PropTypes.bool,
  local: PropTypes.bool,
};

ChoiceOption.propTypes = {
  weight: PropTypes.string,
  cal: PropTypes.string,
};

TitleSection.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
};
