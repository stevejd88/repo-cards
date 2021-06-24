import React from "react";

import "./button.styles.css";

const Button = ({ type, label, disabled }) => {
  return (
    <button type={type} disabled={disabled}>
      {label}{" "}
    </button>
  );
};

export default Button;
