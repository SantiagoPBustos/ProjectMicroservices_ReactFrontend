import React, { useContext } from "react";
import Captcha from "../components/login/Captcha";
import AuthEmail from "../components/login/AuthEmail";

import MyGoogleAuth from "../services/authGoogle";
import MyFacebookAuth from "../services/authFacebook";
import AuthRegister from "../services/authRegister";
import { sessionContext } from "../context/SessionContext";

export const Login = () => {
  const { errorServer } = useContext(sessionContext);
  return (
    <>
      <div className="principalContainer">
        <div className="contenedorLogin">
          <div className="divFormulario">
            <h2 className="textLogin">Iniciar Sesión</h2>
            <div className="form">
              <form className="login-form">
                <AuthEmail />
                <AuthRegister />
                <Captcha />
                <hr />
                <MyGoogleAuth />
                <MyFacebookAuth />
              </form>
            </div>
            {errorServer === true && (
              <div className="alert alert-danger p-1">
                ¡Tenemos problemas para conectarnos con el servidor!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
