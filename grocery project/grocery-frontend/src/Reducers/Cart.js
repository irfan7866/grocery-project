import { GET_CART_LOADING , GET_CART_SUCCESS , GET_CART_FAILURE} from "../Actions/Types";
import { ADD_TO_CART_LOADING , ADD_TO_CART_SUCCESS , ADD_TO_CART_FAILURE} from "../Actions/Types";

const Auth = (state , action) => {

    if(typeof state === 'undefined') {
        return {
            loading : false ,

            c_data : [],
            c_error : {},
            add_data : [],
            add_error : {}
        }
    }

    switch(action.type) {

        case GET_CART_LOADING : 
            return {
                ...state,
                loading : true,
                c_data : [],
                c_error : {}
            }

        case GET_CART_SUCCESS : 
            return {
                ...state,
                loading : false,
                c_data : action.data,
                c_error : {}
            }

        case GET_CART_FAILURE : 
            return {
                ...state,
                loading : false,
                c_data : [],
                c_error : action.err
            }

        case ADD_TO_CART_LOADING : 
            return {
                ...state,
                loading : true,
                add_data : [],
                add_error : {}
            }

        case ADD_TO_CART_SUCCESS : 
            return {
                ...state,
                loading : false,
                add_data : action.data,
                add_error : {}
            }

        case ADD_TO_CART_FAILURE : 
            return {
                ...state,
                loading : false,
                add_data : [],
                add_error : action.err
            }

        default : return state
    }

}


export default Auth