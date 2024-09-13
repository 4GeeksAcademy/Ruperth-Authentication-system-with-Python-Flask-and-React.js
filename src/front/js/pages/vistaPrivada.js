// src/pages/vistaPrivada.js
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/vistaPrivada.css"; // Asegúrate de tener este archivo CSS

const VistaPrivada = () => {
    const navigate=useNavigate()
    useEffect (()=>{
        const token=localStorage.getItem("token")
        if ( !token ){
            navigate("/login")
        }
    }, [] )
    return (
        <div className="mainPage1">
            <h1>Página Privada</h1>
            {/* pagina privada */}
        </div>
    );
};




export default VistaPrivada;