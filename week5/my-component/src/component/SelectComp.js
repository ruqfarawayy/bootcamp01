import React from "react";
const SelectComp = ({
  name,
  value,
  onChange,
  handleClick,
  disabled,
  placeholder,
  readOnly,
  label,
  optionData,
  ...props
}) => {
  return (
    <div>
      <label>{label}</label>
      <select name={name} value={value} onChange={onChange} {...props}>
        {optionData.map((item, i) => {
          return (
            <option key={`buat-drop-${i}`} value={item.value} >
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default SelectComp;
