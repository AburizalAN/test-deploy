import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.CLAIM_VOUCHER;

const defaultState = {
  loading: false,
  success: null,
  error: null,
};

function claimVoucher(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case Redux.CLAIM_VOUCHER_LOADING:
      return { ...state, loading: true };

    case Redux.CLAIM_VOUCHER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.success,
        error: null,
      };

    case Redux.CLAIM_VOUCHER_FAILURE:
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

export default claimVoucher;
