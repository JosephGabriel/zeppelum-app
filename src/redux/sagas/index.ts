import { all, call } from "redux-saga/effects";

import { userSagas } from "./users";
import { eventSagas } from "./events";

export function* rootSaga() {
  yield all([call(userSagas), call(eventSagas)]);
}
