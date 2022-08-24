import React from "react";

export default function FinalPage() {

    var num = Math.floor(Math.random()*1000000)

    return (
        <div className="final">

            <center>
                <h1>Your order has been successfully placed.</h1>
                <h3>Your order id is {num}</h3>

            </center>
            
        </div>
    )
}