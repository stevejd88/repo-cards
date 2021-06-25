import React from "react";

import "./form-input.styles.css";

const FormInput = ({
  onChange,
  onBlur,
  label,
  id,
  name,
  value,
  type,
  placeholder,
  readOnly,
  disabled,
  error,
  touched,
  requiredField
}) => {
  return (
    <div className='text-input group'>
      <label htmlFor={id}>
        {label}
        {requiredField && <span className='required-field'>&#42;</span>}
      </label>
      <input
        className='input'
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
      ></input>
      {error !== "" ? <p className='error'>{error}</p> : null}
    </div>
  );
};

export default FormInput;
