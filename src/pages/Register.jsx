import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { environment } from "../enviroments/enviroment.dev";
import { parseToDateTimeFormat } from "../utils/DateTimeParser";
import { post } from "../services/HttpLoginRequestService";

export const Register = () => {
  const [idUser, setIdUser] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateBorn, setdateBorn] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [typeDocument, setTypeDocument] = useState("");
  const [genderUser, setGenderUser] = useState("");

  const [typeText, setTypeText] = useState("password");
  const [eyePassword, setEyePassword] = useState("-slash");

  const [errorRegisterData, setErrorRegisterData] = useState(false);
  const [errorRegister, setErrorRegister] = useState(false);

  const togglePasswordVisibility = () => {
    if (typeText === "password") {
      setTypeText("text");
      setEyePassword("");
    } else {
      setTypeText("password");
      setEyePassword("-slash");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      idUser !== "" &&
      name !== "" &&
      lastName !== "" &&
      dateBorn !== "" &&
      emailUser !== "" &&
      passwordUser !== "" &&
      typeDocument !== "" &&
      genderUser !== ""
    ) {
      const url = `${
        environment.endpoint
      }/Login/Register?IdUser=${idUser}&NameUser=${name}&LastNameUser=${lastName}&BirthDate=${parseToDateTimeFormat(
        dateBorn
      )}&Email=${emailUser}&TypeDocument=${typeDocument}&Gender=${genderUser}&Password=${passwordUser}`;

      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
        },
      };

      post(url, options)
        .then((response) => {
          if (response.error === false) {
            console.log("OK", response);
          } else {
            console.log("1", response);
          }
        })
        .catch(() => {
          console.log("2", response);
        });
    } else {
      setErrorRegisterData(true);
    }
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
                name="numberDocUser"
                placeholder="Numero de documento"
                className="form-control form-control-register"
                id="numberDocUser"
                onChange={(e) => {
                  setIdUser(e.target.value);
                }}
                autoComplete="on"
              />
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
                  console.log(e.target.value);
                  setdateBorn(e.target);
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
                required
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
                name="gender"
                id="genderSelect"
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
                type={typeText}
                name="passwordUser"
                placeholder="Contraseña"
                className="form-control form-control-register"
                id="passwordUser"
                onChange={(e) => {
                  setPasswordUser(e.target.value);
                }}
                autoComplete="on"
              />{" "}
              <i
                className={`fa-lg fa-sharp fa-solid fa-eye${eyePassword}`}
                id="iconEyeSlashRegister"
                onClick={togglePasswordVisibility}
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
            {errorRegisterData === true && (
              <div className="alert alert-danger p-1">
                Oops, Complete todos los campos para registrarse!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
