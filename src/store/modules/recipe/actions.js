import TYPES from './constants';

function getListRecipe() {
  return {
    type: TYPES.RECIPE.Saga.GET_RECIPE_LIST,
  };
}
function getListSubcategory(cat) {
  if (cat == 'bahan-utama')
    return {
      type: TYPES.RECIPE.Saga.GET_RECIPE_BAHAN_UTAMA_LIST,
    };
  else if (cat == 'dietary') {
    return {
      type: TYPES.RECIPE.Saga.GET_RECIPE_DIETARY_LIST,
    };
  } else if (cat == 'cara-memasak') {
    return {
      type: TYPES.RECIPE.Saga.GET_RECIPE_CARA_MEMASAK_LIST,
    };
  } else if (cat == 'jenis-hidangan') {
    return {
      type: TYPES.RECIPE.Saga.GET_RECIPE_JENIS_HIDANGAN_LIST,
    };
  } else {
    return {
      type: TYPES.RECIPE.Saga.GET_RECIPE_OTHER,
    };
  }
}

function getLatestRecipe() {
  return {
    type: TYPES.RECIPE.Saga.GET_LATEST_RECIPE_LIST,
  };
}

function getPopularRecipe() {
  return {
    type: TYPES.RECIPE.Saga.GET_POPULAR_RECIPE_LIST,
  };
}

export default {
  recipe: {
    getListRecipe,
    getListSubcategory,
    getLatestRecipe,
    getPopularRecipe,
  },
};
