import React from "react";

import "./button.styles.css";

const Button = ({ type, label, disabled, onClick }) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {label}{" "}
    </button>
  );
};

export default Button;
