import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.FORGET_PASSWORD;

const defaultState = {
  loading: false,
  success: null,
  error: null,
};

function forgetPasswordReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case Redux.SEND_EMAIL_LOADING:
    case Redux.RESET_PASSWORD_LOADING:
      return { ...state, loading: true };

    case Redux.SEND_EMAIL_SUCCESS:
    case Redux.RESET_PASSWORD_SUCCESS:
      return { ...state, loading: false, success: true, error: null };

    case Redux.SEND_EMAIL_FAILURE:
    case Redux.RESET_PASSWORD_FAILURE:
      return { ...state, loading: false, success: null, error: action.error };

    case Redux.RESET:
      return { ...defaultState };

    default:
      return state;
  }
}

export default forgetPasswordReducer;
