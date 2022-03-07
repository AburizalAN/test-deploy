import TYPES from './constants';

function getRecipeCategories() {
  return {
    type: TYPES.RECIPECATEGORIES.Saga.GET_RECIPE_CATEGORIES_LIST,
  };
}

export default {
  recipeCategories: {
    getRecipeCategories,
  },
};
