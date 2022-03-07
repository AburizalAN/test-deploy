import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.CHECKOUT;

const defaultState = {
  loading: true,
  loadingCounter: false,
  error: null,
  checkoutList: [],
  quote_id: null,
  subtotal: null,
  address_list: [],
  payment_groups: {},
  discount: {},
  order_data: {},
  gimmick: {
    data: [],
    notif: [],
  },
  summary_order: {},
  checkout_status: null,
};

function checkout(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case Redux.RESET:
      return {
        ...state,
        loading: true,
        loadingCounter: false,
        error: null,
        checkoutList: [],
        quote_id: null,
        subtotal: null,
        address_list: [],
        payment_groups: {},
        discount: {},
        order_data: {},
        gimmick: {
          data: [],
          notif: [],
        },
        summary_order: {},
        checkout_status: null,
      };

    case Redux.GET_CHECKOUT_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        checkoutList: action.value.checkoutList,
        quote_id: action.value.quote_id,
        subtotal: action.value.subtotal,
        address_list: action.value.address_list,
        payment_groups: action.value.payment_groups,
        discount: action.value.discount,
        gimmick: action.value.gimmick,
        order_data: {
          customer_id: action.value.address_list[0]?.customer_id,
          shipping_method: [],
          cartId: action.value.quote_id,
          billingAddress: {
            customerAddressId: action.value.address_list[0]?.address_id,
            countryId: action.value.address_list[0]?.country_id,
            regionId: action.value.address_list[0]?.region_id,
            regionCode: '',
            region: action.value.address_list[0]?.region,
            customerId: action.value.address_list[0]?.customer_id,
            street: action.value.address_list[0]?.street,
            telephone: action.value.address_list[0]?.telephone,
            postcode: action.value.address_list[0]?.postcode,
            city: action.value.address_list[0]?.city,
            firstname: action.value.address_list[0]?.firstname,
            lastname: action.value.address_list[0]?.lastname,
            customAttributes: action.value.address_list[0]?.custom_attributes,
          },
          paymentMethod: {},
          shipping_name: '',
        },
      };

    case Redux.GET_CHECKOUT_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case Redux.SET_ORDER_DATA:
      return {
        ...state,
        error: null,
        order_data: action.payload,
      };

    case Redux.UPDATE_SALES_RULE:
      return {
        ...state,
        error: null,
        summary_order: {
          ...state.summary_order,
          ...action.payload.summary_order,
        },
        order_data: {
          ...state.order_data,
          shipping_method: action.payload.shipping_method,
        },
      };

    case Redux.GET_CHECKOUT_STATUS:
      return {
        ...state,
        error: null,
        checkout_status: action.payload,
      };

    case Redux.SET_LOADING_COUNTER:
      return {
        ...state,
        loadingCounter: action.value,
      };

    case Redux.CHECKOUT_LOADING:
      return {
        ...state,
        loading: action.value,
      };

    default:
      return state;
  }
}

export default checkout;
