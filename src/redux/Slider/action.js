import axios from "axios"
import { GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS } from "../actionType"

export const getSliderData = async (dispatch) => {
    try {
        dispatch({type:GET_REQUEST})
        let res = await axios(`https://platecrafters-moke-api.onrender.com/allProducts`)
        dispatch({type:GET_REQUEST_SUCCESS, payload:res.data})
    } catch (error) {
        dispatch({type:GET_REQUEST_FAILURE})
    }
}