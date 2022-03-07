// react
import { useEffect } from 'react';
import ACTIONS from 'store/registerActions';
import { useSelector, useDispatch } from 'react-redux';

// custom
import PostLayout from 'components/ui/article/layout';
import BannerSlider from 'components/ui/article/homepage/bannerSlider';
import Menu from 'components/ui/article/homepage/menu';
import TipsHidupSehat from 'components/ui/article/homepage/tipsHidupSehat';
import List from 'components/ui/article/homepage/list';
// import ColoredSection from 'components/ui/article/homepage/coloredSection';
import RecipeHeaderSection from 'components/ui/recipe/homepage/recipe-header-section';
import Educational from 'components/ui/article/homepage/educational';
// import KawanMitraMula from 'components/ui/article/homepage/kawanMitraMula';

const Article = () => {
  const postsState = useSelector((state) => state.posts);
  const postPopularState = useSelector((state) => state.postPopular);
  const postBeautyState = useSelector((state) => state.postBeauty);
  const postCategoryState = useSelector((state) => state.postsCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACTIONS.posts.getListPost());
    dispatch(ACTIONS.postPopular.getPopularPost());
    dispatch(ACTIONS.postBeauty.getBeautyPost());
    dispatch(ACTIONS.postCategory.getCategoryPost('lifestyle'));
  }, []);
  // const posts = postsState.listPost;
  const popularPost = postPopularState.listPopularPost;
  const beautyPost = postBeautyState.listBeautyPost;
  const loadingPopularPost = postPopularState.loading;
  const loadingBeautyPost = postBeautyState.loading;
  const postsLifestyle = postCategoryState.listCategoryPost;
  const postsLifestyleLoading = postCategoryState.loading;
  // const loadingPost = postsState.loading;

  return (
    <PostLayout
      placeholder="cari artikel disini..."
      modules="artikel"
      search={true}
      bookmark={true}
    >
      <BannerSlider articles={popularPost} loading={loadingPopularPost} />
      <Menu />
      <TipsHidupSehat items={postsLifestyle} loading={postsLifestyleLoading} />
      <List articles={postsLifestyle} loading={postsLifestyleLoading} />
      {/* <ColoredSection article={data2} /> */}
      <RecipeHeaderSection title="Beauty" href="/artikel/beauty" />
      <Educational articles={beautyPost} loading={loadingBeautyPost} />
      {/* <KawanMitraMula articles={posts} /> */}
    </PostLayout>
  );
};

export default Article;
