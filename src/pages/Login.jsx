import Captcha from "../components/login/Captcha";
import AuthEmail from "../components/login/AuthEmail";
import MyGoogleAuth from "../services/authGoogle";
import MyFacebookAuth from "../services/authFacebook";
import AuthRegister from "../services/authRegister";
import ErrorMessageLogin from "../components/login/ErrorMessageLogin";
import SessionStateProvider from "../components/providers/SessionStateProvider.jsx";

export const Login = () => {
  return (
    <SessionStateProvider>
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
            <ErrorMessageLogin />
          </div>
        </div>
      </div>
    </SessionStateProvider>
  );
};

export default Login;
