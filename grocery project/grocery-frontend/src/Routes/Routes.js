import React from "react";
import {Routes , Route} from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Home from "../Views/Home";
import About from "../Views/About";
import Contact from "../Views/Contact";
import List from "../Views/List"; 
import Cart from "../Views/Cart";
import Products from "../Views/Products";
import FinalPage from "../Views/FinalPage";



export default function Routing() {

    return (
        <div>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/list" element={<List/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/product" element={<Products/>} />
                <Route path="/final" element={<FinalPage/>} />
                <Route path="*" element={<Home/>} />
            </Routes>
        </div>
    )

}