import React from "react";
import MyInput from "../components/login/MyInput";

export const Register = () => {
  return (
    <div className="principalContainer">
      <div className="contenedorLogin">
        <div className="divFormulario">
          <h2 className="textLogin">Registrate</h2>
          <div className="form">
            <form className="login-form">
              <MyInput
                typeInput="text"
                nameInput="text"
                placeholderInput="Nombre Completo"
                idInput="nombres"
                handleChangeInput=""
              />
              <MyInput
                typeInput="text"
                nameInput="text"
                placeholderInput="Apellido Completo"
                idInput="apellidos"
                handleChangeInput=""
              />
              <MyInput
                typeInput="date"
                nameInput="date_born"
                placeholderInput="Fecha de Nacimiento"
                idInput="date_born"
                handleChangeInput=""
              />

              <button id="register" className="btn-login">
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
