import TYPES from './constants';

function getListProductByCategory(idCategory) {
  return {
    type: TYPES.PRODUCT_BY_CATEGORY.Saga.GET_PRODUCT_BY_CATEGORY_LIST,
    idCategory,
  };
}

function getListProductSlider() {
  return {
    type: TYPES.PRODUCT_BY_CATEGORY.Saga.GET_LIST_PRODUCT_SLIDER,
  };
}

function getListProductPremiumSlider() {
  return {
    type: TYPES.PRODUCT_BY_CATEGORY.Saga.GET_LIST_PRODUCT_PREMIUM_SLIDER,
  };
}

function getListProductBySubCategory(idCategory) {
  return {
    type: TYPES.PRODUCT_BY_CATEGORY.Saga.GET_PRODUCT_BY_SUB_CATEGORY_LIST,
    idCategory,
  };
}

function resetProductByCategory(callback) {
  return {
    type: TYPES.PRODUCT_BY_CATEGORY.Redux.RESET,
    callback,
  };
}

function getMoreProductByCategory(id, page) {
  return {
    type: TYPES.PRODUCT_BY_CATEGORY.Saga.GET_MORE_PRODUCT_BY_CATEGORY_LIST,
    id,
    page,
  };
}

function getListProductCategorySlider() {
  return {
    type: TYPES.PRODUCT_BY_CATEGORY.Saga.GET_LIST_PRODUCT_CATEGORY_SLIDER,
  };
}

export default {
  productbyCategory: {
    getListProductByCategory,
    getMoreProductByCategory,
    getListProductBySubCategory,
    resetProductByCategory,
    getListProductPremiumSlider,
    getListProductSlider,
    getListProductCategorySlider,
  },
};
