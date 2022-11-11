import React from "react";
const InputNumber = ({
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
        id="number"
        class="input"
        type="number"
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
export default InputNumber;
