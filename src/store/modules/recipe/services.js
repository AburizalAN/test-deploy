async function getRecipe() {
  const recipeRes = await fetch(`/api/recipe/recipe`);
  const recipes = await recipeRes.json();

  if (!recipes) {
    return {
      notFound: true,
    };
  }

  return recipes;
}
async function getBahanUtama() {
  const recipeRes = await fetch(`/api/recipe/recipe-bahan-utama`);
  const recipes = await recipeRes.json();

  if (!recipes) {
    return {
      notFound: true,
    };
  }

  return recipes;
}
async function getDietary() {
  const recipeRes = await fetch(`/api/recipe/recipe-dietary`);
  const recipes = await recipeRes.json();

  if (!recipes) {
    return {
      notFound: true,
    };
  }

  return recipes;
}
async function getCaraMemasak() {
  const recipeRes = await fetch(`/api/recipe/recipe-cara-memasak`);
  const recipes = await recipeRes.json();

  if (!recipes) {
    return {
      notFound: true,
    };
  }

  return recipes;
}
async function getJenisHidangan() {
  const recipeRes = await fetch(`/api/recipe/recipe-jenis-hidangan`);
  const recipes = await recipeRes.json();

  if (!recipes) {
    return {
      notFound: true,
    };
  }

  return recipes;
}
async function getLatestRecipe() {
  const recipeRes = await fetch(`/api/recipe/recipe-latest`);
  const recipes = await recipeRes.json();

  if (!recipes) {
    return {
      notFound: true,
    };
  }

  return recipes;
}
async function getPopularRecipe() {
  const recipeRes = await fetch(`/api/recipe/recipe-popular`);
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
  getBahanUtama,
  getDietary,
  getCaraMemasak,
  getJenisHidangan,
  getLatestRecipe,
  getPopularRecipe,
};
