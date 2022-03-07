async function getPopularPostAPI(category, subCategory = 'none') {
  const postRes = await fetch(`/api/article/popular`);
  const post = await postRes.json();

  if (!post) {
    return {
      notFound: true,
    };
  }

  return post;
}
export default {
  getPopularPostAPI,
};
