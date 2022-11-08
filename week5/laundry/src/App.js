import React from "react";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [dataInput, setDataInput] = useState({
      nama: "",
      berat: "",
      tglmasuk: "",
      tglkeluar: "",
    }); //1

    const [dataPelanggan, setDataPelanggan] = useState([]); //2
    const [editIndex, setEditIndex] = useState(undefined);//3

    const handleInput = (e) => {
      setDataInput((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };


  const handleSubmit = (e) => {
    if (editIndex !== undefined) {
      setDataPelanggan((prev) => {
        const editData = prev;
        editData[editIndex] = dataInput;
        return editData;
      });
    } else {
      setDataPelanggan((prev) => {
        return [...prev, dataInput];
      });
    }
    setDataInput({
      nama: "",
      berat: "",
      tglmasuk: "",
      tglkeluar: "",
    });
    setEditIndex(undefined);
    e.preventDefault();
  };

  const handleEdit = (i) => {
    setDataInput(dataPelanggan[i]);
    setEditIndex(i);
  };

  const handleDelete = (i) => {
    setDataPelanggan((prev) => prev.filter((item, iFilter) => iFilter !== i))
  }
  
  return <div className="App">
  <form onSubmit= {handleSubmit}>
    <label>Nama : </label>
    <input
    type= "text"
    name="nama"
    value={dataInput.nama}
    onChange={handleInput}
    />
    <br/>
    <label>Berat : </label>
    <input
    type= "number"
    name="berat"
    value={dataInput.berat}
    onChange={handleInput}
    />
    <br/>
    <label>Tanggal Masuk : </label>
    <input
    type= "date"
    name="tglmasuk"
    value={dataInput.tglmasuk}
    onChange={handleInput}
    />
    <br/>
    <label>Tanggal Keluar : </label>
    <input
    type= "date"
    name="tglkeluar"
    value={dataInput.tglkeluar}
    onChange={handleInput}
    />
    <br/>
    <input type="submit" value="Submit" />
    <br/>
  </form>
  <table>
  <thead>
          <tr>
          <td>No</td>
          <td>Nama</td>
          <td>Berat /Kg</td>
          <td>Tanggal Masuk</td>
          <td>Tanggal Keluar</td>
          <td>Action</td>
          </tr>
        </thead>
      <tbody>
        {dataPelanggan.map((item, i) => {
         return (
          <tr key={i}>
          <td>{i + 1}</td>
          <td>{item.nama}</td>
          <td>{item.berat}</td>
          <td>{item.tglmasuk}</td>
          <td>{item.tglkeluar}</td>
          <td>
          <button onClick={() => handleEdit(i)}>EDIT</button>
          <button handleDelete={() => handleDelete(i)}>DELETE</button>
         </td>
         </tr>
        );
        })}
      </tbody>
  </table>
  </div>;
}

export default App;