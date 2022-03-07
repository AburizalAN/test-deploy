/* eslint-disable no-case-declarations */
import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.PRODUCT_BY_SLUG;

const defaultState = {
  loading: true,
  error: null,
  product: [],
  success: false,
  active: 0,
};

function productCategoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_PRODUCT_BY_SLUG_SUCCESS:
      const priceParsingJson = JSON.parse(
        action.value.data.items[0].extension_attributes.am_product_price_data[0]
      );
      return {
        ...state,
        loading: false,
        product: action.value,
        success: true,
        priceProduct: priceParsingJson,
      };
    case Redux.GET_PRODUCT_BY_SLUG_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_PRODUCT_BY_SLUG_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case Redux.PRODUCT_BY_SLUG_ACTIVE:
      return {
        ...state,
        active: action.value,
      };
    case Redux.SET_PRODUCT_BY_SLUG_PRICE:
      console.log('action', action);
      return {
        ...state,
        priceProduct: action.priceProduct,
      };
    case Redux.RESET:
      return {
        ...defaultState,
      };
    default:
      return state;
  }
}

export default productCategoriesReducer;
