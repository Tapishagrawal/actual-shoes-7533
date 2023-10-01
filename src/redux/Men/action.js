import axios from "axios"
import { GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS, TOGGLE_WISHLIST_SUCCESS } from "../actionType"

export const getProducts = (params) => (dispatch) => {
    dispatch({ type: GET_REQUEST })
    axios.get(`https://platecrafters-moke-api.onrender.com/menClothes`, params)
        .then((res) => {
            // console.log(res.data)
            dispatch({ type: GET_REQUEST_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ type: GET_REQUEST_FAILURE })
        })
}

export const toggleWishList = (id,wishList) => async(dispatch) => {
    try {
        dispatch({type: GET_REQUEST})
        console.log(wishList)
        let res = await axios.patch(`https://platecrafters-moke-api.onrender.com/menClothes/${id}`,{wishList})
        console.log(res.data)
        dispatch({type:TOGGLE_WISHLIST_SUCCESS,payload:{id,wishList}})    
        // dispatch({ type: GET_REQUEST_SUCCESS, payload: res.data })   
    } catch (error) {
        dispatch({type: GET_REQUEST_FAILURE})
    }
}