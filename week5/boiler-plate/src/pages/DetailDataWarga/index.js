import React from "react";
import { useParams } from "react-router-dom";
const DetailDataWarga = () => {
  const { userId } = useParams();
  return <div>{userId}</div>;
};
export default DetailDataWarga;
