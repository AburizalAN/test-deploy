async function getRecipeCategories() {
  let link = `/api/recipe/recipe-categories`;
  const recipeRes = await fetch(link);
  const recipes = await recipeRes.json();

  if (!recipes) {
    return {
      notFound: true,
    };
  }

  return recipes;
}
export default {
  getRecipeCategories,
};
