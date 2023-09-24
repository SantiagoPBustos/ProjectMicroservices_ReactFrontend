import React, { useContext, useState } from "react";
import { sessionContext } from "../../context/SessionContext";
import { environment } from "../../enviroments/enviroment.dev";
import { helpHttp } from "../../services/httpHelper";
import { useNavigate } from "react-router-dom";

export const AuthEmail = () => {
  const [typeText, setTypeText] = useState("password");
  const [eyePassword, setEyePassword] = useState("-slash");

  const togglePasswordVisibility = () => {
    if (typeText === "password") {
      setTypeText("text");
      setEyePassword("");
    } else {
      setTypeText("password");
      setEyePassword("-slash");
    }
  };

  const { captcha, email, handleChangeEmail, password, handleChangePassword } =
    useContext(sessionContext);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (captcha !== "") {
      await helpHttp()
        .post(
          `${environment.endpoint}/Login?userName=${email}&password=${password}`
        )
        .then((response) => {
          if (response.token !== "" && response.username !== "") {
            localStorage.setItem("token", response.token);
            localStorage.setItem("username", response.username);
            console.log(response);
            navigate("/Home");
          }
        })
        .catch(console.log("ERROR PROMISE"));
    } else {
      console.log("NO CAPTCHA");
    }
  }

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
