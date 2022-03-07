import styled from 'styled-components';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { IMAGE_URL_STAGING } from 'utils/constant';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import { dateTimeToString } from 'utils/helper';

export const TitleSection = styled.div`
  font-size: 15px;
  line-height: 20.46px;
  font-weight: 700;
  color: #25282b;
`;

export const SectionSearchPopuler = ({ list }) => {
  const SearchPopulerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px 0px -12px -12px;
    padding-top: 12px;
  `;
  const SearchPopulerItem = styled.div`
    padding: 8px 20px;
    border: 1px solid #265329;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    line-height: 17.73px;
    letter-spacing: 0.25px;
    margin: 0px 0px 12px 12px;
  `;

  return (
    <Box p="12px">
      <TitleSection>Pencarian Terpopuler</TitleSection>
      <SearchPopulerContainer>
        {list.map((item, index) => (
          <SearchPopulerItem key={index}>{item}</SearchPopulerItem>
        ))}
      </SearchPopulerContainer>
    </Box>
  );
};

export const PopularProductItem = ({
  image,
  title,
  desc,
  priceStrike,
  price,
  discount = 0,
  callback,
  productActive,
}) => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    filter: ${(props) => (props['aria-disabled'] ? 'grayscale(1)' : '')};
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    & > *:not(:last-child) {
      margin-right: 20px;
    }
  `;
  const ImageWrapper = styled.div`
    width: 80px;
    img {
      width: 100%;
    }
  `;
  const ContentWrapper = styled.div`
    .title {
      font-size: 15px;
      font-weight: 700;
      line-height: 20.46px;
      color: #25282b;
    }
    p {
      font-size: 13px;
      line-height: 17.73px;
      margin: 0;
    }
    .price {
      font-size: 13px;
      line-height: 17.73px;
      font-weight: 700;
      display: flex;
      align-items: center;
      span:not(:last-child) {
        margin-right: 8px;
      }
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
    }
    & > *:not(:last-child) {
      margin-bottom: 12px;
    }
  `;

  // const finalPrice = price - (price * discount) / 100;

  return (
    <Container aria-disabled={!productActive} onClick={() => callback()}>
      <ImageWrapper>
        <img src={image} alt="popular image" />
      </ImageWrapper>
      <ContentWrapper>
        <div className="title">{title}</div>
        {desc !== '&nbsp' && <p>{desc}</p>}
        <div className="price">
          {discount ? (
            <>
              <span className="discount">{discount}%</span>
              <span className="priceBefore">
                Rp {new Intl.NumberFormat('id').format(priceStrike)}
              </span>
            </>
          ) : (
            <></>
          )}
          <span className="finalPrice">
            Rp {new Intl.NumberFormat('id').format(price)}
          </span>
        </div>
      </ContentWrapper>
    </Container>
  );
};

export const SectionPopularProduct = ({ limit = 20 }) => {
  const router = useRouter();
  const searchReducer = useSelector((state) => state.searchProduct);
  const allItem = searchReducer.listSearch?.data?.items;

  return (
    <Box p="12px">
      <TitleSection>Hasil Pencarian Produk</TitleSection>
      <Box mt="12px">
        {!searchReducer.loading ? (
          allItem.length > 0 ? (
            <>
              {allItem.slice(0, limit).map((_, index) => {
                let specialPrice =
                  _.extension_attributes.am_product_price_data[0];
                const priceParsingJson = JSON.parse(specialPrice);
                const { product_original_price, product_special_price } =
                  priceParsingJson;
                const persenDiskon =
                  ((product_original_price - product_special_price) /
                    product_original_price) *
                  100;
                let diskonParse = parseInt(persenDiskon);
                let brandName = JSON.parse(_.extension_attributes.brand[0]);
                const filteredUrl = _.custom_attributes.filter(function (
                  datum
                ) {
                  return datum.attribute_code === 'url_key';
                });
                const routeRedirectDetail = ({ urlKey, active }) => {
                  if (active) return;
                  router.push('/produk/' + urlKey);
                };

                let active =
                  _.extension_attributes.simple_product_stock_status[0];
                const activeParse = JSON.parse(active);
                const activeStatus = activeParse.stock_status;
                let resultImg = _.custom_attributes.find((obj) => {
                  return obj.attribute_code === 'image';
                });
                const warehouses = _.extension_attributes.warehouse_data.map(
                  (item) => {
                    console.log(JSON.parse(item));
                    return JSON.parse(item).name;
                  }
                );

                console.log(resultImg);

                return (
                  <PopularProductItem
                    title={_.name}
                    desc={brandName.brand_name}
                    warehouse={warehouses}
                    priceStrike={
                      product_original_price > product_special_price
                        ? product_original_price
                        : product_special_price
                    }
                    price={
                      product_special_price > 0
                        ? product_special_price
                        : product_original_price
                    }
                    discount={diskonParse !== 100 && diskonParse}
                    image={
                      resultImg
                        ? IMAGE_URL_STAGING + resultImg?.value
                        : '/assets/img/load-failed/failed1.jpg'
                    }
                    key={index}
                    callback={() =>
                      routeRedirectDetail({
                        urlKey: filteredUrl[0].value,
                        active: !activeStatus,
                      })
                    }
                    productActive={activeStatus}
                  />
                );
              })}
            </>
          ) : (
            <p>Produk tidak ditemukan</p>
          )
        ) : (
          <Box sx={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Box>
  );
};

// export const ArtikelResepItem = () => {

// }

const FailedA = '/assets/img/load-failed/failed1.jpg';

const ListArtikel = ({
  image = FailedA,
  category = 'Awalmula',
  title = 'Realfood Up Minuman Kekinian yang Segar dan Kaya Akan Manfaat sehingga menjaga kebugaran pada masa covid 19',
  date = '12 September 2020',
  readTime = '4 min',
  callback,
}) => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    filter: ${(props) => (props['aria-disabled'] ? 'grayscale(1)' : '')};
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    & > *:not(:last-child) {
      margin-right: 20px;
    }
  `;
  const ImageWrapper = styled.div`
    ${'' /* width: 300px; */}
    img {
      width: 100px;
      height: 80px;
      border-radius: 12px;
      object-fit: cover;
    }
  `;
  const ContentWrapper = styled.div`
    .title {
      font-size: 15px;
      font-weight: 700;
      line-height: 20.46px;
      color: #25282b;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      font-size: 13px;
      line-height: 17.73px;
      margin-bottom: 4px;
    }

    & > *:not(:last-child) {
      margin-bottom: 10px;
      margin: 0;
    }
  `;
  return (
    <Container onClick={() => callback()}>
      <ImageWrapper>
        <img src={image} alt="popular image" />
      </ImageWrapper>
      <ContentWrapper>
        <p>{category}</p>
        <div className="title">{title}</div>
        <p>
          {date} &#8226; {readTime}
        </p>
      </ContentWrapper>
    </Container>
  );
};

export const SectionArtikelResep = () => {
  const router = useRouter();
  const searchReducer = useSelector((state) => state.searchProduct);
  const allItem = searchReducer.listSearch?.article?.article;
  const routeRedirectDetail = ({ urlKey, active }) => {
    if (!active) return;
    router.push('/artikel/' + urlKey);
  };
  return (
    <Box p="12px">
      <TitleSection>Artikel Terpopuler</TitleSection>
      <Box mt="12px">
        {!searchReducer.loading ? (
          allItem.length > 0 ? (
            <>
              {allItem.slice(0, 3).map((_, index) => {
                return (
                  <ListArtikel
                    key={index}
                    title={_.title.rendered}
                    image={_.better_featured_image?.source_url || FailedA}
                    readTime={_.acf.time}
                    date={dateTimeToString(_.date)}
                    callback={() =>
                      routeRedirectDetail({
                        urlKey: _.slug,
                        active: true,
                      })
                    }
                  />
                );
              })}
            </>
          ) : (
            <p>Artikel tidak ditemukan</p>
          )
        ) : (
          <Box sx={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export const SectionRecipe = () => {
  const router = useRouter();
  const searchReducer = useSelector((state) => state.searchProduct);
  const allItem = searchReducer.listSearch?.recipe?.recipe;
  const routeRedirectDetail = ({ urlKey, active }) => {
    if (!active) return;
    router.push('/recipe/' + urlKey);
  };
  return (
    <Box p="12px">
      <TitleSection>Resep Terpopuler</TitleSection>
      <Box mt="12px">
        {!searchReducer.loading ? (
          allItem.length > 0 ? (
            <>
              {allItem.slice(0, 3).map((_, index) => {
                return (
                  <ListArtikel
                    key={index}
                    title={_.title.rendered}
                    image={_.better_featured_image?.source_url || FailedA}
                    readTime={_.acf.time}
                    date={dateTimeToString(_.date)}
                    callback={() =>
                      routeRedirectDetail({
                        urlKey: _.slug,
                        active: true,
                      })
                    }
                  />
                );
              })}
            </>
          ) : (
            <p>Resep tidak ditemukan</p>
          )
        ) : (
          <Box sx={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Box>
  );
};
