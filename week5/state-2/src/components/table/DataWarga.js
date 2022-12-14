import React from "react";
import { useEffect, useState } from "react";

const DataWarga = () => {
  const [dataInput, setDataInput] = useState({
    nama: "",
    nik: "",
    umur: "",
  });
  const [dataWarga, setDataWarga] = useState([]);
  const [editIndex, setEditIndex] = useState(undefined);
  const handleInput = (e) => {
    setDataInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleEdit = (i) => {
    setDataInput(dataWarga[i]);
    setEditIndex(i);
  };

  const handleSubmit = (e) => {
    if (editIndex !== undefined) {
      setDataWarga((prev) => {
        const editData = prev;
        editData[editIndex] = dataInput;
        return editData;
      });
    } else {
      setDataWarga((prev) => {
        return [...prev, dataInput];
      });
    }

    setDataInput({
      nama: "",
      nik: "",
      umur: "",
    });
    setEditIndex(undefined);
    e.preventDefault();
  };
  const handleDelete = (i) => {
    setDataWarga((prev) => {
      return prev.filter((item, iFilter) => iFilter !== i);
    });
  };

  useEffect(() => {
    setDataWarga([
      {
        nik: "1242511",
        nama: "Faruq",
        umur: "21",
      },
    ]);
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <label>NIK</label>
      <input
        type="text"
        name="nik"
        value={dataInput.nik}
        onChange={handleInput}
      />
      <label>Nama</label>
      <input
        type="text"
        name="nama"
        value={dataInput.nama}
        onChange={handleInput}
      />
      <label>Umur</label>
      <input
        type="number"
        name="umur"
        value={dataInput.umur}
        onChange={handleInput}
      />
      <input type="submit" value="Submit" />
      {editIndex !== undefined ? (
        <b style={{ backgroundColor: "yellow" }}>Lagi di Edit</b>
      ) : (
        <b style={{ backgroundColor: "green" }}>Bisa di Edit</b>
      )}
    </form>
  );
};

export default DataWarga;
