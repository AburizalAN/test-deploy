import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.PRODUCT_DIET;

const defaultState = {
  loading: true,
  error: null,
  listProductdietByLifestyle: [],
};

function productDietReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_PRODUCT_DIET_BY_LIFESTYLE_SUCCESS:
      return {
        ...state,
        loading: false,
        listProductdietByLifestyle: action.value,
      };
    case Redux.GET_PRODUCT_DIET_BY_LIFESTYLE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_PRODUCT_DIET_BY_LIFESTYLE_FAILURE:
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

export default productDietReducer;
