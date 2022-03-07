import TYPES from './constants';

function getRecipeSearched(keyword) {
  return {
    type: TYPES.RECIPESEARCH.Saga.GET_RECIPE_SEARCH_LIST,
    keyword,
  };
}

export default {
  recipeSearch: {
    getRecipeSearched,
  },
};
