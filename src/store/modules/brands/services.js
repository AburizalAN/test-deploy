async function getBrands() {
  try {
    const res = await fetch('/api/brands');
    const resJSON = await res.json();

    if (!resJSON.data) throw resJSON;
    return resJSON;
  } catch (err) {
    return err;
  }
}

async function getFeaturedBrands() {
  try {
    const res = await fetch('/api/brands/featured');
    const resJSON = await res.json();

    if (!resJSON.data) throw resJSON;
    return resJSON;
  } catch (err) {
    return err;
  }
}

async function getBrandProducts(id) {
  try {
    const res = await fetch(`/api/brands/${id}`);
    const resJSON = await res.json();

    if (!resJSON.data) throw resJSON;
    return resJSON;
  } catch (err) {
    return err;
  }
}

async function getSearchBrandList(keyword) {
  try {
    const res = await fetch(`/api/brands/search?keyword=${keyword}`);
    const resJSON = await res.json();

    if (!resJSON.data) throw resJSON;
    return resJSON;
  } catch (err) {
    return err;
  }
}

export default {
  getBrands,
  getFeaturedBrands,
  getBrandProducts,
  getSearchBrandList,
};
