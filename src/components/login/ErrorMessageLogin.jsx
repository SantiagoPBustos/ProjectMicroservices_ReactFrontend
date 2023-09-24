import { useContext } from "react";
import { sessionContext } from "../../context/SessionContext";

export const ErrorMessageLogin = () => {
  const { errorLogin, captcha } = useContext(sessionContext);
  return (
    <>
      {errorLogin === true && (
        <div className="alert alert-danger p-1">
          Tenemos problemas en el ingreso. Intenta nuevamente
        </div>
      )}
      {captcha === "NoCaptcha" && (
        <div className="alert alert-danger p-1">
          Comprueba que no eres un Robot validando Captcha
        </div>
      )}
    </>
  );
};

export default ErrorMessageLogin;
