import React , {useEffect} from "react";

import { useDispatch , useSelector } from "react-redux";

import { getCartData } from "../Actions/Actions";

import CheckOut from "./CheckOut";


export default function Cart() {

    const dispatch = useDispatch()

    const user_id = useSelector((state)=> state.Auth.l_data && state.Auth.l_data.id ? state.Auth.l_data.id : null)
    
    const cart_data = useSelector((state) =>
        state.Cart.c_data && state.Cart.c_data.data && Array.isArray(state.Cart.c_data.data) && state.Cart.c_data.data.length ? state.Cart.c_data.data : []
    )


    useEffect(() => {
        dispatch(getCartData({user_id}))
    },[])

    return (
        <div>

            <table class="table">
                <tbody>
                    {cart_data.map((row , i) => (
                    <tr>
                        <th scope="row">
                            <img src={row.p_image} style={{width:100 , height:120}} />
                        </th>
                        <td>{row.p_name}</td>
                        <td>{row.p_desc}</td>
                        <td>{row.p_price} &#8377;</td>
                    </tr>
                    ))}
                </tbody>
            </table>

            <CheckOut />

        </div>
    )
}