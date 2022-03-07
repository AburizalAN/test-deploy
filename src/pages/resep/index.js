// react
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ACTIONS from 'store/registerActions';

// custom
import Layout from 'components/ui/article/layout';
import Banner from 'components/ui/recipe/homepage/banner';
import Popular from 'components/ui/recipe/homepage/popular';
import New from 'components/ui/recipe/homepage/new';
// import RecipeRecommend from 'components/ui/recipe/homepage/recipe-recommend';

const Resep = () => {
  const recipeState = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACTIONS.recipe.getListRecipe());
    dispatch(ACTIONS.recipe.getLatestRecipe());
    dispatch(ACTIONS.recipe.getPopularRecipe());
  }, []);
  // const recipeList = recipeState.listRecipes;
  const latestList = recipeState.listLatestRecipe;
  const popularList = recipeState.listPopularRecipe;

  return (
    <Layout
      placeholder="Mau masak apa sekarang?"
      modules="resep"
      bookmark
      search={true}
    >
      <Banner />
      <Popular items={popularList} />
      <New items={latestList} />
      {/* <RecipeRecommend /> */}
    </Layout>
  );
};
export default Resep;
