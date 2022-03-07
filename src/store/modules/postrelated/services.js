async function getPostRelated(id) {
  const link = `/api/article/related/${id}`;

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
  getPostRelated,
};
