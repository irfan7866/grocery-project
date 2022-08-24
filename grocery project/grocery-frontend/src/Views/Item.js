import React from "react";

import {useNavigate} from "react-router-dom"

import {FaEnvira} from 'react-icons/fa' //vegetables
import {SiApple} from 'react-icons/si' //fruits
import {TbBottle} from 'react-icons/tb' //dairy items
import {CgCoffee} from 'react-icons/cg'  //hot drinks
import {BiCoffeeTogo} from 'react-icons/bi' //cold drinks
import {CgBowl} from 'react-icons/cg'  //instant food



export default function Items() {

    const navigate = useNavigate();

    return (
        <div>
            
            <ul className="d-flex list row">
                <div className="list-item col-lg-1 col-md-3 col-sm-6">
                    <h2 className="list-icon"><FaEnvira/></h2>
                    <li className="list-link"><a onClick={() => navigate("/product")} className="btn">Fresh Veggies</a></li>
                </div>
                <div className="list-item col-lg-1 col-md-3 col-sm-6">
                    <h2 className="list-icon"><SiApple/></h2>
                    <li className="list-link"><a onClick={() => navigate("/product")} className="btn">Fresh Fruits</a></li>
                </div>
                <div className="list-item col-lg-1 col-md-3 col-sm-6">
                    <h2 className="list-icon"><TbBottle/></h2>
                    <li className="list-link"><a onClick={() => navigate("/product")} className="btn">Dairy Items</a></li>
                </div>
                <div className="list-item col-lg-1 col-md-3 col-sm-6">
                    <h2 className="list-icon"><CgCoffee/></h2>
                    <li className="list-link"><a onClick={() => navigate("/product")} className="btn">Hot Drinks</a></li>
                </div>
                <div className="list-item col-lg-1 col-md-3 col-sm-6">
                    <h2 className="list-icon"><BiCoffeeTogo/></h2>
                    <li className="list-link"><a onClick={() => navigate("/product")} className="btn">Cold Drinks</a></li>
                </div>
                <div className="list-item col-lg-1 col-md-3 col-sm-6">
                    <h2 className="list-icon"><CgBowl/></h2>
                    <li className="list-link"><a onClick={() => navigate("/product")} className="btn">Instant Food</a></li>
                </div>
            </ul>

        </div>
    )
}