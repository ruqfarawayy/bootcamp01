import React from "react";
const ButtonCLick = ({
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
    <div>
      <button onClick={handleClick}>
        <span class="button_top">Kirim</span>
      </button>
    </div>
  );
};
export default ButtonCLick;
