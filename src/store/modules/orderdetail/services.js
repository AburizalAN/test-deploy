async function getDetail(param) {
  const categoiresRes = await fetch(`/api/order/` + param.id);
  const categories = await categoiresRes.json();
  console.log('ids', param.id);

  if (!categories) {
    return {
      notFound: true,
    };
  }

  return categories;
}

export default {
  getDetail,
};
