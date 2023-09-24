import React, { useContext, useState } from "react";
import { sessionContext } from "../../context/SessionContext";
import { login } from "../../services/HttpLoginRequestService";
import { environment } from "../../enviroments/enviroment.dev";
import { saveToken, saveUser } from "../../utils/localstorage";
import { useNavigate } from "react-router-dom";

export const AuthEmail = () => {
  const [typeText, setTypeText] = useState("password");
  const [eyePassword, setEyePassword] = useState("-slash");

  const nav = useNavigate();

  const togglePasswordVisibility = () => {
    if (typeText === "password") {
      setTypeText("text");
      setEyePassword("");
    } else {
      setTypeText("password");
      setEyePassword("-slash");
    }
  };

  const {
    handleChangeEmail,
    handleChangePassword,
    captcha,
    onChangeCaptcha,
    email,
    password,
    setStateError,
  } = useContext(sessionContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (captcha !== "" && captcha !== "NoCaptcha") {
      const url = `${environment.endpoint}/Login?userName=${email}&password=${password}`;
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
        },
      };

      login(url, options)
        .then((response) => {
          if (response.error === false) {
            saveToken(response.token);
            saveUser(response.user);
            nav("/Home");
          } else {
            setStateError();
          }
        })
        .catch(() => {
          setStateError();
        });
    } else {
      onChangeCaptcha("NoCaptcha");
    }
  };

  return (
    <>
      <input
        type="email"
        name="email"
        placeholder="Correo electronico"
        className="form-control"
        id="email"
        onChange={(e) => {
          handleChangeEmail(e);
        }}
        autoComplete="on"
      />
      <input
        type={typeText}
        name="password"
        placeholder="Contraseña"
        className="form-control"
        id="password"
        onChange={(e) => {
          handleChangePassword(e);
        }}
        autoComplete="on"
      />
      <i
        className={`fa-lg fa-sharp fa-solid fa-eye${eyePassword}`}
        id="iconEyeSlash"
        onClick={togglePasswordVisibility}
      ></i>
      <p className="msg-forgot-password">
        <a href="#">Olvido su contraseña?</a>
      </p>
      <button onClick={handleSubmit} className="btn-login">
        Entrar
      </button>
    </>
  );
};

export default AuthEmail;
