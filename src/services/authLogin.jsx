import React, { useState } from "react";
import { helpHttp } from "../services/httpHelper";
import "bootstrap/dist/css/bootstrap.css";
import "../pages/Login.css";

function LoginAuth() {
  const [typeText, setTypeText] = useState("password");
  const [eyePassword, setEyePassword] = useState("-slash");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    if (typeText === "password") {
      setTypeText("text");
      setEyePassword("");
    } else {
      setTypeText("password");
      setEyePassword("-slash");
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enviando Form!");
    helpHttp()
      .post(
        `https://localhost:7137/Login?userName=${email}&password=${password}`,
        {}
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <input
        type="email"
        name="email"
        placeholder="Correo electronico"
        className="form-control"
        id="email"
        onChange={handleChangeEmail}
      />
      <input
        type={typeText}
        name="password"
        placeholder="Contraseña"
        className="form-control"
        id="password"
        onChange={handleChangePassword}
      />
      <i
        className={`fa-lg fa-sharp fa-solid fa-eye${eyePassword}`}
        id="iconEyeSlash"
        onClick={togglePasswordVisibility}
      ></i>
      <p className="msg-forgot-password">
        <a href="#">Olvido su contraseña?</a>
      </p>

      <div onClick={handleSubmit} className="btn-login">
        Entrar
      </div>
    </>
  );
}

export default LoginAuth;