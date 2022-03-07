import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.CONFIRM_PAYMENT;

const defaultState = {
  loading: false,
  success: null,
  error: null,
};

function confirmPayment(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case Redux.CONFIRM_PAYMENT_LOADING:
      return { ...state, loading: true };

    case Redux.CONFIRM_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.success,
        error: null,
      };

    case Redux.CONFIRM_PAYMENT_FAILURE:
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

export default confirmPayment;
