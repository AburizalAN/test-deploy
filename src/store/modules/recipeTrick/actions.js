import TYPES from './constants';

function getTipsAndTrick() {
  return {
    type: TYPES.RECIPETRICK.Saga.GET_RECIPE_TIPS_AND_TRICK_LIST,
  };
}

export default {
  recipeTipsAndTrick: {
    getTipsAndTrick,
  },
};
