import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.SEARCH;

const defaultState = {
  loading: true,
  error: null,
  listSearch: [],
};

function productCategoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        listSearch: action.value,
      };
    case Redux.GET_SEARCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_SEARCH_FAILURE:
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
