import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function PrivateRoute() {
    const navigate = useNavigate();
    const loggedIn = localStorage.getItem("token") ? true : false;
    
    useEffect(() => {
        if(!loggedIn){
            navigate("/");
        }
    }, [])

    if(loggedIn) {
        return <Outlet/>;
    }
}

export default PrivateRoute;