import { useContext } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { environment } from "../../enviroments/enviroment.dev";
import { post } from "../../services/HttpLoginRequestService";
import { sessionContext } from "../../context/SessionContext";
import { saveToken, saveUser } from "../../utils/localstorage";
import { useNavigate } from "react-router-dom";

export const AuthGoogle = () => {
  const { captcha, onChangeCaptcha, setStateError } =
    useContext(sessionContext);

  const nav = useNavigate();

  const onSuccessGoogle = (credentialResponse) => {
    if (captcha !== "" && captcha !== "NoCaptcha") {
      const url = `${environment.endpoint}/Login/LoginWithGoogle?credential=${credentialResponse.credential}`;

      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
        },
      };

      post(url, options)
        .then((response) => {
          console.log(response);
          if (response.error === false) {
            saveToken(response.token);
            saveUser(response.user);
            nav("/Home");
          } else {
            setStateError();
          }
        })
        .catch(() => {
          setStateError();
        });
    } else {
      onChangeCaptcha("NoCaptcha");
    }
  };

  const onErrorGoogle = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={environment.google_ID_API}>
      <GoogleLogin
        clientId={environment.google_ID_API}
        text="continue_with"
        locale="en_EN"
        onSuccess={onSuccessGoogle}
        onError={onErrorGoogle}
        size="large"
        useOneTap
      />
    </GoogleOAuthProvider>
  );
};

export default AuthGoogle;
