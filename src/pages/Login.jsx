import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import MyGoogleAuth from "../services/authGoogle";
import MyFacebookAuth from "../services/authFacebook";
import LoginAuth from "../services/authLogin";
import AuthRegister from "../services/authRegister";
import { environment } from "../enviroments/enviroment.dev";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Login.css";

export function Login() {
  const onChangeCaptcha = (value) => {
    console.log("Captcha value:", value);
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
                <AuthRegister />
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
