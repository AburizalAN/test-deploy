async function getRecipeRelated(id) {
  const link = `/api/recipe/related/${id}`;

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
  getRecipeRelated,
};
