async function getRecipe(category) {
  let link = '';

  if (category == 'masakan-internasional') {
    link = `/api/recipe/categories/174`;
  } else if (category == 'masakan-indonesia') {
    link = `/api/recipe/categories/175`;
  } else if (category == 'sarapan-sehat') {
    link = `/api/recipe/categories/172`;
  } else if (category == 'plant-based') {
    link = `/api/recipe/categories/173`;
  } else if (category == 'cemilan-sehat') {
    link = `/api/recipe/categories/176`;
  } else if (category == 'resep-terpopuler') {
    link = `/api/recipe/recipe-popular`;
  } else if (category == 'resep-terbaru') {
    link = `/api/recipe/recipe-latest`;
  } else {
    link = `/api/recipe/recipe`;
  }

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
  getRecipe,
};
