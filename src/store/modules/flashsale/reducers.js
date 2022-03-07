import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.FLASHSALE;

const defaultState = {
  loading: true,
  error: null,
  flashSaleList: [],
  flashSaleProducts: [],
};

function flashsale(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case Redux.RESET:
      return {
        ...defaultState,
        loading: false,
      };

    case Redux.GET_FLASHSALE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        flashSaleList: action.payload,
      };

    case Redux.GET_FLASHSALE_PRODUCTS:
      return {
        ...state,
        loading: false,
        error: null,
        flashSaleProducts: action.payload,
      };

    case Redux.FLASHSALE_LOADING:
      return {
        ...state,
        loading: action.value,
      };

    case Redux.GET_FLASHSALE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.value,
      };

    default:
      return state;
  }
}

export default flashsale;
