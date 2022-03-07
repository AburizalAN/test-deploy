import TYPES from './constants';

function getBannerUtama() {
  return {
    type: TYPES.BANNERSHOP.Saga.GET_BANNER_SHOPPING,
    reduxConstant: TYPES.BANNERSHOP.Redux.GET_BANNER_UTAMA,
    id: 154,
  };
}

function getBannerPromoPilihan() {
  return {
    type: TYPES.BANNERSHOP.Saga.GET_BANNER_SHOPPING,
    reduxConstant: TYPES.BANNERSHOP.Redux.GET_BANNER_PROMO_PILIHAN,
    id: 153,
  };
}

function getBackgroundPromo() {
  return {
    type: TYPES.BANNERSHOP.Saga.GET_BANNER_SHOPPING,
    reduxConstant: TYPES.BANNERSHOP.Redux.GET_BACKGROUND_PROMO,
    id: 158,
  };
}

function getBannerNewFeature() {
  return {
    type: TYPES.BANNERSHOP.Saga.GET_BANNER_SHOPPING,
    reduxConstant: TYPES.BANNERSHOP.Redux.GET_BANNER_NEWFEATURE,
    id: 156,
  };
}

function getBannerGoodAndGift() {
  return {
    type: TYPES.BANNERSHOP.Saga.GET_BANNER_SHOPPING,
    reduxConstant: TYPES.BANNERSHOP.Redux.GET_BANNER_GOODANDGIFT,
    id: 155,
  };
}

function getBannerPromoBrand() {
  return {
    type: TYPES.BANNERSHOP.Saga.GET_BANNER_SHOPPING,
    reduxConstant: TYPES.BANNERSHOP.Redux.GET_BANNER_PROMO_BRAND,
    id: 157,
  };
}

export default {
  bannershop: {
    getBannerUtama,
    getBannerPromoPilihan,
    getBackgroundPromo,
    getBannerNewFeature,
    getBannerGoodAndGift,
    getBannerPromoBrand,
  },
};
