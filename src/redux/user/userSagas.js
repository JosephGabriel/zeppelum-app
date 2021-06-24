import { takeLatest, put, all, call } from "redux-saga/effects"

import { userTypes } from "./userTypes"
import { loginUserFailure, loginUserSuccess, registerUserSuccess, registerUserFailure } from "./userActions"
import { auth, firestore } from "../../firebase"

export function* registerUserAsync({ payload: { user } }) {
    try {
        const data = yield auth.createUserWithEmailAndPassword(user.email, user.password)

        const userAuth = yield firestore.collection("users").doc(data.user.uid).set({
            id: data.user.uid,
            name: user.name,
            email: user.email,
            lastName: user.lastName,
            createdAt: user.createdAt,
        })

        yield put(registerUserSuccess(userAuth))

    } catch (error) {
        yield put(registerUserFailure(error))
    }
}

export function* loginUserAsync({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        console.warn(user)
        yield put(loginUserSuccess(user))
    } catch (error) {
        console.warn(error)
        yield put(loginUserFailure(error))
    }
}

export function* onRegisterUserStart() {
    yield takeLatest(userTypes.REGISTER_USER_START, registerUserAsync)
}

export function* onLoginUserStart() {
    yield takeLatest(userTypes.LOGIN_USER_START, loginUserAsync)
}

export function* userSagas() {
    yield all([
        call(onRegisterUserStart),
        call(onLoginUserStart)
    ])
}