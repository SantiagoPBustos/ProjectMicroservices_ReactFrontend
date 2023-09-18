import React, { useState } from "react";
import { helpHttp } from "../services/httpHelper";
import { environment } from "../enviroments/enviroment.dev";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      helpHttp()
        .post(
          `${environment.endpoint}/Login?userName=${email}&password=${password}`
        )
        .then((response) => {
          console.log(response)
          if (response.token !== "" && response.username !== "") {
            localStorage.setItem("token", response.token);
            localStorage.setItem("username", response.username);
            navigate('/Home')
          }else {
            navigate('')
          }
        });
    } catch (error) {}
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
        autoComplete="off"
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
}

export default LoginAuth;
