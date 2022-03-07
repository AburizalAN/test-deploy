import { combineReducers } from 'redux';
import alertReducer from './modules/alert/reducers';
import postsReducer from './modules/posts/reducers';
import postsSearchReducer from './modules/postsearch/reducers';
import postsRelatedReducer from './modules/postrelated/reducers';
import postsCategoriesReducer from './modules/postscategories/reducers';
import postPopularReducer from './modules/postpopular/reducers';
import postBeautyReducer from './modules/postbeauty/reducers';
import recipeReducer from './modules/recipe/reducers';
import recipeCategoriesReducer from './modules/recipecategories/reducers';
import recipeSearchReducer from './modules/recipesearch/reducers';
import recipeTipsAndTrickReducer from './modules/recipeTrick/reducers';
import recipeRelatedReducer from './modules/reciperelated/reducers';
import recipeCatalogReducer from './modules/recipecatalog/reducers';
import youtubeReducer from './modules/youtube/reducers';
import instagramReducer from './modules/instagram/reducers';
import signupReducer from './modules/signup/reducers';
import tiktokReducer from './modules/tiktok/reducers';
import loginReducer from './modules/login/reducers';
import referalReducer from './modules/referal/reducers';
import meReducer from './modules/me/reducers';
import shopByLifestyleReducer from './modules/shopbylifestyle/reducers';
import producCategoryReducer from './modules/categoryproduct/reducers';
import productbyCategory from './modules/productbycategory/reducers';
import checkoutReducer from './modules/checkout/reducers';
import confirmPaymentReducer from './modules/confirmpayment/reducers';
import productbySlug from './modules/productbyslug/reducers';
import addToCart from './modules/addtocart/reducers';
import transactionReducer from './modules/transaction/reducers';
import orderDetail from './modules/orderdetail/reducers';
import searchProduct from './modules/searchproduct/reducers';
import bannershoppingReducer from './modules/bannershopping/reducers';
import info from './modules/info/reducers';
import claimProductReducer from './modules/claimproduct/reducers';
import claimVoucherReducer from './modules/claimvoucher/reducers';
import flashsaleReducer from './modules/flashsale/reducers';
import brandsReducer from './modules/brands/reducers';
import forgetPasswordReducer from './modules/forgetpassword/reducers';

const rootReducer = combineReducers({
  alert: alertReducer,
  posts: postsReducer,
  postsSearch: postsSearchReducer,
  postsRelated: postsRelatedReducer,
  postsCategory: postsCategoriesReducer,
  postPopular: postPopularReducer,
  postBeauty: postBeautyReducer,
  recipe: recipeReducer,
  recipeCategories: recipeCategoriesReducer,
  recipeSearch: recipeSearchReducer,
  recipeTipsAndTrick: recipeTipsAndTrickReducer,
  recipeRelated: recipeRelatedReducer,
  recipeCatalog: recipeCatalogReducer,
  youtube: youtubeReducer,
  instagram: instagramReducer,
  signup: signupReducer,
  tiktok: tiktokReducer,
  login: loginReducer,
  referal: referalReducer,
  shopByLifestyle: shopByLifestyleReducer,
  me: meReducer,
  productCategory: producCategoryReducer,
  productbyCategory: productbyCategory,
  checkout: checkoutReducer,
  confirm: confirmPaymentReducer,
  productbySlug: productbySlug,
  addtocart: addToCart,
  transaction: transactionReducer,
  orderDetail: orderDetail,
  searchProduct: searchProduct,
  bannershop: bannershoppingReducer,
  info: info,
  claimproduct: claimProductReducer,
  claimvoucher: claimVoucherReducer,
  flashsale: flashsaleReducer,
  brands: brandsReducer,
  forgetPassword: forgetPasswordReducer,
});

export default rootReducer;
