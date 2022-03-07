import styled from 'styled-components';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  SlideWrapper,
  StyledFlexContainer,
} from 'components/ui/Shopping/style';
import ProductItem from 'components/ui/product-item';
import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import { useSelector, useDispatch } from 'react-redux';
import { capitalizeEachWord } from 'utils/helper';
import ACTIONS from 'store/registerActions';
import moment from 'moment';
import Countdown from 'utils/Countdown';
import { FlashSaleTabs } from 'components/ui/tabs';
import Box from '@mui/material/Box';

const FlashSaleBackground = '/assets/img/flashsale-bg.png';

const SectionWrapper = styled.div`
  margin-top: 32px;
`;
const ItemsWrapper = styled.div`
  background-image: url(${FlashSaleBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  display: flex;
  width: 100%;
`;
const TitleSection = styled.div`
  color: #b42519;
  font-size: 18px;
  line-height: 24.55px;
  letter-spacing: 0.15px;
  font-weight: 800;
`;
const CountdownWrapper = styled.div`
  background-color: #b42519;
  color: white;
  padding: 2.5px 7px;
  font-size: 11px;
  font-weight: 900;
  line-height: 15px;
  border-radius: 4px;
`;

const LabelTab = ({ label, time }) => (
  <Box>
    <Box sx={{ fontWeight: 'bold', fontSize: '18px' }}>{time}</Box>
    <Box>{label}</Box>
  </Box>
);

LabelTab.propTypes = {
  label: PropTypes.string,
  time: PropTypes.string,
};

const FlashSaleSection = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [expiredTime, setExpiredTime] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [tabProps, setTabProps] = useState([]);

  const { flashSaleProducts, flashSaleList, loading } = useSelector(
    (state) => state.flashsale
  );

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    dispatch(ACTIONS.flashsale.getFlashSaleProducts(tabProps[newValue].id));
    setExpiredTime(tabProps[newValue].endTime);
  };

  useEffect(() => {
    dispatch(ACTIONS.flashsale.getFlashSaleData());
  }, []);

  useEffect(() => {
    const now = moment();
    const endDay = moment().endOf('day');
    let _activeFlashSales, _nextFlashSales;
    _activeFlashSales = flashSaleList?.filter(
      (item) =>
        moment(item.start_time).isBefore(now) &&
        moment(item.end_time).isAfter(now)
    );
    _nextFlashSales = flashSaleList?.filter(
      (item) =>
        moment(item.start_time).isAfter(now) &&
        moment(item.end_time).isBefore(endDay)
    );

    setTabProps([
      ..._activeFlashSales.map((item, i) => ({
        label: (
          <LabelTab
            key={i}
            label="Sedang Berjalan"
            time={moment(item.start_time).format('HH:mm')}
          />
        ),
        startTime: item.start_time,
        endTime: item.end_time,
        id: item.id,
      })),
      ..._nextFlashSales.map((item, i) => ({
        label: (
          <LabelTab
            key={i}
            label="Akan Datang"
            time={moment(item.start_time).format('HH:mm')}
          />
        ),
        startTime: item.start_time,
        endTime: null,
        id: item.id,
      })),
    ]);
  }, [flashSaleList]);

  useEffect(() => {
    const _activeID = tabProps[0]?.id;
    const _expiredTime = tabProps[0]?.endTime;
    if (_activeID) dispatch(ACTIONS.flashsale.getFlashSaleProducts(_activeID));
    if (_expiredTime) setExpiredTime(_expiredTime);
  }, [tabProps]);

  const ProductsSlider = ({ products }) => (
    <ItemsWrapper>
      <SlideWrapper px="12px">
        {products?.length > 0 && !loading
          ? products?.map((data, i) => {
              const werehouse = capitalizeEachWord(
                data?.warehouse_data[0].name
              );
              {
                /* const range = dateRange(
                data?.special_from_date,
                data?.special_to_date
              ); */
              }
              return (
                <div className={'sliderItems'} key={i}>
                  <ProductItem
                    isFlashSale={true}
                    name={data?.name}
                    price={data?.price}
                    specialPrice={data?.special_price}
                    weight={werehouse || 'awalmula'}
                    brand={data?.brand[0]?.brand_name || '&nbsp'}
                    image={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${data?.image}`}
                    badge={data?.product_diet}
                    onClick={() => router.push(`/produk/${data.url_key}`)}
                    productActive={data?.is_salable == 1}
                  />
                </div>
              );
            })
          : [...Array(4)].map((_, i) => (
              <Skeleton
                height="300px"
                width="130px"
                key={i}
                style={{ marginRight: '12px', zIndex: '0' }}
              />
            ))}
      </SlideWrapper>
    </ItemsWrapper>
  );

  ProductsSlider.propTypes = {
    products: PropTypes.array,
  };

  return !loading && tabProps.length <= 0 ? null : (
    <SectionWrapper>
      <StyledFlexContainer
        px="12px"
        mb="2px"
        justifyContent="space-between"
        alignItems="center"
      >
        <TitleSection>FLASHSALE</TitleSection>
        {!loading ? (
          <Countdown
            expired_time={expiredTime}
            Component={({ time }) => {
              return time ? (
                <CountdownWrapper>
                  {time.hours < 10 ? `0${time.hours}` : time.hours}:{' '}
                  {time.minutes < 10 ? `0${time.minutes}` : time.minutes}:{' '}
                  {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
                </CountdownWrapper>
              ) : (
                <CountdownWrapper>00:00:00</CountdownWrapper>
              );
            }}
          />
        ) : (
          <Skeleton width="70px" height="20px" />
        )}
      </StyledFlexContainer>

      <FlashSaleTabs tabs={tabProps} value={tabValue} onChange={handleChange}>
        <ProductsSlider products={flashSaleProducts} />
      </FlashSaleTabs>
    </SectionWrapper>
  );
};

export default FlashSaleSection;
