import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.ORDERDETAIL;

const defaultState = {
  loading: true,
  error: null,
  data: [],
};

function orderDetailReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.value,
      };
    case Redux.GET_ORDER_DETAIL_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_ORDER_DETAIL_FAILURE:
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

export default orderDetailReducer;
