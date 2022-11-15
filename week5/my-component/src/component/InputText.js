import React from "react";
const InputText = ({
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
    <div className="input-group">
      <label className="label">{label}</label>
      <input
        id="text"
        className="input"
        type="text"
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
export default InputText;
