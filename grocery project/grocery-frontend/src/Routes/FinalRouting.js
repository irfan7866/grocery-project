import React from "react";

import AuthRoutes from './AuthRoutes'
import MainRoutes from './Routes'

import { useSelector } from "react-redux";

const FinalRouting = () => {

    const Auth = useSelector((state)=>state.Auth.l_data.id)

    return (
        <div>

            {Auth && Auth !== null && Auth !== 'undefined' && typeof(Auth) === 'string' ?

            <MainRoutes />
            :
            <AuthRoutes />

            }

        </div>
    )
}

export default FinalRouting;