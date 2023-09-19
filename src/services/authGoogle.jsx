import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { environment } from "../enviroments/enviroment.dev";
import jwt_decode from "jwt-decode";

const onSuccessGoogle = (credentialResponse) => {
  var credentialResponseDecode = jwt_decode(credentialResponse.credential);
  console.log(credentialResponseDecode);
};

const onErrorGoogle = () => {
  console.log("Login Failed");
};

function MyGoogleAuth() {
  return (
    <GoogleOAuthProvider clientId={environment.google_ID_API}>
      <GoogleLogin
        text="continue_with"
        locale="es_ES"
        onSuccess={onSuccessGoogle}
        onError={onErrorGoogle}
        size="medium"
      />
    </GoogleOAuthProvider>
  );
}

export default MyGoogleAuth;
