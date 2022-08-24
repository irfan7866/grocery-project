import React from "react";
import {Routes , Route} from "react-router-dom";
import Register from "../Views/Register";
import Login from "../Views/Login";


export default function Routing() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="*" element={<Login/>} />
            </Routes>
        </div>
    )

}