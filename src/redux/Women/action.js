import axios from "axios"
import { GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS } from "../actionType"

export const getProducts = (params) => (dispatch) => {
    dispatch({ type: GET_REQUEST })
    axios.get(`https://platecrafters-moke-api.onrender.com/womenClothes`, params)
        .then((res) => {
            console.log("women",res.data)
            dispatch({ type: GET_REQUEST_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ type: GET_REQUEST_FAILURE })
        })
}