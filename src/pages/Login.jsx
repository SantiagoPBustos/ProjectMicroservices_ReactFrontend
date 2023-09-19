import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import MyGoogleAuth from "../services/authGoogle";
import MyFacebookAuth from "../services/authFacebook";
import AuthRegister from "../services/authRegister";
import { environment } from "../enviroments/enviroment.dev";
import { helpHttp } from "../services/httpHelper";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Login.css";

export function Login() {
  const [typeText, setTypeText] = useState("password");
  const [eyePassword, setEyePassword] = useState("-slash");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

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

  async function handleSubmit(e) {
    e.preventDefault();
    await helpHttp()
      .post(
        `${environment.endpoint}/Login?userName=${email}&password=${password}`
      )
      .then((response) => {
        console.log(response);
        if (response.error !== true) {
          if (response.token !== "" && response.username !== "") {
            localStorage.setItem("token", response.token);
            localStorage.setItem("username", response.username);
            navigate("/Home");
          }
        }
      })
      .catch(setError(true));
  }

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
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electronico"
                  className="form-control"
                  id="email"
                  onChange={handleChangeEmail}
                  autoComplete="on"
                />
                <input
                  type={typeText}
                  name="password"
                  placeholder="Contraseña"
                  className="form-control"
                  id="password"
                  onChange={handleChangePassword}
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
            {error === true && (
              <div className="alert alert-danger p-1">
                ¡Ha ocurrido un error en el Ingreso!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
