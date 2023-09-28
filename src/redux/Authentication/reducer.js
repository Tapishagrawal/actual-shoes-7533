import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESSFUL } from "../actionType"

const initialState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    errorMessage: "",
    token: ""
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true }
        case LOGIN_SUCCESSFUL:
            return { ...state, isLoading: false, isError: false, isAuth: true, token: payload, errorMessage: "" }
        case LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true, errorMessage: payload }
        default:
            return state;
    }
}