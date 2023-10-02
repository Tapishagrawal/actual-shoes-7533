import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESSFUL } from "../actionType";



export const login = (userDetails) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    return axios
        .post("https://reqres.in/api/login", userDetails).then((res) => {
            dispatch({ type: LOGIN_SUCCESSFUL, payload: res.data.token })
        }).catch((err) => {
            dispatch({ type: LOGIN_FAILURE, payload: err.message })
        });
}
