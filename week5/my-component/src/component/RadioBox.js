import React from "react";
const RadioBox = ({
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
      {optionData.map((item, i) => {
          return (
            <>
            <input 
              key={i} 
              name={name}
              type="radio"
              onChange={onChange}
              value={item.value}
              {...props}/>
              <label>{item.label}</label>
          </>
          );
        })}
    </div>
  );
};
export default RadioBox;
