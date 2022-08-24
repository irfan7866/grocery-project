import {REG_API_LOADING , REG_API_SUCCESS , REG_API_FAILURE} from './Types'
import {LOGIN_API_LOADING , LOGIN_API_SUCCESS , LOGIN_API_FAILURE , CLEAN_AUTH} from './Types'
import { GET_ALL_PRODUCTS_LOADING , GET_ALL_PRODUCTS_SUCCESS , GET_ALL_PRODUCTS_FAILURE } from './Types'
import { ADD_TO_CART_LOADING , ADD_TO_CART_SUCCESS , ADD_TO_CART_FAILURE } from './Types'
import { GET_CART_LOADING , GET_CART_SUCCESS , GET_CART_FAILURE } from './Types'

export const regApiLoading = () => ({
    type : REG_API_LOADING
})

export const regApiSuccess = (data) => ({
    type : REG_API_SUCCESS ,
    data
})

export const regApiFailure = (err) => ({
    type : REG_API_FAILURE , 
    err
})



export const loginApiLoading = () => ({
    type : LOGIN_API_LOADING
})

export const loginApiSuccess = (data) => ({
    type : LOGIN_API_SUCCESS , 
    data
})

export const loginApiFailure = (err) => ({
    type : LOGIN_API_FAILURE , 
    err
})


export const cleanAuth = () => ({
    type : CLEAN_AUTH 
})

export const getProLoading = () => ({
    type : GET_ALL_PRODUCTS_LOADING
})

export const getProSuccess = (data) => ({
    type : GET_ALL_PRODUCTS_SUCCESS ,
    data
})

export const getProFailure = (err) => ({
    type : GET_ALL_PRODUCTS_FAILURE , 
    err
})





export const getCartLoading = () => ({
    type : GET_CART_LOADING
})

export const getCartSuccess = (data) => ({
    type : GET_CART_SUCCESS ,
    data
})

export const getCartFailure = (err) => ({
    type : GET_CART_FAILURE , 
    err
})



export const addToCartLoading = () => ({
    type : ADD_TO_CART_LOADING
})

export const addToCartSuccess = (data) => ({
    type : ADD_TO_CART_SUCCESS ,
    data
})

export const addToCartFailure = (err) => ({
    type : ADD_TO_CART_FAILURE , 
    err
})
