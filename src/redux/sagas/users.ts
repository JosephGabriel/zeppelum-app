import {
  AuthError,
  UserCredential,
  signOut,
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

import { addDoc, collection, doc, getDoc } from "firebase/firestore";

export function* logoutUserAsync() {
  try {
    yield signOut(auth);

    yield put(logOutUser(null));
  } catch (error: unknown) {
    yield put(logOutError(error as AuthError));
  }
}

export function* registerUserAsync({ payload: { user } }) {
  try {
    const data: UserCredential = yield createUserWithEmailAndPassword(
      auth,
      user.email.trim(),
      user.password.trim()
    );

    const userRef = yield addDoc(collection(firestore, "/users"), {
      id: data.user.uid,
      name: user.name.trim(),
      email: user.email.trim(),
      lastName: user.lastName.trim(),
      createdAt: user.createdAt,
      type: "user",
    });

    const snapshot = yield getDoc(userRef);

    const userAuth = { id: snapshot.id, ...snapshot.data() };

    yield put(loginUserSuccess(userAuth));
  } catch (error: unknown) {
    console.warn(error);
    yield put(loginUserError(error as AuthError));
  }
}

export function* loginUserAsync({ payload: { email, password } }) {
  try {
    const { user }: UserCredential = yield signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const docRef = yield doc(firestore, "users", user.uid);

    const snapshot = yield getDoc(docRef);

    const userAuth = { ...snapshot.data() };

    console.warn(userAuth);
    // yield put(loginUserSuccess(userAuth));
  } catch (error) {
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
