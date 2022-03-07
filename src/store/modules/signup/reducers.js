import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.SIGNUP;

const defaultState = {
  loading: false,
  success: null,
  error: null,
};

function signupPage(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case Redux.REGISTER_CUSTOMER_LOADING:
      return { ...state, loading: true };

    case Redux.REGISTER_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.success,
        error: null,
      };

    case Redux.REGISTER_CUSTOMER_FAILURE:
      return {
        ...state,
        loading: false,
        success: null,
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

export default signupPage;
