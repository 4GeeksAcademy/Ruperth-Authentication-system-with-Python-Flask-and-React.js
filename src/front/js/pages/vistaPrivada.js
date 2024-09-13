// src/pages/vistaPrivada.js
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


const VistaPrivada = () => {
    const navigate=useNavigate()
    useEffect (()=>{
        const token=localStorage.getItem("token")
        if ( !token ){
            navigate("/login")
        }
    }, [] )
    return (
        <div>
            <h1>Página Privada</h1>
            {/* pagina privada */}
        </div>
    );
};




export default VistaPrivada;