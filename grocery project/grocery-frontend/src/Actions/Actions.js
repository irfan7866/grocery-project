import axios from "axios";
import { regApiLoading, regApiSuccess , regApiFailure } from "./ActionCreators";
import { loginApiLoading, loginApiSuccess , loginApiFailure } from "./ActionCreators";
import { getProLoading , getProSuccess , getProFailure } from "./ActionCreators";
import { addToCartLoading , addToCartSuccess , addToCartFailure } from "./ActionCreators";
import { getCartLoading , getCartSuccess , getCartFailure } from "./ActionCreators";
import { base_url } from "./config";


export const loginAction = (data) => {
    return (dispatch) => {
        dispatch(loginApiLoading())
        axios.post(base_url + '/user_login' , data).then((res)=>{
            dispatch(loginApiSuccess(res.data))
        }).catch((err)=>{
            dispatch(loginApiFailure(err.respose.data))
        })
    }
}

export const RegisterAction = (data) => {

    console.log(data)

    return (dispatch) => {
        dispatch(regApiLoading())
        axios.post(base_url + '/user_register' , data).then((res)=>{
            dispatch(regApiSuccess(res.data))
        }).catch((err)=>{
            dispatch(regApiFailure(err.respose.data))
        })
    }
}


export const getProducts = () => {
    return (dispatch) => {
        dispatch(getProLoading())
        axios.get(base_url + '/get_products').then((res) => {
            console.log(res.data)
            dispatch(getProSuccess(res.data))
        }).catch((err) => {
            dispatch(getProFailure(err.response.data))
        })
    }
}


export const getCartData = (uid) => {
    return (dispatch) => {
        dispatch(getCartLoading())
        axios.get(base_url + '/get_cart' , {params : {u_id : uid}}).then((res) => {
            console.log(res.data)
            dispatch(getCartSuccess(res.data))
        }).catch((err) => {
            console.log(err.response.data)
            dispatch(getCartFailure(err.response.data))
        })
    }
}



export const addToCartData = (data) => {
    return (dispatch) => {
        dispatch(addToCartLoading())
        axios.post(base_url + '/add-to-cart' , data).then((res) => {
            console.log(res.data)
            dispatch(addToCartSuccess(res.data))
        }).catch((err) => {
            dispatch(addToCartFailure(err.response.data))
        })
    }
}

