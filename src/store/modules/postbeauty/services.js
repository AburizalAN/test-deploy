async function getBeautyPostAPI(category, subCategory = 'none') {
  const postRes = await fetch(`/api/article/beauty`);
  const post = await postRes.json();

  if (!post) {
    return {
      notFound: true,
    };
  }

  return post;
}
export default {
  getBeautyPostAPI,
};
