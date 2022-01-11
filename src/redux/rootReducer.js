import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import eventReducer from "./events/eventReducer";

const rootReducer = combineReducers({
  user: userReducer,
  events: eventReducer,
});

export default rootReducer;
