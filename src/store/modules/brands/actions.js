import TYPES from './constants';

function getBrands() {
  return {
    type: TYPES.BRANDS.Saga.GET_BRANDS,
  };
}

function getFeaturedBrands() {
  return {
    type: TYPES.BRANDS.Saga.GET_FEATURED_BRANDS,
  };
}

function getBrandProducts(id) {
  return {
    type: TYPES.BRANDS.Saga.GET_BRAND_PRODUCTS,
    id,
  };
}

function getSearchBrandList(keyword) {
  return {
    type: TYPES.BRANDS.Saga.GET_SEARCH_BRANDS_LIST,
    keyword,
  };
}

function setLoadingSearch(value) {
  return {
    type: TYPES.BRANDS.Redux.SET_SEARCH_BRANDS_LOADING,
    value,
  };
}

function resetBrandProducts() {
  return {
    type: TYPES.BRANDS.Redux.GET_BRAND_PRODUCTS_SUCCESS,
    value: [],
  };
}

function reset() {
  return {
    type: TYPES.BRANDS.Redux.RESET,
  };
}

function setBrandProps(brandProps) {
  localStorage.setItem('brandProps', JSON.stringify(brandProps));
}

export default {
  brands: {
    getBrands,
    getFeaturedBrands,
    getBrandProducts,
    getSearchBrandList,
    setLoadingSearch,
    reset,
    resetBrandProducts,
    setBrandProps,
  },
};
