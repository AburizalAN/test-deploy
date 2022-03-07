/* eslint-disable @next/next/no-img-element */
import { Chip, Grid, Link } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import PlayButton from 'components/icons/play_circle_outline_black_24dp';

import MainLayout from 'components/main-layout';
import { SimpleSlider } from 'components/ui/slider';
import {
  StyledSectionNotes,
  StyledSectionTiktok,
  StyledSectionInstagram,
  StyledPromoWrapper,
  StyledFullWrap,
  StyledHalfWrap,
  StyledSectionRecipe,
  StyledFlexContainer,
  StyledSectionArticle,
  StyledSectionWrapper,
  StyledSlideWrapper,
  StyledSectionChannel,
  StyledSectionFooter,
  TitleSection,
  StyledWrapper,
  StyledSectionIcon,
  ImageArticleHighliht,
  ArticleText,
  ImageBanner,
  ImageGeneralCategory,
  BackgroundPromoImage,
  OtherItem,
  SectionPromoItem,
  StyledFlexContainerSlider,
} from 'components/ui/Home/style';
import ProductCategoryItem from 'components/ui/product-category-item';
// import ShopGreen from 'components/icons/shop-green';

import { StyledButton } from 'components/ui/button';

import IconTrusted from 'components/icons/icon-trusted';
import IconLeaf from 'components/icons/icon-leaf';
import IconInspiration from 'components/icons/icon-inspiration';
// import MenuShop from 'components/icons/menu-shop';
// import MenuArticle from 'components/icons/menu-article';
import { SlideWrapper, IconMenu } from 'components/ui/shopping/style';
import SimpleSkeleton from 'components/loading/SimpleSkeleton';
// import useSWR from 'swr';
import { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
import ACTIONS from 'store/registerActions';
import { useSelector, useDispatch } from 'react-redux';
import { escapeHtml, dateTimeToString, capitalizeEachWord } from 'utils/helper';
import dompurify from 'dompurify';
import { useRouter } from 'next/router';
import { hiddenProd } from 'utils/constant';
import { StyledTypography } from 'components/ui/typography';
import FacebookSquareLightIcon from 'components/icons/facebook-square-light';
import { StyledFooter } from 'components/ui/footer';
import ListYoutube from '../components/ui/Home/ListYoutube';
import Skeleton from 'react-loading-skeleton';
// import { initStore } from '../store';

// import Image from 'next/image';

// const BannerGreenx = '/assets/bg-green.svg';
// const Banner = '/assets/banner.png';
const Articles = '/assets/articles.png';
const MiniBanner = '/assets/mini_banner.png';
const MiniBanner2 = '/assets/mini_banner2.png';
const BannerPromo = '/assets/banner_promo.png';
const Recipe = '/assets/recipe.png';
const RecipeSmall = '/assets/recipe_small.png';
const Footer = '/assets/image7.png';
const MulaChannel = '/assets/mula_channel.png';
const Instagram1 = '/assets/instagram1.png';
const Instagram2 = '/assets/instagram2.png';
const Tiktok1 = '/assets/tiktok1.png';
const Tiktok2 = '/assets/tiktok2.png';

export function Banner() {
  const [data, setBanner] = useState({ data: [] });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/banners`);
      const newData = await response.json();
      setBanner(newData);
    };

    fetchData();
  }, []);

  return (
    <SimpleSlider>
      {data.data.length > 0 ? (
        data.data.map((datum, index) => {
          const { meta, acf, title } = datum;
          return (
            <ImageBanner
              key={index}
              link={meta._links_to}
              banner={acf.gambar}
              alt={title.rendered}
            />
          );
        })
      ) : (
        <SimpleSkeleton onLoad={true}>
          <div />
        </SimpleSkeleton>
      )}
    </SimpleSlider>
  );
}

function ListGeneralCategories() {
  const [dataCategory, setGeneralCategories] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/icon-categories`);
      const newData = await response.json();
      setGeneralCategories(newData);
    };

    fetchData();
  }, []);

  const generalCategories = (link) => {
    window.location.assign(link);
  };

  return (
    <SlideWrapper className="slider">
      {dataCategory.data.length > 0 ? (
        dataCategory.data.map((datum, index) => {
          const { acf } = datum;
          return (
            <IconMenu
              key={index}
              iconComponent={
                <ImageGeneralCategory
                  src={acf.icon}
                  onClick={() => generalCategories(acf.link)}
                />
              }
              label={acf.title}
            />
          );
        })
      ) : (
        <SimpleSkeleton height={60} onLoad={true}>
          <div />
        </SimpleSkeleton>
      )}
    </SlideWrapper>
  );
}

function ListPosts() {
  // const [data, setPost] = useState({ data: [] });
  const postsState = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACTIONS.posts.getListPost());
  }, []);

  if (postsState.loading !== true) {
    const { title, excerpt, better_featured_image, date, acf, id, slug } =
      postsState.listPost[0];
    const sanitizer = dompurify.sanitize;
    // better_featured_image.source_url
    const betterFeaturedImage = better_featured_image;

    const router = useRouter();
    const handleClickLink = (slug) => {
      router.push('artikel/' + slug);
    };
    return (
      <StyledFlexContainer className="headWrap">
        <h3 className="title" style={{ marginBottom: '8px' }}>
          {escapeHtml(title.rendered)}
        </h3>

        <div className="articleWrap">
          <div className="articlePic">
            <ImageArticleHighliht
              className="pics"
              src={
                betterFeaturedImage !== null
                  ? betterFeaturedImage?.source_url
                  : Articles
              }
              alt="article"
            />
          </div>
          <ArticleText className="articleText">
            <div
              className="paraghraph-article"
              dangerouslySetInnerHTML={{ __html: sanitizer(excerpt.rendered) }}
            />
            <div style={{ margin: '5px 0' }}>
              <span>{dateTimeToString(date)}</span>
              <span>{acf.time}</span>
            </div>
            <StyledButton
              variant="contained"
              bgcolor="#265329"
              onClick={() => handleClickLink(slug)}
              p="4px 1px"
              fz="15px"
            >
              Baca Selengkapnya
            </StyledButton>
          </ArticleText>
        </div>
      </StyledFlexContainer>
    );
  } else {
    return (
      <SimpleSkeleton height={160} onLoad={true}>
        <div />
      </SimpleSkeleton>
    );
  }
}

function ListResep() {
  const recipeState = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACTIONS.recipe.getListRecipe());
  }, []);
  // const sanitizer = dompurify.sanitize;

  if (recipeState.loading !== true) {
    const router = useRouter();
    const handleClickLink = (slug) => {
      router.push('resep/' + slug);
    };

    return (
      <StyledFlexContainer className="imgWrapper" noPadding>
        <StyledFullWrap
          bgImg={
            recipeState.listRecipes[0].better_featured_image?.source_url ||
            Recipe
          }
          onClick={() => handleClickLink(recipeState.listRecipes[0].slug)}
        >
          <div className="wrapText">
            {/* <Chip
              label={recipeState.listRecipes[0].acf.time}
              color="primary"
              size="small"
              className="chip"
            /> */}

            {/* <div
              className="paraghraph-article"
              dangerouslySetInnerHTML={{
                __html: sanitizer(recipeState.listRecipes[0].title.rendered),
              }}
            /> */}
            <p>{recipeState.listRecipes[0].title.rendered}</p>
          </div>
        </StyledFullWrap>
        <div className="oneWrapper">
          <StyledHalfWrap
            bgImg={
              recipeState.listRecipes[1].better_featured_image?.source_url ||
              RecipeSmall
            }
            style={{ marginBottom: '6px' }}
            onClick={() => handleClickLink(recipeState.listRecipes[1].slug)}
          >
            <div className="wrapText">
              {/* <Chip
                label={recipeState.listRecipes[1].acf.time}
                size="small"
                className="chip"
              /> */}

              {/* <div
                className="paraghraph-article"
                dangerouslySetInnerHTML={{
                  __html: sanitizer(recipeState.listRecipes[1].title.rendered),
                }}
              /> */}
              <p>{recipeState.listRecipes[1].title.rendered}</p>
            </div>
          </StyledHalfWrap>
          <StyledHalfWrap
            bgImg={
              recipeState.listRecipes[2].better_featured_image?.source_url ||
              RecipeSmall
            }
            onClick={() => handleClickLink(recipeState.listRecipes[2].slug)}
          >
            <div className="wrapText">
              {/* <Chip
                label={recipeState.listRecipes[2].acf.time}
                size="small"
                className="chip"
              /> */}
              {/* <div
                className="paraghraph-article"
                dangerouslySetInnerHTML={{
                  __html: sanitizer(recipeState.listRecipes[2].title.rendered),
                }}
              /> */}
              <p>{recipeState.listRecipes[2].title.rendered}</p>
            </div>
          </StyledHalfWrap>
        </div>
      </StyledFlexContainer>
    );
  } else {
    return (
      <SimpleSkeleton height={290} onLoad={true}>
        <div />
      </SimpleSkeleton>
    );
  }
}

const ListInstagram = () => {
  const instagramState = useSelector((state) => state.instagram);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACTIONS.instagram.getListInstagram());
  }, []);

  const { listInstagram } = instagramState;

  if (listInstagram.loading !== true) {
    return (
      <StyledSlideWrapper justifyContent="center">
        {listInstagram.map((_, i) => (
          <img
            key={i}
            src={_.acf.image}
            style={{ height: '206px' }}
            alt="instagram"
          />
        ))}
      </StyledSlideWrapper>
    );
  } else {
    return (
      <SimpleSkeleton height={190} onLoad={true}>
        <div />
      </SimpleSkeleton>
    );
  }
};

const ListTiktok = () => {
  const tiktokState = useSelector((state) => state.tiktok);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACTIONS.tiktok.getListTiktok());
  }, []);

  const { listTiktok } = tiktokState;

  if (listTiktok.loading !== true) {
    return (
      <StyledSlideWrapper justifyContent="center">
        {listTiktok.map((_, i) => (
          <img
            key={i}
            src={_.acf.image}
            style={{ height: '206px' }}
            alt="instagram"
          />
        ))}
      </StyledSlideWrapper>
    );
  } else {
    return (
      <SimpleSkeleton height={190} onLoad={true}>
        <div />
      </SimpleSkeleton>
    );
  }
};

const SlidePromo = () => {
  const { productSlider } = useSelector((state) => state.productbyCategory);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACTIONS.productbyCategory.getListProductSlider());
  }, []);

  return (
    <StyledFlexContainerSlider background={productSlider?.hexa_color}>
      <BackgroundPromoImage src={productSlider?.image} />
      <SlideWrapper>
        <div className="sliderItem">
          <div style={{ width: '160px' }} />
        </div>

        {productSlider?.products?.length > 0
          ? productSlider?.products?.map((data, i) => {
              const werehouse = capitalizeEachWord(data.warehouse_data.name);
              {
                /* const range = dateRange(
                    data?.special_from_date,
                    data?.special_to_date
                  ); */
              }
              return (
                <div className={'sliderItems'} key={i}>
                  <ProductCategoryItem
                    name={data?.name}
                    price={data?.price}
                    specialPrice={data?.special_price}
                    weight={werehouse || 'awalmula'}
                    brand={data?.brand_name || '&nbsp'}
                    image={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${data?.image}`}
                    badge={data?.product_diet}
                    onClick={() => router.push(`/produk/${data.url_key}`)}
                    productActive={data?.is_salable == 1}
                    // handleAddToWishlist={() => addToWishlist(data)}
                  />
                </div>
              );
            })
          : [...Array(4)].map((_, i) => (
              <Skeleton
                height="300px"
                width="160px"
                key={i}
                style={{ marginRight: '12px', zIndex: '0' }}
              />
            ))}
        <OtherItem
          onClick={() => window.location.assign(productSlider?.link_see_all)}
          bgColor="#7DA024"
        />
      </SlideWrapper>
    </StyledFlexContainerSlider>
  );
};

const Homepage = () => {
  return (
    <MainLayout>
      <StyledSectionWrapper>
        <Banner />
      </StyledSectionWrapper>
      {/* </Styled.SectionWrapper> */}
      <StyledSectionIcon>
        <ListGeneralCategories />
      </StyledSectionIcon>
      <StyledSectionArticle>
        <TitleSection
          redirect="/artikel"
          title={'Temukan Artikelmu'}
          bgColor="#eef6eb"
        />

        <SimpleSlider>
          <ListPosts />
        </SimpleSlider>

        {hiddenProd ? (
          <StyledFlexContainer>
            <StyledSlideWrapper
              style={{
                backgroundImage: `url("${'/assets/bg-green.svg'}")`,
              }}
            >
              <div style={{ marginInline: 10 }}>
                <img src={MiniBanner} alt="banner" />
              </div>
              <div style={{ marginInline: 10 }}>
                <img src={MiniBanner2} alt="banner" />
              </div>
              <div style={{ marginInline: 10 }}>
                <img src={MiniBanner} alt="banner" />
              </div>
              <div style={{ marginInline: 10 }}>
                <img src={MiniBanner2} alt="banner" />
              </div>
            </StyledSlideWrapper>

            <StyledPromoWrapper>
              <img src={BannerPromo} alt="banner_promo" />
            </StyledPromoWrapper>
          </StyledFlexContainer>
        ) : (
          <div />
        )}
      </StyledSectionArticle>

      <SectionPromoItem>
        <SlidePromo />
      </SectionPromoItem>

      <StyledSectionRecipe>
        <TitleSection redirect="/resep" title={'Rekomendasi Resep'} />
        <ListResep />
      </StyledSectionRecipe>
      <StyledSectionChannel>
        <TitleSection
          redirect="https://www.youtube.com/channel/UCaHg0mPpZ8unLZ08PlMrunA"
          title="Youtube Awal Mula"
        />
        <ListYoutube />
      </StyledSectionChannel>
      {hiddenProd ? (
        <StyledSectionInstagram>
          <TitleSection
            redirect="https://www.instagram.com/awalmula_id/"
            title={'Instagram Awal Mula'}
          />

          <ListInstagram />
        </StyledSectionInstagram>
      ) : (
        <div />
      )}

      {hiddenProd ? (
        <StyledSectionTiktok>
          <TitleSection
            redirect="https://www.tiktok.com/@awalmula_id"
            title={'TikTok Awal Mula'}
          />

          <ListTiktok />
        </StyledSectionTiktok>
      ) : (
        <div />
      )}

      <StyledSectionNotes>
        <StyledFlexContainer justifyContent="space-around">
          <div className="iconWrapper">
            <IconTrusted />
            <p>100% Produk Lokal</p>
          </div>
          <div className="iconWrapper">
            <IconLeaf />
            <p>Mitra Mula Terpilih</p>
          </div>
          <div className="iconWrapper">
            <IconInspiration />
            <p>Inspirasi Hidup Sehat</p>
          </div>
        </StyledFlexContainer>
      </StyledSectionNotes>

      <StyledFooter />
    </MainLayout>
  );
};

export default Homepage;
