import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.TRANSACTION;

const defaultState = {
  loading: false,
  transactionList: [],
  filters: {
    status: '',
    dateRange: ['', ''],
  },
  orderDetail: {},
  success: null,
  error: null,
};

function transactionReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case Redux.GET_TRANSACTION_LIST_LOADING:
    case Redux.GET_ORDER_DETAIL_LOADING:
      return { ...state, loading: true, success: null, error: null };

    case Redux.GET_TRANSACTION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        transactionList: action.transactionList,
        success: true,
        error: null,
      };

    case Redux.GET_ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        orderDetail: action.orderDetail,
        success: true,
        error: null,
      };

    case Redux.GET_TRANSACTION_LIST_FAILURE:
      return { ...state, loading: false, success: null, error: action.error };

    case Redux.GET_ORDER_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        orderDetail: {},
        success: null,
        error: action.error,
      };

    case Redux.SET_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      };

    case Redux.RESET:
      return {
        ...defaultState,
      };

    default:
      return state;
  }
}

export default transactionReducer;
