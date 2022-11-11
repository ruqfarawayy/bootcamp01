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
    <div class="input-group">
      <label class="label">{label}</label>
      <input
        id="text"
        class="input"
        type="text"
        name={value}
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
