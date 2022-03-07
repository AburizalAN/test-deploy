import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.POSTCATEGORY;

const defaultState = {
  loading: true,
  error: null,
  listCategoryPost: [],
};

function postCategoryReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_POST_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        listCategoryPost: action.value,
      };
    case Redux.GET_POST_CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_POST_CATEGORY_FAILED:
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

export default postCategoryReducer;
