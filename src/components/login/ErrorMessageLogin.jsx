import { useContext } from "react";
import { sessionContext } from "../../context/sessionContext";

export const ErrorMessageLogin = () => {
  const { errorLogin, captcha } = useContext(sessionContext);
  return (
    <>
      {errorLogin === true && (
        <div>
          <hr />
          <div className="alert alert-danger p-1">
            Tenemos problemas en el ingreso. Intenta nuevamente
          </div>
        </div>
      )}
      {captcha === "NoCaptcha" && (
        <div>
          <hr />
          <div className="alert alert-danger p-1">
            Comprueba que no eres un Robot validando Captcha
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorMessageLogin;
