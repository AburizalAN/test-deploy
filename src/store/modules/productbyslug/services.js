async function getProduct(param) {
  const categoiresRes = await fetch(`/api/product-detail/` + param.slug);
  const categories = await categoiresRes.json();

  if (!categories) {
    return {
      notFound: true,
    };
  }

  return categories;
}

export default {
  getProduct,
};
