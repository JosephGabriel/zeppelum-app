import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "../user/userReducer";
import eventReducer from "../events/eventReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  event: eventReducer,
});
