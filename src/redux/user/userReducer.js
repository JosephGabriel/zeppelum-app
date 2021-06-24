import { userTypes } from "./userTypes"

const initialState = {
    currentUser: null,
    loading: false,
    loadingRegister: false,
    error: null
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case userTypes.LOGIN_USER_START:
            return {
                ...state,
                loading: true
            }
        case userTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                currentUser: payload
            }
        case userTypes.LOGIN_USER_ERROR:
            return {
                ...state,
                loading: false,
                currentUser: null,
                error: payload
            }
        case userTypes.REGISTER_USER_START:
            return {
                ...state,
                currentUser: null,
                error: null,
                loadingRegister: true
            }
        case userTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                loadingRegister: false,
                error: null,
                currentUser: payload
            }
        case userTypes.REGISTER_USER_ERROR:
            return {
                ...state,
                loadingRegister: false,
                currentUser: null,
                error: payload
            }
        default:
            return state
    }
}

export default userReducer