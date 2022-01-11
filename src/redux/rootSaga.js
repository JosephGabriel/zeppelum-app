import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/userSagas";
import { eventSagas } from "./events/eventSagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(eventSagas)]);
}
