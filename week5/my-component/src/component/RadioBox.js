import React from "react";
const RadioBox = () => {
  return (
    <div>
     <label>Pilih Bahasa Favoritmu :</label>
      <input type="radio" id="html" name="fav_language" value="HTML" />
      <label>HTML</label>
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label>CSS</label>
      <input
        type="radio"
        id="javascript"
        name="fav_language"
        value="JavaScript"
      />
      <label>JavaScript</label>
    </div>
  );
};
export default RadioBox;
