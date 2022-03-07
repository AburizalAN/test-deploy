import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.POSTPOPULAR;

const defaultState = {
  loading: true,
  error: null,
  listPopularPost: [],
};

function postPopularReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_POPULAR_SUCCESS:
      return {
        ...state,
        loading: false,
        listPopularPost: action.value,
      };
    case Redux.GET_POPULAR_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_POPULAR_FAILURE:
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

export default postPopularReducer;
