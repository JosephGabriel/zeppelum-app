import { takeLatest, put, all, call } from "redux-saga/effects"

import { userTypes } from "./userTypes"
import { loginUserFailure, loginUserSuccess } from "./userActions"
import { auth } from "../../firebase"

export function* loginUserAsync({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield put(loginUserSuccess(user))
    } catch (error) {
        console.warn(error)
        yield put(loginUserFailure(error))
    }
}

export function* onLoginUserStart() {
    yield takeLatest(userTypes.LOGIN_USER_START, loginUserAsync)
}

export function* userSagas() {
    yield all([
        call(onLoginUserStart)
    ])
}