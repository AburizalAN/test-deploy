async function getFlashSaleData() {
  try {
    const res = await fetch('/api/flashsale');
    const resJSON = await res.json();

    if (!resJSON.data) throw resJSON;
    return resJSON;
  } catch (err) {
    return err;
  }
}

async function getFlashSaleProducts(id) {
  try {
    const res = await fetch(`/api/flashsale/${id}`);
    const resJSON = await res.json();

    if (!resJSON.data) throw resJSON;
    return resJSON;
  } catch (err) {
    return err;
  }
}

export default {
  getFlashSaleData,
  getFlashSaleProducts,
};
