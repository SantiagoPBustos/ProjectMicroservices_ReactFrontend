import React, { useState } from "react";
import { environment } from "../enviroments/enviroment.dev";
import { post } from "../services/HttpLoginRequestService";
import { generateDays, generateMonths, generateYears } from "../utils/Utils";

export const Register = () => {
  const [idUser, setIdUser] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dayBorn, setDayBorn] = useState("");
  const [monthBorn, setMonthBorn] = useState("");
  const [yearBorn, setYearBorn] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [typeDocument, setTypeDocument] = useState("");
  const [genderUser, setGenderUser] = useState("");

  const [typeText, setTypeText] = useState("password");
  const [eyePassword, setEyePassword] = useState("-slash");

  const [errorRegisterData, setErrorRegisterData] = useState(false);
  const [errorServer, setErrorServer] = useState(null);

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
    setErrorRegisterData(false);
    setErrorServer(null);
    if (
      idUser !== "" &&
      name !== "" &&
      lastName !== "" &&
      dayBorn !== "" &&
      monthBorn !== "" &&
      yearBorn !== "" &&
      emailUser !== "" &&
      passwordUser !== "" &&
      typeDocument !== "" &&
      genderUser !== ""
    ) {
      const url = `${
        environment.endpoint
      }/Login/Register?IdUser=${idUser}&NameUser=${name}&LastNameUser=${lastName}&BirthDate=${
        dayBorn + `%2F` + monthBorn + `%2F` + yearBorn
      }&Email=${emailUser}&TypeDocument=${typeDocument}&Gender=${genderUser}&Password=${passwordUser}`;

      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
        },
      };

      post(url, options)
        .then((response) => {
          console.log(response);
          if (response.error === true) {
            setErrorServer(true);
          } else {
            setErrorServer(false);
          }
        })
        .catch((err) => err);
    } else {
      setErrorRegisterData(true);
    }
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
              <br />
              <div className="select-container">
                <div className="select-wrapper">
                  <label className="label-form-register">Dia</label>
                  <select
                    className="select-options-forms"
                    name="day-born"
                    id="dayborn"
                    onChange={(e) => {
                      setDayBorn(e.target.value);
                    }}
                  >
                    <option value=""> - </option>
                    {generateDays().map((e, i) => (
                      <option key={i} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="select-wrapper">
                  <label className="label-form-register">Mes</label>
                  <select
                    className="select-options-forms"
                    name="month-born"
                    id="month-born"
                    onChange={(e) => {
                      setMonthBorn(e.target.value);
                    }}
                  >
                    <option value=""> - </option>
                    {generateMonths().map((e, i) => (
                      <option key={i} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="select-wrapper">
                  <label className="label-form-register">Año</label>
                  <select
                    className="select-options-forms"
                    name="year-born"
                    id="year-born"
                    onChange={(e) => {
                      setYearBorn(e.target.value);
                    }}
                  >
                    <option value=""> - </option>
                    {generateYears(1950, 2023).map((e, i) => (
                      <option key={i} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

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
              />
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
            </form>
            <p className="back-to-login">
              <a href="/">¿Ya tiene una cuenta?</a>
            </p>
          </div>
          {errorRegisterData === true && (
            <div className="alert alert-danger p-1">
              ¡Oops, Complete todos los campos para registrarse!
            </div>
          )}
          {errorServer === true && (
            <div className="alert alert-danger p-1">
              ¡Oops, Tuvimos problemas con el registro. Verifique los datos!
            </div>
          )}
          {errorServer === false && (
            <div className="alert alert-success p-1">
              ¡Registro completado exitosamente!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
