import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import sidebarReducer from "../features/sidebar/collapsed";

const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
});

export default rootReducer;
