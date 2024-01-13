import { combineReducers } from "@reduxjs/toolkit";

import { usersReducer } from "./users";
import { eventsReducer } from "./events";
import { cartReducer } from "./cart";

export const rootReducer = combineReducers({
  user: usersReducer,
  event: eventsReducer,
  cart: cartReducer,
});
