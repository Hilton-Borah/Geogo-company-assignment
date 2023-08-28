import * as types from "./actiontypes"
import axios from "axios";
// import { serverUrl } from "../../App";

export const getRegistration = (data) => (dispatch) => {
    dispatch({ type: types.REGISTRATION_REQUEST })
    return axios.post(`https://fair-rose-walkingstick-kilt.cyclic.app/user/register`, data)
        .then((res) => {
            
           console.log(res.data)
           return dispatch({ type: types.REGISTRATION_SUCCESS, payload: res.data })
        }).catch((err) => {
         console.log(err.data.response.data.success)
           return dispatch({ type: types.REGISTRATION_FAILURE, payload: err.data.response.data.success })
        })
}



export const getLogin = (data) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST })
    return axios.post(`https://fair-rose-walkingstick-kilt.cyclic.app/user/login`, data)
        .then((res) => {
               // console.log(res.data)
           return dispatch({ type: types.LOGIN_SUCCESS, payload: res.data })
        }).catch((err) => {
           return dispatch({ type: types.LOGIN_FAILURE })
        })
}
