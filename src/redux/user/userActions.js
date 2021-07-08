import { userTypes } from "./userTypes";

export const loginUserStart = (emailPassword) => ({
  type: userTypes.LOGIN_USER_START,
  payload: emailPassword,
});

export const loginUserSuccess = (user) => ({
  type: userTypes.LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserFailure = (error) => ({
  type: userTypes.LOGIN_USER_ERROR,
  payload: error,
});

export const registerUserStart = (user) => ({
  type: userTypes.REGISTER_USER_START,
  payload: user,
});

export const registerUserSuccess = (user) => ({
  type: userTypes.REGISTER_USER_SUCCESS,
  payload: user,
});

export const registerUserFailure = (error) => ({
  type: userTypes.REGISTER_USER_ERROR,
  payload: error,
});

export const logoutUserStart = () => ({
  type: userTypes.LOGOUT_USER_START,
});

export const logoutUserSuccess = () => ({
  type: userTypes.LOGOUT_USER_SUCCESS,
});

export const logoutUserFailure = (error) => ({
  type: userTypes.LOGOUT_USER_ERROR,
  payload: error,
});
