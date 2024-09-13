import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
    const { store, actions } = useContext(Context);
    

    const [logueado, setLogueado] = useState(localStorage.getItem('token')); 
    const [usuarioImage, setUsuarioImage] = useState(localStorage.getItem('usuarioImage')); 
    
    useEffect(() => {
       
        setLogueado(localStorage.getItem('token'));
        setUsuarioImage(localStorage.getItem('usuarioImage'));
    }, []); 

    const navigate = useNavigate();

    const handleLogout = () => {
        actions.logout(); 
        localStorage.removeItem('token'); 
        localStorage.removeItem('usuarioImage'); 
        setLogueado(null); 
        navigate("/"); 
    };

    return (
        <nav className="navbar mb-0">
            <div className="text-overlay-navbar">Authentication System</div>
            {logueado ? ( 
                <div className="navbar-buttons">
                <Link to="/login" className="btn btn-secondary">
                    Iniciar sesión
                </Link>
                <Link to="/signUp" className="btn btn-secondary">
                    Registrarse
                </Link>
            </div>
            ) : ( // Si no está autenticado, se muestran los botones de "Iniciar sesión" y "Registrarse".
                <div className="navbar-buttons">
                    <Link to="/login" className="btn btn-secondary">
                        Iniciar sesión
                    </Link>
                    <Link to="/signUp" className="btn btn-secondary">
                        Registrarse
                    </Link>
                </div>
            )}
        </nav>
    );
};
