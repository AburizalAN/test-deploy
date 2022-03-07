import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.INFO;

const defaultState = {
  loading: true,
  error: null,
  info: [],
  alertOn: false,
  success: false,
  firebaseLoading: false,
  firebaseError: null,
  firebaseSuccess: false,
  dataFirebase: {},
};

function infoReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        info: action.value,
        success: true,
      };
    case Redux.GET_INFO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_INFO_FAILURE:
      return {
        ...state,
        error: action.error,
        alertOn: true,
      };
    case Redux.POST_FIREBASE_FAILURE:
      return {
        ...state,
        firebaseError: action.error,
        firebaseLoading: false,
      };
    case Redux.POST_FIREBASE_SUCCESS:
      return {
        ...state,
        firebaseLoading: false,
        firebaseSuccess: true,
        dataFirebase: action.value,
      };
    case Redux.POST_FIREBASE_LOADING:
      return {
        ...state,
        firebaseLoading: true,
      };
    case Redux.RESET:
      return {
        ...defaultState,
      };
    default:
      return state;
  }
}

export default infoReducer;
