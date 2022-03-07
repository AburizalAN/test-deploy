import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.YOUTUBE;

const defaultState = {
  loading: true,
  error: null,
  listYoutube: [],
};

function youtubeReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_YOUTUBE_SUCCESS:
      return {
        ...state,
        loading: false,
        listYoutube: action.value,
      };
    case Redux.GET_YOUTUBE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_YOUTUBE_FAILURE:
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

export default youtubeReducer;
