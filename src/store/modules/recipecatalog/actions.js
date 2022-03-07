import TYPES from './constants';

function getListRecipeCatalog(catalog) {
  return {
    type: TYPES.RECIPE.Saga.GET_RECIPE_CATALOG_LIST,
    catalog,
  };
}

export default {
  recipeCatalog: {
    getListRecipeCatalog,
  },
};
