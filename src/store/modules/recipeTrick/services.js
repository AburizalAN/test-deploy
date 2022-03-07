async function getRecipeTipsAndTrick() {
  const link = `/api/recipe/recipe-tips-and-trick`;

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
  getRecipeTipsAndTrick,
};
