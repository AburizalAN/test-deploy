import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.POST;

const defaultState = {
  loading: true,
  error: null,
  listPost: [],
  detailPost: [],
  listTemanLama: [],
};

function postPage(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }

    // get list post
    case Redux.GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        listPost: action.value,
      };
    case Redux.GET_POST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_POST_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    // get detail post
    case Redux.GET_POST_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        detailPost: action.value,
      };
    case Redux.GET_POST_DETAIL_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_POST_DETAIL_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    // get list teman lama
    case Redux.GET_POST_TEMAN_LAMA_SUCCESS:
      return {
        ...state,
        loading: false,
        listTemanLama: action.value,
      };
    case Redux.GET_POST_TEMAN_LAMA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_POST_TEMAN_LAMA_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case Redux.RESET:
      return {
        ...defaultState,
        loading: true,
      };
    default:
      return state;
  }
}

export default postPage;
