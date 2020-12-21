import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./reducers";

//TM
import { userInfoUploadReducer } from './Reducers/TMreducers'
import logger from "redux-logger";

//EditName reducers import
import { userInfoDetailsUploadReducer } from './Reducers/EditNamereducers'

//Review reducers import 
import { reviewReducer } from './Reducers/Reivewreducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  authStore: authReducer,
  //TM
  userInfoUploadStore: userInfoUploadReducer,

  //Edit Details(text)
  userInfoUploadDetailsStore: userInfoDetailsUploadReducer,

  //review
  reviewStore: reviewReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);
