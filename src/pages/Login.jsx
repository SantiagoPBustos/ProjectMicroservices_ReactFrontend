import React, { useState } from "react";
import { environment } from "../enviroments/enviroment.dev";
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import jwt_decode from "jwt-decode";
import FacebookLogin from "react-facebook-login";
import { helpHttp } from "../services/httpHelper";

function Login() {
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

  const onChangeCaptcha = (value) => {
    console.log("Captcha value:", value);
  };

  const onSuccessGoogle = (credentialResponse) => {
    var credentialResponseDecode = jwt_decode(credentialResponse.credential);
    console.log(credentialResponseDecode);
  };

  const onErrorGoogle = () => {
    console.log("Login Failed");
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enviando Form!");
    helpHttp()
      .post(
        "https://localhost:7137/Login?userName=dasapibu@gmail.com&password=admin123",{})
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="principalContainer">
      <div className="contenedorLogin">
        <div className="divFormulario">
          <h2 className="textLogin">Iniciar Sesión</h2>
          <div className="form">
            <form className="login-form">
              <input
                type="email"
                name="email"
                placeholder="Correo electronico"
                className="form-control"
                id="email"
              />
              <input
                type={typeText}
                name="password"
                placeholder="Contraseña"
                className="form-control"
                id="password"
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
              <button className="btn-login">Registrarse</button>
              <div id="gwd-reCAPTCHA_2">
                <ReCAPTCHA
                  sitekey={environment.recaptcha.siteKey}
                  onChange={onChangeCaptcha}
                />
              </div>
              <hr></hr>
              <GoogleOAuthProvider clientId={environment.google_ID_API}>
                <GoogleLogin
                  text="continue_with"
                  locale="es_ES"
                  onSuccess={onSuccessGoogle}
                  onError={onErrorGoogle}
                  size="large"
                />
              </GoogleOAuthProvider>

              <FacebookLogin
                appId={environment.facebook_ID_API}
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                icon="fa-facebook"
                cssClass="btn-facebook"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
