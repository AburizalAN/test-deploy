import TYPES from './constants';

function reset() {
  return {
    type: TYPES.CHECKOUT.Redux.RESET,
  };
}

function getCheckoutData() {
  return {
    type: TYPES.CHECKOUT.Saga.GET_CHECKOUT,
  };
}

function updateQty(cartItem) {
  return {
    type: TYPES.CHECKOUT.Saga.UPDATE_QTY,
    cartItem,
  };
}

function updateSalesRule(salesRule) {
  return {
    type: TYPES.CHECKOUT.Saga.UPDATE_SALES_RULE,
    salesRule,
  };
}

function setOrderData(payload) {
  return {
    type: TYPES.CHECKOUT.Redux.SET_ORDER_DATA,
    payload,
  };
}

function getCheckoutStatus(id) {
  return {
    type: TYPES.CHECKOUT.Saga.GET_CHECKOUT_STATUS,
    id,
  };
}

function deleteCartItem(id) {
  return {
    type: TYPES.CHECKOUT.Saga.DELETE_CART_ITEM,
    id,
  };
}

function setError(error) {
  return {
    type: TYPES.CHECKOUT.Redux.GET_CHECKOUT_FAILURE,
    error,
  };
}

export default {
  checkout: {
    getCheckoutData,
    updateQty,
    setOrderData,
    updateSalesRule,
    getCheckoutStatus,
    deleteCartItem,
    setError,
    reset,
  },
};
