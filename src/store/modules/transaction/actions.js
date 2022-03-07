import TYPES from './constants';

function getTransactionList() {
  return {
    type: TYPES.TRANSACTION.Saga.GET_TRANSACTION_LIST,
  };
}

function getOrderDetail(orderId) {
  return { type: TYPES.TRANSACTION.Saga.GET_ORDER_DETAIL, orderId };
}

function setFilters(filters) {
  return {
    type: TYPES.TRANSACTION.Redux.SET_FILTERS,
    payload: { ...filters },
  };
}

export default {
  transaction: {
    getTransactionList,
    getOrderDetail,
    setFilters,
  },
};
