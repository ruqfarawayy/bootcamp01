import React from "react";
import { useState } from "react";
const InputPwd = ({
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
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  
  return (
    <div class="input-group">
      <label class="label">{label}</label>
      <input
        name={name}
        id="Password"
        class="input"
        placeholder={placeholder}
        onChange={onChange}
        type={passwordShown ? "text" : "password"}
      ></input>
      <br/>
      <input type="checkbox" value="showpwd" onClick={togglePassword}/>
      <label>Show Password</label>
    </div>
  );
};
export default InputPwd;
