async function claimProduct(data = {}) {
  try {
    const { product_id, qty } = data;

    const res = await fetch('/api/product-confirm', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (!res?.data) throw res;

    return res;
  } catch (err) {
    return err;
  }
}

export default {
  claimProduct,
};
