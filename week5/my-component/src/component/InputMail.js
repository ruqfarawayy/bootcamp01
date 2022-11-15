import React from "react";
const InputMail = ({
  name,
  value,
  onChange,
  handleClick,
  disabled,
  placeholder,
  readOnly,
  label,
  ...props
}) => {
  return (
    <div class="input-group">
      <label class="label">{label}</label>
      <input
        id="email"
        class="input"
        type="email"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        onClick={handleClick}
        {...props}
      ></input>
    </div>
  );
};
export default InputMail;
