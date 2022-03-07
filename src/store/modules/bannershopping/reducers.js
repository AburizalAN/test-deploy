import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.BANNERSHOP;

const defaultState = {
  loading: true,
  error: null,
  bannerUtama: [],
  bannerPromoPilihan: [],
  backgroundPromo: [],
  bannerNewFeature: [],
  bannerGoodAndGift: [],
  bannerPromoBrand: [],
};

function bannerShopping(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case Redux.GET_BANNER_UTAMA:
      return {
        ...state,
        loading: false,
        bannerUtama: action.payload,
      };

    case Redux.GET_BANNER_PROMO_PILIHAN:
      return {
        ...state,
        loading: false,
        bannerPromoPilihan: action.payload,
      };

    case Redux.GET_BACKGROUND_PROMO:
      return {
        ...state,
        loading: false,
        backgroundPromo: action.payload,
      };

    case Redux.GET_BANNER_NEWFEATURE:
      return {
        ...state,
        loading: false,
        bannerNewFeature: action.payload,
      };

    case Redux.GET_BANNER_GOODANDGIFT:
      return {
        ...state,
        loading: false,
        bannerGoodAndGift: action.payload,
      };

    case Redux.GET_BANNER_PROMO_BRAND:
      return {
        ...state,
        loading: false,
        bannerPromoBrand: action.payload,
      };

    case Redux.GET_BANNERSHOP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}

export default bannerShopping;
