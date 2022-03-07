async function getSearchedRecipe(keyword) {
  const link = `/api/recipe/search/${keyword}`;

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
  getSearchedRecipe,
};
