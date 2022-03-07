import TYPES from './constants';

function getFlashSaleData() {
  return {
    type: TYPES.FLASHSALE.Saga.GET_FLASHSALE_DATA,
  };
}

function getFlashSaleProducts(id) {
  return {
    type: TYPES.FLASHSALE.Saga.GET_FLASHSALE_PRODUCTS,
    id: id,
  };
}

function getFlashSaleDummy() {
  return {
    type: TYPES.FLASHSALE.Saga.GET_FLASHSALE_DUMMY,
  };
}

export default {
  flashsale: {
    getFlashSaleData,
    getFlashSaleProducts,
    getFlashSaleDummy,
  },
};
