import React , {useEffect} from "react";
import { useDispatch , useSelector } from "react-redux";
import { getProducts , addToCartData } from "../Actions/Actions";


export default function Products() {

    const dispatch = useDispatch()

    const products_list = useSelector((state) => 
        state.Products.p_data && Array.isArray(state.Products.p_data) && state.Products.p_data.length ? state.Products.p_data : []
    )

    const user_id = useSelector((state)=> state.Auth.l_data && state.Auth.l_data.id ? state.Auth.l_data.id : null)


    useEffect(() => {
        dispatch(getProducts({user_id}))
    } , [])


    const handleAddToCart = (data) => {

        dispatch(addToCartData({u_id : user_id , p_data : data}))

    }



    return (
        <div>

            <table class="table">
                <tbody>
                    
                    {products_list.map((row , i) => (
                    <tr>
                        <th scope="row">
                            <img src={row.p_image} style={{width:100 , height:120}} />
                        </th>
                        <td>{row.p_name}</td>
                        <td>{row.p_desc}</td>
                        <td>{row.p_price} &#8377;</td>
                        <td><button onClick={() => {handleAddToCart(row)}} class="btn btn-outline-success">Add to Cart</button></td>
                    </tr>
                    ))}

                </tbody>
            </table>
            
        </div>
    )
}