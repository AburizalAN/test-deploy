import TYPES from './constants';

function getListProductDietByLifestyle() {
  return {
    type: TYPES.PRODUCT_DIET.Saga.GET_PRODUCT_DIET_BY_LIFESTYLE,
  };
}

export default {
  productdietByLifeStyle: {
    getListProductDietByLifestyle,
  },
};
