import TYPES from './constants';

function getListProductCategories() {
  return {
    type: TYPES.PRODUCT_CATEGORIES.Saga.GET_PRODUCT_CATEGORIES_LIST,
  };
}

export default {
  productCategories: {
    getListProductCategories,
  },
};
