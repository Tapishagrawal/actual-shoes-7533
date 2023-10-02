import axios from "axios"
import { DELETE_PROD_SUCC, GET_PROD_FAIL, GET_PROD_REQUEST, GET_PROD_SUCC, PATCH_PROD_SUCC, POST_PROD_SUCC } from "./actiosTypes"


export const addProducts = (data) => (dispatch) => {
    dispatch({ type: GET_PROD_REQUEST })

    axios.post(`https://platecrafters-moke-api.onrender.com/allProducts`, data).then(() => {


        dispatch({ type: POST_PROD_SUCC })


    }).catch((err) => {
        dispatch({ type: GET_PROD_FAIL })
    })

}

export const getAdminpro = (dispatch) => {
    dispatch({ type: GET_PROD_REQUEST})
    axios.get(`https://platecrafters-moke-api.onrender.com/allProducts`)
        .then((res) => {
            // console.log(res.data)
            dispatch({ type: GET_PROD_SUCC, payload: res.data })
            return res.data;
        })
        .catch((err) => {
            dispatch({ type: GET_PROD_FAIL })
        })
}

export const delet_prod = (id) => (dispatch) => {


    axios.delete(`https://platecrafters-moke-api.onrender.com/allProducts/${id}`).then((res) => {

        console.log(res.data)

        dispatch({ type: DELETE_PROD_SUCC, payload: id })


    }).catch((err) => {
    })

}

export const edit_product = (id, newData) => (dispatch) => {

    dispatch({ type: GET_PROD_REQUEST })

    axios.patch(`https://platecrafters-moke-api.onrender.com/allProducts/${id}`, newData).then((res) => {

        //   console.log(res.data)
        dispatch({ type: PATCH_PROD_SUCC })

    }).catch((err) => {
        dispatch({ type: GET_PROD_FAIL })
    })

}