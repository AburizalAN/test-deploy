async function submitCoupon(code) {
  try {
    const res = await fetch(`/api/coupon?code=${code}`, {
      method: 'PUT',
    });
    const resJSON = await res.json();

    if (!resJSON.data) throw resJSON;
    return resJSON;
  } catch (err) {
    console.log('resJSON', err);
    return err;
  }
}

export default {
  submitCoupon,
};
