import React, { useState } from "react";
import { sessionContext } from "../../context/SessionContext";

const SessionStateProvider = ({ children }) => {
  const [errorServer, setErrorServer] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setStateError = () => {
    setErrorServer(true);
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
        errorServer,
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
