import { all } from 'redux-saga/effects';

import post from './modules/posts/sagas';
import postSearched from './modules/postsearch/sagas';
import postRelated from './modules/postrelated/sagas';
import postsCategories from './modules/postscategories/sagas';
import postPopular from './modules/postpopular/sagas';
import postBeauty from './modules/postbeauty/sagas';
import recipe from './modules/recipe/sagas';
import recipeCategories from './modules/recipecategories/sagas';
import recipeSearched from './modules/recipesearch/sagas';
import recipeTipsAndTrick from './modules/recipeTrick/sagas';
import recipeRelated from './modules/reciperelated/sagas';
import recipeCatalog from './modules/recipecatalog/sagas';
import youtube from './modules/youtube/sagas';
import instagram from './modules/instagram/sagas';
import signup from './modules/signup/sagas';
import tiktok from './modules/tiktok/sagas';
import login from './modules/login/sagas';
import referal from './modules/referal/sagas';
import me from './modules/me/sagas';
import productCategory from './modules/categoryproduct/sagas';
import productbyCategory from './modules/productbycategory/sagas';
import checkout from './modules/checkout/sagas';
import confirmPayment from './modules/confirmpayment/sagas';
import shopbylifestyle from './modules/shopbylifestyle/sagas';
import productbySlug from './modules/productbyslug/sagas';
import addToCart from './modules/addtocart/sagas';
import transaction from './modules/transaction/sagas';
import orderDetail from './modules/orderdetail/sagas';
import searchProduct from './modules/searchproduct/sagas';
import bannerShopping from './modules/bannershopping/sagas';
import info from './modules/info/sagas';
import claimProduct from './modules/claimproduct/sagas';
import claimVoucher from './modules/claimvoucher/sagas';
import flashsale from './modules/flashsale/sagas';
import brands from './modules/brands/sagas';
import forgetPassword from './modules/forgetpassword/sagas';

function* rootSaga() {
  yield all([
    post(),
    postSearched(),
    postRelated(),
    postsCategories(),
    postPopular(),
    postBeauty(),
    recipe(),
    recipeCategories(),
    recipeSearched(),
    recipeTipsAndTrick(),
    recipeRelated(),
    recipeCatalog(),
    youtube(),
    instagram(),
    signup(),
    tiktok(),
    login(),
    referal(),
    me(),
    productCategory(),
    productbyCategory(),
    checkout(),
    confirmPayment(),
    productbySlug(),
    addToCart(),
    transaction(),
    orderDetail(),
    searchProduct(),
    bannerShopping(),
    searchProduct(),
    info(),
    claimProduct(),
    claimVoucher(),
    flashsale(),
    brands(),
    forgetPassword(),
    shopbylifestyle(),
    // ...otherSaga
  ]);
}

export default rootSaga;
