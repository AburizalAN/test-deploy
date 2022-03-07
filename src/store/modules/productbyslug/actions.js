import TYPES from './constants';

function getListProductBySlug(slug) {
  return {
    type: TYPES.PRODUCT_BY_SLUG.Saga.GET_PRODUCT_BY_SLUG_LIST,
    slug,
  };
}

function changeProductImage(index) {
  return {
    type: TYPES.PRODUCT_BY_SLUG.Redux.PRODUCT_BY_SLUG_ACTIVE,
    index,
  };
}

function changeStatePrice(priceProduct) {
  return {
    type: TYPES.PRODUCT_BY_SLUG.Redux.SET_PRODUCT_BY_SLUG_PRICE,
    priceProduct,
  };
}

export default {
  productbyslug: {
    getListProductBySlug,
    changeProductImage,
    changeStatePrice,
  },
};
