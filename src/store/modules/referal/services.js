async function getReferalCode() {
  const referalRes = await fetch(`/api/referal`);
  const referal = await referalRes.json();

  if (!referal) {
    return {
      notFound: true,
    };
  }

  return referal;
}

export default {
  getReferalCode,
};
