import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.BRANDS;

const defaultState = {
  loading: true,
  brands: [],

  // featured brands
  loadingFeatured: true,
  featuredBrands: [],
  brandProducts: [],

  // Search
  searchBrandList: [],
  loadingSearch: false,

  // error
  error: null,
};

function brands(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case Redux.RESET:
      return defaultState;

    case Redux.GET_BRANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: action.value,
        error: null,
      };

    case Redux.GET_FEATURED_BRANDS_SUCCESS:
      return {
        ...state,
        loadingFeatured: false,
        featuredBrands: action.value,
        error: null,
      };

    case Redux.GET_BRAND_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        brandProducts: action.value,
        error: null,
      };

    case Redux.GET_SEARCH_BRANDS_LIST:
      return {
        ...state,
        loadingSearch: false,
        searchBrandList: action.value,
        error: null,
      };

    case Redux.SET_SEARCH_BRANDS_LOADING:
      return {
        ...state,
        loadingSearch: action.value,
      };

    case Redux.SET_BRANDS_LOADING:
      return {
        ...state,
        loading: action.value,
      };

    case Redux.SET_FEATURED_BRANDS_LOADING:
      return {
        ...state,
        loadingFeatured: action.value,
      };

    case Redux.GET_BRANDS_FAILURE:
      return {
        ...state,
        loading: false,
        loadingSearch: false,
        brands: [],
        searchBrandList: [],
        error: action.value,
      };

    default:
      return state;
  }
}

export default brands;
