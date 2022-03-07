import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.ME;

const defaultState = {
  loading: false,
  profile: {},
  success: null,
  error: null,
  wishlist: [],
};

function meReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case Redux.GET_PROFILE_LOADING:
    case Redux.EDIT_PROFILE_LOADING:
    case Redux.CHANGE_PASSWORD_LOADING:
    case Redux.ADD_ADDRESS_LOADING:
    case Redux.EDIT_ADDRESS_LOADING:
    case Redux.SET_MAIN_ADDRESS_LOADING:
    case Redux.DELETE_ADDRESS_LOADING:
    case Redux.GET_WISHLIST_LOADING:
      return { ...state, loading: true, success: null, error: null };

    case Redux.GET_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        wishlist: action.wishlist,
        success: null,
        error: null,
      };

    case Redux.GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.profile,
        success: null,
        error: null,
      };

    case Redux.EDIT_PROFILE_SUCCESS:
    case Redux.ADD_ADDRESS_SUCCESS:
    case Redux.CHANGE_PASSWORD_SUCCESS:
    case Redux.EDIT_ADDRESS_SUCCESS:
    case Redux.SET_MAIN_ADDRESS_SUCCESS:
    case Redux.DELETE_ADDRESS_SUCCESS:
      return { ...state, success: true, error: null };

    case Redux.GET_PROFILE_FAILURE:
    case Redux.EDIT_PROFILE_FAILURE:
    case Redux.CHANGE_PASSWORD_FAILURE:
    case Redux.ADD_ADDRESS_FAILURE:
    case Redux.EDIT_ADDRESS_FAILURE:
    case Redux.SET_MAIN_ADDRESS_FAILURE:
    case Redux.DELETE_ADDRESS_FAILURE:
    case Redux.GET_WISHLIST_FAILURE:
      return { ...state, loading: false, success: null, error: action.error };

    case Redux.RESET:
      return {
        ...defaultState,
      };

    default:
      return state;
  }
}

export default meReducer;
