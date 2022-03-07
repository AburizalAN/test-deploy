import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.POSTBEAUTY;

const defaultState = {
  loading: true,
  error: null,
  listBeautyPost: [],
};

function postBeautyReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_BEAUTY_SUCCESS:
      return {
        ...state,
        loading: false,
        listBeautyPost: action.value,
      };
    case Redux.GET_BEAUTY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_BEAUTY_FAILURE:
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

export default postBeautyReducer;
