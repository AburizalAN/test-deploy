/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
// import Image from 'next/image';
import ShoppingLayout from 'components/shopping-layout';
import SimpleSlider from 'components/ui/slider';
import {
  // BrandArea,
  IconMenu,
  // LifestyleArea,
  OtherItem,
  SectionAds,
  SectionBannerCategory,
  // SectionBorder,
  // SectionBrand,
  // SectionBrandAds,
  SectionIcons,
  // SectionLifestyle,
  SectionPromo,
  SectionPromoItem,
  SectionSlider,
  SlideWrapper,
  StyledFlexContainer,
  TitleSection,
  BackgroundPromoImage,
  // StyledLink,
  SectionProductSlider,
} from 'components/ui/Shopping/style';

import { ImageBanner } from 'components/ui/Home/style';

// import { Banner as BannerComponent } from 'pages';
import BasicTabs, { TabPanel } from 'components/ui/tabs';
import ProductCategoryItem from 'components/ui/product-category-item';
import AllCategory from 'components/icons/icon-allcategory';
// import CategoryDrink from 'components/icons/icon-drink';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ACTIONS from 'store/registerActions';
import SimpleSkeleton from 'components/loading/SimpleSkeleton';
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { capitalizeEachWord } from 'utils/helper';
import AlertComponent from 'components/ui/shopping/AlertComponent';
import Cookie from 'js-cookie';
import ProductPremium from '../../components/ui/Shopping/ProductPremium';
// import FlashSaleSection from 'components/ui/Shopping/FlashSaleSection';

const ShopByLifestyle = dynamic(
  () => import('../../components/ui/Shopping/ShopByLifestyle'),
  {
    ssr: false,
  }
);

// material ui
// import { hiddenProd } from '../../utils/constant';

const ListCategoryLevel1 = () => {
  const productCategoryState = useSelector((state) => state.productCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACTIONS.productCategories.getListProductCategories());
  }, []);

  if (productCategoryState.loading !== true) {
    const level2 = productCategoryState.listProductCategories.data.items.filter(
      function (category) {
        return category.level === 2;
      }
    );

    const withoutAll = level2.slice(1, level2.length);

    const handleClickCategory = (e, atribute) => {
      e.preventDefault();

      const filtered = atribute.filter(function (datum) {
        return datum.attribute_code === 'url_key';
      });
      window.location.assign('/category/' + filtered[0].value);
    };

    return (
      <SlideWrapper className="sliderIcons" minHeight="93px">
        {withoutAll.map((_, index) => {
          const image = _.custom_attributes.find(
            (item) => item.attribute_code === 'image'
          );
          return (
            <IconMenu
              key={index}
              iconComponent={
                image?.value ? (
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${image.value}`}
                    alt="category icon"
                  />
                ) : (
                  <AllCategory />
                )
              }
              label={_.name}
              className="itemIcon"
              link={(e) => {
                handleClickCategory(e, _.custom_attributes);
              }}
            />
          );
        })}
      </SlideWrapper>
    );
  } else {
    return (
      <SimpleSkeleton height={99} onLoad={true}>
        <div />
      </SimpleSkeleton>
    );
  }
};

export const ShoppingPage = () => {
  const [alertOpen, setAlertOpen] = useState(null);
  const { productSlider, productCategorySlider } = useSelector(
    (state) => state.productbyCategory
  );
  const [tabValue, setTabValue] = useState(0);
  const {
    bannerUtama,
    bannerPromoPilihan,
    bannerNewFeature,
    bannerGoodAndGift,
    // bannerPromoBrand,
  } = useSelector((state) => state.bannershop);

  const { wishlist } = useSelector((state) => state.me);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(ACTIONS.productbyCategory.getListProductSlider());
    dispatch(ACTIONS.productbyCategory.getListProductCategorySlider());
    dispatch(ACTIONS.productbyCategory.getListProductPremiumSlider());
    dispatch(ACTIONS.productdietByLifeStyle.getListProductDietByLifestyle());
    dispatch(ACTIONS.bannershop.getBannerUtama());
    dispatch(ACTIONS.bannershop.getBannerPromoPilihan());
    dispatch(ACTIONS.bannershop.getBackgroundPromo());
    dispatch(ACTIONS.bannershop.getBannerNewFeature());
    dispatch(ACTIONS.bannershop.getBannerGoodAndGift());
    dispatch(ACTIONS.bannershop.getBannerPromoBrand());

    if (Cookie.get('AMToken')) {
      dispatch(ACTIONS.me.getWishlist());
    }
  }, []);

  const handleChange = (e, newValue) => {
    setTabValue(newValue);
  };

  const addToWishlist = async (e) => {
    if (Cookie.get('AMToken')) {
      const request = await fetch(`/api/wishlist?sku=${e.sku}`, {
        method: 'PUT',
      });

      if (request.status === 200) {
        dispatch(ACTIONS.me.getWishlist());
        setAlertOpen('Items added to Wishlist');
      }
    } else {
      router.push('/login');
    }
  };

  const removeWishlist = async (e) => {
    const request = await fetch(`/api/wishlist-remove?id=${e.id}`, {
      method: 'DELETE',
    });

    if (request.status === 200) {
      dispatch(ACTIONS.me.getWishlist());
      setAlertOpen('Items remove from Wishlist');
    }
  };

  return (
    <ShoppingLayout placeholder="Search Item...">
      <SectionSlider>
        <SimpleSlider>
          {bannerUtama?.length > 0 ? (
            bannerUtama?.map((_, i) => {
              const image = _?.acf?.gambar_banner;
              const link = _?.acf?.link;
              const title = _?.title?.rendered;
              return (
                <ImageBanner key={i} link={link} banner={image} alt={title} />
              );
            })
          ) : (
            <SimpleSkeleton height={290} onLoad={true}>
              <div />
            </SimpleSkeleton>
          )}
        </SimpleSlider>
      </SectionSlider>
      <SectionIcons>
        <ListCategoryLevel1 />
      </SectionIcons>
      {/* hiddenProd */}
      {/* <FlashSaleSection /> */}
      <SectionPromo>
        <div className="titleWrapper">
          <p>Promo Pilihan</p>
        </div>

        <StyledFlexContainer>
          <SimpleSlider
            centerMode
            dots={false}
            autoplay
            infinite
            variableWidth
            className="slideCenter"
          >
            {bannerPromoPilihan?.length > 0
              ? bannerPromoPilihan?.map((_, i) => {
                  const image = _?.acf?.gambar_banner;
                  const link = _?.acf?.link;
                  const title = _?.title?.rendered;
                  return (
                    <Link href={link} passHref key={i}>
                      <a>
                        <img
                          src={image}
                          alt={title}
                          // onClick={() => imageClick()}
                        />
                      </a>
                    </Link>
                  );
                })
              : [...Array(4)].map((_, i) => (
                  <Skeleton height="128px" width="224px" key={i} />
                ))}
          </SimpleSlider>
        </StyledFlexContainer>
      </SectionPromo>

      {/* {console.log(wishlist?.items)}
      {console.log(productSlider?.products)} */}

      <SectionPromoItem>
        <StyledFlexContainer background={productSlider?.hexa_color}>
          <BackgroundPromoImage src={productSlider?.image} />
          <SlideWrapper>
            <div className="sliderItem">
              <div style={{ width: '160px' }} />
            </div>
            {productSlider?.products?.length > 0
              ? productSlider?.products?.map((data, i) => {
                  const werehouse = capitalizeEachWord(
                    data.warehouse_data.name
                  );
                  const activeWishlist = wishlist?.items?.filter(
                    (res) => res?.product?.sku === data?.sku
                  )?.length;
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
                        handleAddToWishlist={() =>
                          activeWishlist
                            ? removeWishlist(
                                wishlist?.items?.filter(
                                  (res) => res?.product?.sku === data?.sku
                                )[0]
                              )
                            : addToWishlist(data)
                        }
                        activeWishlist={activeWishlist}
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
              onClick={() =>
                window.location.assign(productSlider?.link_see_all)
              }
              bgColor="#7DA024"
            />
          </SlideWrapper>
        </StyledFlexContainer>
      </SectionPromoItem>
      <SectionAds>
        {bannerNewFeature[0]?.acf?.gambar_banner ? (
          <ImageBanner
            link={bannerNewFeature[0]?.acf?.link}
            banner={bannerNewFeature[0]?.acf?.gambar_banner}
            alt={bannerNewFeature[0]?.title?.rendered}
          />
        ) : (
          <Skeleton height={120} />
        )}
      </SectionAds>

      <ProductPremium
        addToWishlist={(e) => addToWishlist(e)}
        removeWishlist={(e) => removeWishlist(e)}
      />

      <SectionBannerCategory>
        <TitleSection title="Goods and Gifts" />

        <StyledFlexContainer>
          {bannerGoodAndGift?.map((_, i) => (
            <div className="imgWrap" key={i}>
              <ImageBanner
                link={_?.acf?.link}
                banner={_?.acf?.gambar_banner}
                alt={_?.title?.rendered}
              />
            </div>
          ))}
        </StyledFlexContainer>
      </SectionBannerCategory>
      {/* <SlideWrapper>
        <Box my={5} sx={{ bgcolor: 'background.paper', overflow: 'hidden' }}>
          {productCategorySlider ? (
            <>
              <SliderCategoryHeader
                slider={productCategorySlider}
                tabSlider={tabSlider}
                setTabSlider={setTabSlider}
              />

              <SliderCategoryMain
                slider={productCategorySlider}
                tabSlider={tabSlider}
                setTabSlider={setTabSlider}
              />
            </>
          ) : (
            <Box display="flex">
              {[...Array(4)].map((_, i) => (
                <Skeleton
                  height="300px"
                  width="160px"
                  key={i}
                  style={{ marginRight: '12px', zIndex: '0' }}
                />
              ))}
            </Box>
          )}
        </Box>
      </SlideWrapper> */}
      <ShopByLifestyle />

      <SectionProductSlider>
        {productCategorySlider ? (
          <BasicTabs
            tabName={productCategorySlider?.map((val) => ({
              name: val.slider_title,
            }))}
            value={tabValue}
            onChange={handleChange}
          >
            {productCategorySlider?.map((val, key) => (
              <TabPanel index={key} selected={key === tabValue} key={key}>
                <StyledFlexContainer>
                  <SlideWrapper>
                    {val?.products
                      ?.filter((res) => res.price)
                      ?.map((vals, ix) => {
                        const activeWishlist = wishlist?.items?.filter(
                          (res) => res?.product?.sku === vals?.sku
                        )?.length;
                        return (
                          <div key={ix} style={{ margin: '0px 5px' }}>
                            <ProductCategoryItem
                              promo={Boolean(vals?.special_price)}
                              name={vals?.name}
                              price={vals?.price}
                              specialPrice={vals?.special_price}
                              weight={vals?.warehouse_data?.name}
                              brand={vals?.brand_name}
                              image={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${vals?.image}`}
                              badge={vals?.product_diet}
                              onClick={() =>
                                router.push(`/produk/${vals.url_key}`)
                              }
                              handleAddToWishlist={() =>
                                activeWishlist
                                  ? removeWishlist(
                                      wishlist?.items?.filter(
                                        (res) => res?.product?.sku === vals?.sku
                                      )[0]
                                    )
                                  : addToWishlist(vals)
                              }
                              productActive={
                                vals?.quantity_and_stock_status?.is_in_stock
                              }
                              activeWishlist={activeWishlist}
                            />
                          </div>
                        );
                      })}
                  </SlideWrapper>
                </StyledFlexContainer>
              </TabPanel>
            ))}
          </BasicTabs>
        ) : (
          <StyledFlexContainer>
            <SlideWrapper>
              {[...Array(4)].map((_, i) => (
                <Skeleton
                  height="300px"
                  width="140px"
                  key={i}
                  style={{ marginRight: '12px', zIndex: '0' }}
                />
              ))}
            </SlideWrapper>
          </StyledFlexContainer>
        )}
      </SectionProductSlider>
      {/* <SectionBrandAds>
        {bannerNewFeature[0]?.acf?.gambar_banner ? (
          <ImageBanner
            link={bannerPromoBrand[0]?.acf?.link}
            banner={bannerPromoBrand[0]?.acf?.gambar_banner}
            alt={bannerPromoBrand[0]?.title?.rendered}
          />
        ) : (
          <Skeleton height={120} />
        )}
      </SectionBrandAds> */}
      {/* <SectionLifestyle>
        <TitleSection title="Shop by Lifestyle" />

        <StyledFlexContainer>
          <SlideWrapper minHeight="0">
            <LifestyleArea
              iconComponent={<img src={IconVegan} alt="iconsLifestyle" />}
              label="Vegan"
            />
            <LifestyleArea
              iconComponent={<img src={IconVegan} alt="iconsLifestyle" />}
              label="Vegan"
            />
            <LifestyleArea
              iconComponent={<img src={IconVegan} alt="iconsLifestyle" />}
              label="Vegan"
            />
            <LifestyleArea
              iconComponent={<img src={IconVegan} alt="iconsLifestyle" />}
              label="Vegan"
            />
          </SlideWrapper>
        </StyledFlexContainer>
      </SectionLifestyle> */}
      {/* <SectionBrand>
        <TitleSection title="Brand Pilihan" />

        <StyledFlexContainer>
          <SlideWrapper minHeight="300px">
            <BrandArea />
            <BrandArea />
            <BrandArea />
            <BrandArea />
            <BrandArea />
          </SlideWrapper>
        </StyledFlexContainer>
      </SectionBrand> */}
      {/* <SectionBorder /> */}
      <AlertComponent
        open={Boolean(alertOpen)}
        onClose={() => setAlertOpen(null)}
        message={alertOpen}
      />
    </ShoppingLayout>
  );
};

export default ShoppingPage;
