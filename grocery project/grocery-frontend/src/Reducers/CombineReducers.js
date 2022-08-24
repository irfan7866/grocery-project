import {combineReducers} from "redux";
import Auth from "./AuthReducer";
import Products from './Products';
import Cart from "./Cart";


export default combineReducers({
    Auth , 
    Products , 
    Cart
});