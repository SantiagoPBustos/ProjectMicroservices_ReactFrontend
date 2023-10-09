import ReCAPTCHA from "react-google-recaptcha";
import React, { useContext } from "react";
import { sessionContext } from "../../context/sessionContext";
import { environment } from "../../enviroments/enviroment.dev";

export const Captcha = () => {
  const { onChangeCaptcha } = useContext(sessionContext);
  return (
    <ReCAPTCHA
      id="gwd-reCAPTCHA_2"
      sitekey={environment.recaptcha.siteKey}
      onChange={(key) => {
        onChangeCaptcha(key);
      }}
    />
  );
};

export default Captcha;
