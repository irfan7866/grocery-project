import React , {useState} from "react";
import { BsFillCartFill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

import { cleanAuth } from "../Actions/ActionCreators";
import { useDispatch } from "react-redux";


export default function Navbar() {

    const [count , setCount] = useState(0)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(cleanAuth())
    }


    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                <a class="navbar-brand" href="#"><i><b>Grocery</b></i></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" onClick={() => navigate('/home')} style={{cursor:"pointer"}}>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" onClick={() => navigate('/about')} style={{cursor:"pointer"}}>About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" onClick={() => navigate('/contact')} style={{cursor:"pointer"}}>Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" onClick={() => navigate('/list')} style={{cursor:"pointer"}}>List</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-current="page" href="#" style={{cursor:"pointer"}}>Coming soon...</a>
                    </li>
                    </ul>
                    <form class="d-flex cart">
                        <button onClick={() => navigate('/cart')} class="btn btn-outline-success">
                            <h1>{count}</h1>
                            <h2><BsFillCartFill/></h2>
                        </button>
                        <button class="btn btn-outline-secondary logout-button" onClick={(e) => handleLogout(e)}>Logout</button>
                    </form>
                </div>
                </div>
            </nav>

        </div>
    )
}