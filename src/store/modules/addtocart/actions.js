import TYPES from './constants';

function postDetailProduct(body, callback) {
  return {
    type: TYPES.ADDTOCART.Saga.GET_ADDTOCART_LIST,
    body,
    callback,
  };
}

function resetDetailProduct() {
  return {
    type: TYPES.ADDTOCART.Saga.GET_ADDTOCART_RESET,
  };
}

export default {
  addtocart: {
    postDetailProduct,
    resetDetailProduct,
  },
};
