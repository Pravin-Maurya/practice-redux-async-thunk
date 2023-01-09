import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import loginReducer from "./features/loginSlice";

const reducer = combineReducers({
  // here we will be adding reducers
  login: loginReducer,
});
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer,
  devTools: true,
  customizedMiddleware,
});

export default store;
