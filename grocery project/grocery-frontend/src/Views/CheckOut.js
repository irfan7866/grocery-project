import React from "react";
import { useNavigate } from "react-router-dom";

export default function CheckOut() {

    const navigate = useNavigate()

    return (
        <div className="CheckOut">

            <p>You are ready to go and checkout your order. <button class="btn btn-outline-success checkout-button" onClick={() => navigate("/final")} >Check Out</button></p>

        </div>
    )
}