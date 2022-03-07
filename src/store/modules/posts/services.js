async function getPost() {
  const postRes = await fetch(`/api/article/posts`);
  const posts = await postRes.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return posts;
}
async function getPostDetail(id) {
  const postRes = await fetch(`/api/article/detail/${id}`);
  const posts = await postRes.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return posts;
}
async function getPostTemanMula() {
  const postRes = await fetch(`/api/article/teman-mula`);
  const posts = await postRes.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return posts;
}

export default {
  getPost,
  getPostDetail,
  getPostTemanMula,
};
