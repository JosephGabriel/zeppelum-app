import { userTypes } from "./userTypes"

export const loginUserStart = (emailPassword) => ({
    type: userTypes.LOGIN_USER_START,
    payload: emailPassword
})

export const loginUserSuccess = (user) => ({
    type: userTypes.LOGIN_USER_SUCCESS,
    payload: user
})

export const loginUserFailure = (error) => ({
    type: userTypes.LOGIN_USER_ERROR,
    payload: error
})