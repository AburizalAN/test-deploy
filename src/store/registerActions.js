import alertActions from './modules/alert/actions';
import postsActions from './modules/posts/actions';
import postsSearchedActions from './modules/postsearch/actions';
import postsRelatedActions from './modules/postrelated/actions';
import postsCategoryActions from './modules/postscategories/actions';
import postsPopularActions from './modules/postpopular/actions';
import postsBeautyActions from './modules/postbeauty/actions';
import recipesActions from './modules/recipe/actions';
import recipesCategoriesActions from './modules/recipecategories/actions';
import recipesSearchActions from './modules/recipesearch/actions';
import recipesTipsAndTrick from './modules/recipeTrick/actions';
import recipesRelatedActions from './modules/reciperelated/actions';
import recipeCatalogActions from './modules/recipecatalog/actions';
import youtubeActions from './modules/youtube/actions';
import shopbylifestyle from './modules/shopbylifestyle/actions';
import instagramActions from './modules/instagram/actions';
import signupActions from './modules/signup/actions';
import tiktokActions from './modules/tiktok/actions';
import loginActions from './modules/login/actions';
import referalActions from './modules/referal/actions';
import meActions from './modules/me/actions';
import productCategoryActions from './modules/categoryproduct/actions';
import productbyCategory from './modules/productbycategory/actions';
import checkoutActions from './modules/checkout/actions';
import confirmActions from './modules/confirmpayment/actions';
import productbySlug from './modules/productbyslug/actions';
import addToCart from './modules/addtocart/actions';
import transactionActions from './modules/transaction/actions';
import orderDetail from './modules/orderdetail/actions';
import searchProduct from './modules/searchproduct/actions';
import bannershoppingActions from './modules/bannershopping/actions';
import info from './modules/info/actions';
import claimProduct from './modules/claimproduct/actions';
import claimVoucher from './modules/claimvoucher/actions';
import flashsale from './modules/flashsale/actions';
import brands from './modules/brands/actions';
import forgetPassword from './modules/forgetpassword/actions';

export default {
  ...alertActions,
  ...postsActions,
  ...postsSearchedActions,
  ...postsRelatedActions,
  ...postsCategoryActions,
  ...postsPopularActions,
  ...postsBeautyActions,
  ...recipesActions,
  ...recipesCategoriesActions,
  ...recipesSearchActions,
  ...recipesTipsAndTrick,
  ...recipesRelatedActions,
  ...recipeCatalogActions,
  ...youtubeActions,
  ...instagramActions,
  ...signupActions,
  ...tiktokActions,
  ...loginActions,
  ...referalActions,
  ...meActions,
  ...productCategoryActions,
  ...productbyCategory,
  ...checkoutActions,
  ...confirmActions,
  ...productbySlug,
  ...addToCart,
  ...transactionActions,
  ...orderDetail,
  ...searchProduct,
  ...bannershoppingActions,
  ...info,
  ...claimProduct,
  ...claimVoucher,
  ...flashsale,
  ...brands,
  ...forgetPassword,
  ...shopbylifestyle,
};
