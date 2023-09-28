import React from "react";

const MyInput = ({ typeInput, nameInput, placeholderInput, idInput, handleChangeInput }) => {
  return (
    <input
      type={typeInput}
      name={nameInput}
      placeholder={placeholderInput}
      className="form-control"
      id={idInput}
      onChange={(e) => {
        handleChangeInput(e);
      }}
      autoComplete="on"
    />
  );
};

export default MyInput;
