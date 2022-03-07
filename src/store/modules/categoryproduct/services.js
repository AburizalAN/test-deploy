async function getCategories() {
  const categoiresRes = await fetch(`/api/categories`);
  const categories = await categoiresRes.json();

  if (!categories) {
    return {
      notFound: true,
    };
  }

  return categories;
}

export default {
  getCategories,
};
