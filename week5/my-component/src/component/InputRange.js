import React from "react";
const InputRange = () => {
  return (
   <div class="input-group">
      <label class="label">Masukan Angka</label>
      <input
        name="range"
        id="range"
        class="input"
        type="range"
        min="0" 
        max="10"
      ></input>
    </div>
  );
};
export default InputRange;
