import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { loginAction } from "../Actions/Actions";
import { cleanAuth } from "../Actions/ActionCreators";


export default function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [data , setData] = React.useState({
        email : "",
        password : ""
    })

    const err_msg = useSelector((state) => state.Auth.l_error.msg)

    const handleInput = (e) => {
        setData({...data ,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginAction(data))
    }

    React.useEffect(()=>{
        if(err_msg && err_msg !== null && err_msg !== "" && typeof(err_msg) === 'string') {
            console.log(err_msg)
            alert(err_msg)
            dispatch(cleanAuth())
        }
    } , [err_msg])

    return (
        <div className="login">

            <form className="login-page">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" onChange={handleInput} value={data.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password" onChange={handleInput} value={data.password} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <br/>
                <h6>Don't have an account ? <span style={{color:"blue" , cursor:"pointer" , marginLeft:20}} onClick={() => {navigate('/register')}}><u>Register Here</u></span></h6>
                <button onClick={(e) => handleSubmit(e)} class="btn btn-primary">Submit</button>
            </form>

        </div>
    )

}