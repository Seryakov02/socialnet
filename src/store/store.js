import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import dialogReducer from "./reducers/dialogReducer";
import userReducer from "./reducers/userReducer";
import appReducer from "./reducers/appReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  usersPage: userReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleWare))
);

window.store = store;

export default store;
