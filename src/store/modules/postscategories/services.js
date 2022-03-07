async function getCategoryPostAPI(category) {
  let link = '';

  if (category == 'beauty') {
    link = `/api/article/beauty?page=2`;
  } else if (category == 'lifestyle') {
    link = `/api/article/lifestyle`;
  } else if (category == 'inspirasi-kawan-mula') {
    link = `/api/article/inspirasi-kawan-mula`;
  } else {
    link = `/api/article/posts`;
  }

  const postRes = await fetch(link);
  const post = await postRes.json();

  if (!post) {
    return {
      notFound: true,
    };
  }

  return post;
}
export default {
  getCategoryPostAPI,
};
