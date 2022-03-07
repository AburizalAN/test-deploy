async function confirmPayment(data = {}) {
  try {
    const {
      order_number,
      destination,
      source,
      bank_account,
      amount,
      transfer_date,
      evidence,
    } = data;

    const res = await fetch('/api/payment-confirm', {
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
  confirmPayment,
};
