import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { helpHttp } from "../services/httpHelper";
import MyGoogleAuth from "../services/authGoogle";
import MyFacebookAuth from "../services/authFacebook";
import { environment } from "../enviroments/enviroment.dev";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import LoginAuth from "../services/authLogin";

export function Login() {
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

  const onChangeCaptcha = (value) => {
    console.log("Captcha value:", value);
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
      <div className="principalContainer">
        <div className="contenedorLogin">
          <div className="divFormulario">
            <h2 className="textLogin">Iniciar Sesión</h2>
            <div className="form">
              <form className="login-form">
                <LoginAuth />
                <button className="btn-login">Registrarse</button>
                <ReCAPTCHA
                  id="gwd-reCAPTCHA_2"
                  sitekey={environment.recaptcha.siteKey}
                  onChange={onChangeCaptcha}
                />
                <hr></hr>
                <MyGoogleAuth />
                <MyFacebookAuth />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
