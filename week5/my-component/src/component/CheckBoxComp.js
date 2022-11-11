import React from "react";
const CheckBox = () => {
  return (
    <div>
     <label>Alasan Mengikuti program ini :</label>
     <br/>
      <input type="checkbox" id="reason1" name="reason1" value="Bike" />
      <label> Tertarik dari dulu</label>
      <br />
      <input type="checkbox" id="reason2" name="reason2" value="Car" />
      <label>cuma kepingin</label>
      <br />
      <input type="checkbox" id="reason3" name="reason3" value="Boat" />
      <label> Yaudah lahya</label>
      <br />
    </div>
  );
};
export default CheckBox;
