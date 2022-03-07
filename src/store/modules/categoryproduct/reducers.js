import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.PRODUCT_CATEGORIES;

const defaultState = {
  loading: true,
  error: null,
  listProductCategories: [],
};

function productCategoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_PRODUCT_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        listProductCategories: action.value,
      };
    case Redux.GET_PRODUCT_CATEGORIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_PRODUCT_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.error,
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
