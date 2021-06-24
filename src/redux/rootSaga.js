import { all, call } from "redux-saga/effects"

import { onLoginUserStart } from "./user/userSagas"

export default function* rootSaga() {
    yield all([
        call(onLoginUserStart)
    ])
}