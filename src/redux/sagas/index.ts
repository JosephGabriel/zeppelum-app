import { all, call } from "redux-saga/effects";

import { userSagas } from "./users";
import { eventSagas } from "../events/eventSagas";

export function* rootSaga() {
  yield all([call(userSagas), call(eventSagas)]);
}
