import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.INSTAGRAM;

const defaultState = {
  loading: true,
  error: null,
  listInstagram: [],
};

function instagramReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_INSTAGRAM_SUCCESS:
      return {
        ...state,
        loading: false,
        listInstagram: action.value,
      };
    case Redux.GET_INSTAGRAM_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_INSTAGRAM_FAILURE:
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

export default instagramReducer;
