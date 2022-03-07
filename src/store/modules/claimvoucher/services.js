async function claimVoucher(data = {}) {
  try {
    const { voucher_id, qty } = data;

    const res = await fetch('/api/voucher-confirm', {
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
  claimVoucher,
};
