import React, { useEffect, useState } from "react";
import ApiService from "@/src/services/client";

const DataWarga = () => {
 const [dataWarga, setdataWarga] = useState([]);
 const [inputData, setinputData] = useState({
  nama: "",
  nik: "",
  alamat: "",
 });
 
 const fetchDataWarga = () => {
  ApiService.request({
   method: "get",
   url: "/person",
 }).then((res) => {
   // console.log('dari ep person', res)
   setdataWarga(res.data.data);
 });
 }

 const postDataWarga = () => {
   ApiService.request({
    method: 'post',
    url: '/person',
    data:{
     nik: inputData.nik,
     nama: inputData.nama,
     alamat: inputData.alamat
    }
   }).then((res) => {
    fetchDataWarga(res.data.data);
   })
 }
  const handleDataInput = (e) => {
    setinputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
   postDataWarga();
   e.preventDefault()
  };
  useEffect(() => {
    fetchDataWarga()
  }, []);
  return (
    <div>
      <h2>Data Warga Kongoria</h2>
      <form onSubmit={handleSubmit}>
        <label> Nama : </label>
        <input type="text " 
        name="nama"
        value={inputData.nama}
        onChange={handleDataInput}
        /> <br />
        <label> NIK : </label>
        <input type="number" 
        name="nik"
        value={inputData.nik}
        onChange={handleDataInput}/> <br />
        <label> Alamat : </label>
        <input type="text " 
        name="alamat"
        value={inputData.alamat}
        onChange={handleDataInput}/> <br />
        <input 
        type="submit"
        value="Submit"/>
        
      </form>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>NIK</th>
            <th>Alamat</th>
          </tr>
        </thead>
        <tbody>
          {dataWarga.map((item, i) => {
            return (
              <tr key={`${item.id}-${i}`}>
                <td>{i + 1}</td>
                <td>{item.nama}</td>
                <td>{item.nik}</td>
                <td> {item.alamat} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataWarga;
