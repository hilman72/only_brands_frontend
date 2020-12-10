import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import { linkReducer } from "./Links/reducers";
import { authReducer } from "./Auth/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  linkStore: linkReducer,
  authStore: authReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
