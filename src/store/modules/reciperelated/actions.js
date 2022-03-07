import TYPES from './constants';

function getListRecipeRelated(id) {
  return {
    type: TYPES.RECIPERELATED.Saga.GET_RECIPE_RELATED_LIST,
    id,
  };
}

export default {
  recipeRelated: {
    getListRecipeRelated,
  },
};
