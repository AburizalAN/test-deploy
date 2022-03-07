import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.ADDTOCART;

const defaultState = {
  loading: true,
  error: null,
  listRespond: [],
  alertOn: false,
};

function addtocartReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_ADDTOCART_SUCCESS:
      return {
        ...state,
        loading: false,
        listRespond: action.value,
      };
    case Redux.GET_ADDTOCART_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_ADDTOCART_FAILURE:
      return {
        ...state,
        error: action.error,
        alertOn: true,
      };

    case Redux.RESET:
      return {
        ...defaultState,
      };
    default:
      return state;
  }
}

export default addtocartReducer;
