import { GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS } from "../actionType"

const initialState = {
    isLoading: false,
    products: [],
    isError: false,
}
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_REQUEST: {
            return {...state,isLoading:true}
        }
        case GET_REQUEST_FAILURE: {
            return {...state, isLoading:false,isError:true}
        }
        case GET_REQUEST_SUCCESS: {
            return {...state, isLoading:false,isError:false,products:payload}
        }
        default: {
            return state
        }
    }
}