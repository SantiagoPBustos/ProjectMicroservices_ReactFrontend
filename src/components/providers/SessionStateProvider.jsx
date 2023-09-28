import React, { useState, useRef } from "react";
import { sessionContext } from "../../context/SessionContext";

const SessionStateProvider = ({ children }) => {
  const [errorLogin, setErrorLogin] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const recaptcha = useRef(null);

  const setStateError = () => {
    setErrorLogin(true);
  };

  const onChangeCaptcha = (key) => {
    setCaptcha(key);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <sessionContext.Provider
      value={{
        errorLogin,
        setStateError,
        captcha,
        onChangeCaptcha,
        email,
        handleChangeEmail,
        password,
        handleChangePassword,
      }}
    >
      {children}
    </sessionContext.Provider>
  );
};

export default SessionStateProvider;
