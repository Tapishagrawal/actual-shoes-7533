import { DELETE_PROD_SUCC, GET_PROD_FAIL, GET_PROD_REQUEST, GET_PROD_SUCC, PATCH_PROD_SUCC, POST_PROD_SUCC } from "./actiosTypes"

const initialData= {
    isLoading: false,
    isError: false,
    adminProd: []
}

export const reducer = (state = initialData, { type, payload }) => {
    
    switch (type) {

        case GET_PROD_REQUEST: {
            return { ...state, isLoading: true }
        }

        case GET_PROD_FAIL: {
            return { ...state, isLoading: false, isError: true }
        }

        case GET_PROD_SUCC: {
            return { ...state, isLoading: false, isError: false, adminProd: payload }

        }
        case POST_PROD_SUCC: {
            return { ...state, isLoading: false, isError: false }

        }
        case PATCH_PROD_SUCC: {
            return { ...state, isLoading: false, isError: false, }

        }

        // case DELETE_PROD_SUCC: {

        //     return { ...state, adminProd: state.adminProd.filter((ele) => ele.id !== payload) }

        // }
        default:
            return state
    }
}