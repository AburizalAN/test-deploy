async function getCategories(id) {
  const categoiresRes = await fetch(`/api/product-category/` + id);
  const categories = await categoiresRes.json();

  if (!categories) {
    return {
      notFound: true,
    };
  }

  return categories;
}

async function getProductSlider() {
  try {
    const res = await fetch(`/api/product-slider`);
    const resJSON = await res.json();

    if (!resJSON?.data) throw resJSON;
    return resJSON;
  } catch (err) {
    return err;
  }
}

async function getProductPremiumSlider() {
  return await fetch('/api/product-premium-slider').then((res) => res.json());
}

async function getMoreProduct(params) {
  try {
    const paramid = parseInt(params.id);
    const parampage = parseInt(params.page);
    const res = await fetch(
      `/api/product-category/${paramid}?page=${parampage}`
    ).then((res) => res.json());

    if (!res?.data) throw res;

    return res;
  } catch (err) {
    return err;
  }
}

async function getProductCategorySlider() {
  try {
    const res = await fetch(`/api/product-category/slider`);
    const resJSON = await res.json();

    if (!resJSON?.data) throw resJSON;
    return resJSON;
  } catch (err) {
    return err;
  }
}

export default {
  getCategories,
  getMoreProduct,
  getProductSlider,
  getProductCategorySlider,
  getProductPremiumSlider,
};
