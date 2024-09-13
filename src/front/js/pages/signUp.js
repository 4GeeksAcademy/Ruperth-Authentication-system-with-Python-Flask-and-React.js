import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { Context } from "../store/appContext";
import "../../styles/signUp.css"; // Asegúrate de tener este archivo CSS

export const SignUp = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate(); // Usa useNavigate para redirigir después del registro
    const handleRadioChange = (value) => setDataForm({ ...dataForm, is_teacher: value })
    const [dataForm, setDataForm] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [visible, setVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm({ ...dataForm, [name]: value });
    }

    const handleClick = (e) => {
        e.preventDefault();
        setVisible(!visible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await actions.register(dataForm);
        if (success) {
            navigate('/login'); 
        } else {
            console.log("Error en el registro");
        }
        setDataForm({
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <div>
            <form className="container d-flex flex-column align-items-center mt-5 p-3" id="formularioRegistro" onSubmit={handleSubmit} id="signUpBox">
                <h4 className="mt-2 mb-4"><b>Regístrate</b></h4>
                <label>Email
                    <input className="form-control" name="email" value={dataForm.email} placeholder="Correo electrónico" onChange={handleChange} type="text" id="emailForm"/>
                </label>
                <label>Contraseña
                    <div className="contenedor-password2">
                        <input className="form-control" name="password" value={dataForm.password} placeholder="Contraseña" onChange={handleChange} type={visible ? "text" : "password"} />
                        {visible ?
                            <span className="fa-solid fa-eye-slash icon2" onClick={handleClick}></span>
                            :
                            <span className="fa-solid fa-eye icon" onClick={handleClick}></span>}
                    </div>
                </label>
                <label>Confirma contraseña
                    <div className="contenedor-password2">
                        <input className="form-control" name="confirmPassword" value={dataForm.confirmPassword} placeholder="Contraseña" onChange={handleChange} type={visible ? "text" : "password"} />
                        {visible ?
                            <span className="fa-solid fa-eye-slash icon2" onClick={handleClick}></span>
                            :
                            <span className="fa-solid fa-eye icon" onClick={handleClick}></span>}
                    </div>
                </label>
              
                <div className="form-check">

                </div>
                <input className="btn btn-secondary mt-3" value="SignUp" type="submit" id="button4"/>
            </form>
        </div>
    );
};
