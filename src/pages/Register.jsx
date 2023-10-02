import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateBorn, setdateBorn] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [typeDocument, setTypeDocument] = useState("");
  const [genderUser, setGenderUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(lastName);
    console.log(dateBorn);
    console.log(emailUser);
    console.log(passwordUser);
    console.log(typeDocument);
  };

  const nav = useNavigate();
  const handleBackToLogin = () => {
    nav("/");
  };

  return (
    <div className="principalContainer">
      <div className="contenedorLogin">
        <div className="divFormulario">
          <h2 className="textLogin">Registrate</h2>
          <div className="form">
            <form className="login-form">
              <input
                type="text"
                name="nameUser"
                placeholder="Nombres"
                className="form-control form-control-register"
                id="nameUser"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                autoComplete="on"
              />
              <input
                type="text"
                name="lastNameUser"
                placeholder="Apellidos"
                className="form-control form-control-register"
                id="lastNameUser"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                autoComplete="on"
              />
              <label className="label-form-register">Fecha de Nacimiento</label>
              <input
                type="date"
                name="dateBorn"
                className="form-control form-control-register"
                id="dateBornUser"
                onChange={(e) => {
                  setdateBorn(e.target.value);
                }}
                autoComplete="on"
              />
              <input
                type="email"
                name="emailUser"
                placeholder="Email"
                className="form-control form-control-register"
                id="emailUser"
                onChange={(e) => {
                  setEmailUser(e.target.value);
                }}
                autoComplete="on"
              />
              <label className="label-form-register">Tipo de documento</label>
              <br />
              <select
                className="select-options-forms"
                name="typeDocument"
                id="typeDocSelect"
                onChange={(e) => {
                  setTypeDocument(e.target.value);
                }}
              >
                <option value=""> - </option>
                <option value="CC">Cedula de ciudadania</option>
                <option value="CE">Cedula de extranjero</option>
                <option value="PS">Pasaporte</option>
              </select>

              <br />
              <label className="label-form-register">Genero</label>
              <br />
              <select
                className="select-options-forms"
                name="typeDocument"
                id="typeDocSelect"
                onChange={(e) => {
                  setGenderUser(e.target.value);
                }}
              >
                <option value=""> - </option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
                <option value="NB">Otro</option>
              </select>

              <input
                type="password"
                name="passwordUser"
                placeholder="Contraseña"
                className="form-control form-control-register"
                id="passwordUser"
                onChange={(e) => {
                  setPasswordUser(e.target.value);
                }}
                autoComplete="on"
              />
              <button
                onClick={handleSubmit}
                id="register"
                className="btn-login"
              >
                Registrarse
              </button>
            </form>{" "}
            <button
              onClick={handleBackToLogin}
              id="handleBackToLogin"
              className="btn-login"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
