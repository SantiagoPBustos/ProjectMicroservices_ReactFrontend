import FacebookLogin from "react-facebook-login";
import { environment } from "../enviroments/enviroment.dev";

const responseFacebook = (response) => {
  console.log(response);
};

function MyFacebookAuth() {
  return (
    <FacebookLogin
      appId={environment.facebook_ID_API}
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      icon="fa-facebook"
      cssClass="btn-facebook"
    />
  );
}

export default MyFacebookAuth;
