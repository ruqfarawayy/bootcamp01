import React from "react";
const SelectComp = () => {
  return (
    <div>
      <label>Choose your gender:</label>
      <select name="gender" id="gender">
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
    </div>
  );
};
export default SelectComp;
