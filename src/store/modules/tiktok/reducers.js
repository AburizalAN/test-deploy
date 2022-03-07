import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.TIKTOK;

const defaultState = {
  loading: true,
  error: null,
  listTiktok: [],
};

function tiktokReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_TIKTOK_SUCCESS:
      return {
        ...state,
        loading: false,
        listTiktok: action.value,
      };
    case Redux.GET_TIKTOK_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_TIKTOK_FAILURE:
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

export default tiktokReducer;
