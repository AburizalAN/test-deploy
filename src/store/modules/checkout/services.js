async function getCheckoutData() {
  try {
    const res = await fetch('/api/checkout');
    const resJSON = await res.json();

    if (!resJSON.data) throw resJSON;
    return resJSON;
  } catch (err) {
    return err;
  }
}

async function updateQty(cartItem) {
  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({
        cartItem,
      }),
    });
    const resJSON = await res.json();

    if (!resJSON.data) throw resJSON;
    return resJSON;
  } catch (err) {
    return err;
  }
}

async function getShippingMethods(payload) {
  try {
    const res = await fetch('/api/shipping-method', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    const resJSON = await res.json();

    if (!resJSON.data) throw resJSON;
    return resJSON;
  } catch (err) {
    return err;
  }
}

async function submitOrder(payload) {
  try {
    const res = await fetch('/api/place-order', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    const resJSON = await res.json();

    if (!resJSON.data) throw resJSON;
    return resJSON;
  } catch (err) {
    return err;
  }
}

async function updateSalesRule(payload) {
  try {
    const res = await fetch('/api/update-sales-rule', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    const resJSON = await res.json();

    if (!resJSON.data) throw resJSON;
    return resJSON;
  } catch (err) {
    return err;
  }
}

async function getCheckoutStatus(id) {
  try {
    console.log('id', id);
    const res = await fetch(`/api/checkout-status/${id}`);
    const resJSON = await res.json();
    if (!resJSON.data) throw resJSON;
    return resJSON;
  } catch (err) {
    return err;
  }
}

async function deleteCartItem(id) {
  try {
    const res = await fetch(`/api/delete-cart-item/${id}`, {
      method: 'DELETE',
    });
    const resJSON = await res.json();

    if (!resJSON.data) throw resJSON;
    return resJSON;
  } catch (err) {
    return err;
  }
}

export default {
  getCheckoutData,
  updateQty,
  getShippingMethods,
  submitOrder,
  updateSalesRule,
  getCheckoutStatus,
  deleteCartItem,
};
