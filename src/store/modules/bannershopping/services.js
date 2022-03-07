async function getBannerShopping(id) {
  try {
    const res = await fetch(`/api/banner-shopping/${id}`);
    const resJSON = await res.json();

    if (!resJSON.data) throw resJSON;
    return resJSON;
  } catch (err) {
    return err;
  }
}

export default {
  getBannerShopping,
};
