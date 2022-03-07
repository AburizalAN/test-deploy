async function getSearchedPost(keyword) {
  const link = `/api/article/search/${keyword}`;

  const searchedres = await fetch(link);
  const searched = await searchedres.json();

  if (!searched) {
    return {
      notFound: true,
    };
  }
  return searched;
}
export default {
  getSearchedPost,
};
