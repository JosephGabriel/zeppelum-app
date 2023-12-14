import {
  AuthError,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { takeLatest, put, all, call } from "redux-saga/effects";

import { auth, firestore } from "../../firebase";

import {
  loginUserError,
  loginUserStart,
  loginUserSuccess,
  logOutUser,
  logOutError,
  registerUserStart,
} from "../reducers/users";
import { addDoc, collection, getDocs } from "firebase/firestore";

export function* logoutUserAsync() {
  try {
    yield auth.signOut();

    yield put(logOutUser(null));
  } catch (error: unknown) {
    yield put(logOutError(error as AuthError));
  }
}

export function* registerUserAsync({ payload: { user } }) {
  try {
    const data = yield createUserWithEmailAndPassword(
      auth,
      user.email.trim(),
      user.password.trim()
    );

    const userRef = yield addDoc(
      collection(firestore, `/users/${data.user.uid}`),
      {
        id: data.user.uid,
        name: user.name.trim(),
        email: user.email.trim(),
        lastName: user.lastName.trim(),
        createdAt: user.createdAt,
        type: "user",
      }
    );

    const snapshot = yield userRef.get();

    const userAuth = { id: snapshot.id, ...snapshot.data() };

    yield put(loginUserSuccess(userAuth));
  } catch (error: unknown) {
    yield put(loginUserError(error as AuthError));
  }
}

export function* loginUserAsync({ payload: { email, password } }) {
  try {
    const { user } = yield signInWithEmailAndPassword(auth, email, password);

    const userRef = yield addDoc(
      collection(firestore, `/users/${user.uid}`),
      user
    );

    const snapshot = yield userRef.get();

    const userAuth = { ...snapshot.data() };

    yield put(loginUserSuccess(userAuth));
  } catch (error) {
    console.warn(error);
    yield put(loginUserError(error));
  }
}

export function* onLogoutUserStart() {
  yield takeLatest(logOutUser, logoutUserAsync);
}

export function* onRegisterUserStart() {
  yield takeLatest(registerUserStart, registerUserAsync);
}

export function* onLoginUserStart() {
  yield takeLatest(loginUserStart, loginUserAsync);
}

export function* userSagas() {
  yield all([
    call(onRegisterUserStart),
    call(onLoginUserStart),
    call(onLogoutUserStart),
  ]);
}
