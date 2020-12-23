import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./reducers";

//TM
import { userInfoUploadReducer } from "./Reducers/TMreducers";
import logger from "redux-logger";

//EditName reducers import
import { userInfoDetailsUploadReducer } from "./Reducers/EditNamereducers";

//Review reducers import
import { reviewReducer } from "./Reducers/Reivewreducers";

import { getRefReducer } from "./Reducers/referal_coupon";

import { businessInfoUploadReducer } from "./Reducers/BusinessPhotoreducers";

//search function

import { searchReducer } from "./Reducers/Searchreducers";

import { getReceRefReducer } from "./Reducers/get_received_referal_user";

import { getReceRefBusinessReducer } from "./Reducers/get_received_referal_business";

import { getDisplayCouponReducer } from "./Reducers/couponfordisplay";

//Get user own review to business page

import { userGetOwnReviewFromBizReducer } from './Reducers/BisDisplayUserOwnReviewreducers'

//post biz details to business page
import { bizdetailsReducer } from './Reducers/UpdateBizDetailsreducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  authStore: authReducer,
  //TM
  userInfoUploadStore: userInfoUploadReducer,

  //Edit Details(text)
  userInfoUploadDetailsStore: userInfoDetailsUploadReducer,

  //review
  reviewStore: reviewReducer,

  // getrefcoupon
  getRefStore: getRefReducer,

  //Business photo upload
  businessInfoUploadStore: businessInfoUploadReducer,

  //For searchdata
  searchStore: searchReducer,

  //Get user own review to business page
  getUserOwnReviewToBizStore: userGetOwnReviewFromBizReducer,

  //for the received ref coupon my my coupon (USER)
  getReceRefStore: getReceRefReducer,

  //for the received ref coupon my my coupon (USER)
  getReceRefBusinessStore: getReceRefBusinessReducer,

  //for display coupon
  getDisplayCouponStore: getDisplayCouponReducer,

  // for posting biz details to backend
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);
