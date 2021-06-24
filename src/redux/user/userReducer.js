import { userTypes } from "./userTypes"

const initialState = {
    currentUser: null,
    loading: false,
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
        default:
            return state
    }
}

export default userReducer