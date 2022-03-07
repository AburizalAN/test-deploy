import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.PRODUCT_BY_CATEGORY;

const defaultState = {
  loading: true,
  error: null,
  listProduct: [],
  productSlider: null,
  productPremiumSlider: null,
  productCategorySlider: null,
  waitpagination: false,
  successload: false,
};

function productCategoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case Redux.GET_PRODUCT_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        listProduct: action.value,
        successload: true,
      };
    case Redux.GET_PRODUCT_BY_CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_PRODUCT_BY_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case Redux.GET_LIST_PRODUCT_PREMIUM_SLIDER_SUCCESS:
      return {
        ...state,
        loading: false,
        productPremiumSlider: action.payload,
      };
    case Redux.GET_LIST_PRODUCT_PREMIUM_SLIDER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_LIST_PRODUCT_PREMIUM_SLIDER_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case Redux.GET_MORE_PRODUCT_BY_CATEGORY_LOADING:
      return {
        ...state,
        waitpagination: true,
        successload: false,
      };
    case Redux.GET_MORE_PRODUCT_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        waitpagination: false,
        successload: true,
        listProduct: {
          data: {
            ...state.listProduct.data,
            items: [
              ...state.listProduct.data.items,
              ...action.value.data.items,
            ],
          },
          id: action.value.id,
          page: parseInt(action.value.page),
        },
      };
    case Redux.GET_LIST_PRODUCT_SLIDER:
      return {
        ...state,
        error: null,
        successload: true,
        productSlider: action.payload,
      };
    case Redux.GET_LIST_PRODUCT_CATEGORY_SLIDER:
      return {
        ...state,
        error: null,
        successload: true,
        productCategorySlider: action.payload,
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
