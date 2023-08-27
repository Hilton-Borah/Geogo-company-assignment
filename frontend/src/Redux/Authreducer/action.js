import * as types from "./actiontypes"
import axios from "axios";
// import { serverUrl } from "../../App";

export const getRegistration = (data) => (dispatch) => {
    dispatch({ type: types.REGISTRATION_REQUEST })
    return axios.post(`http://localhost:4500/user/register`, data)
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
    return axios.post(`http://localhost:4500/user/login`, data)
        .then((res) => {
               // console.log(res.data)
           return dispatch({ type: types.LOGIN_SUCCESS, payload: res.data })
        }).catch((err) => {
           return dispatch({ type: types.LOGIN_FAILURE })
        })
}


// export const verifyOtp = (data) => (dispatch) => {
//     dispatch({ type: types.OTP_REQUEST })
//     return axios.post(`http://localhost:4500/user/verifyotp`, data)
//         .then((res) => {
            
//           return  dispatch({ type: types.OTP_SUCCESS, payload: res.data })
//         }).catch((err) => {
//            return dispatch({ type: types.OTP_FAILURE })
//         })
// }


// export const resendOtp = (data) => (dispatch) => {
//     dispatch({ type: types.OTP_REQUEST })
//     return axios.post(`http://localhost:4500/user/resendotp`, data)
//         .then((res) => {
            
//           return  dispatch({ type: types.OTP_SUCCESS, payload: res.data })
//         }).catch((err) => {
//            return dispatch({ type: types.OTP_FAILURE })
//         })
// }
