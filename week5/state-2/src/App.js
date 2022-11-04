import { useEffect, useState } from "react";
import "./App.css";

function App() {
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
  const RowTable = (props) => {
    return (
      <tr style={props.warna}>
        <td>{props.nik}</td>
        <td>{props.nama}</td>
        <td>{props.umur}</td>
        <td>
          <button onClick={props.handleEdit}>edit</button>
          <button onClick={props.handleDelete}>delete</button>
        </td>
      </tr>
    );
  };

  useEffect(() => {
    setDataWarga([
      {
        nik: '1242511',
        nama: 'Faruq',
        umur: '21',
    }
    ])
  },[]);

  const DataWarga = (props) => {
    return (
      <div>
        <table style={styles.tableStyle}>
          <thead>
            <tr>
              <td>NIK</td>
              <td>Nama</td>
              <td>Umur</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>{props.children}</tbody>
        </table>
      </div>
    );
  };
  return (
    <div className="App">
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
        {
      editIndex !== undefined ? <b style={{backgroundColor: "yellow"}}>Lagi di Edit</b> : <b style={{backgroundColor: "green"}}>Bisa di Edit</b>
    }
      </form>

      

      <DataWarga>
        {dataWarga.map((item, i) => (
          <RowTable
            warna={i % 2 == 0 ? {backgroundColor: "#DBDBDB"} : {backgroundColor: "white"}}
            key={i}
            nik={item.nik}
            nama={item.nama}
            umur={item.umur}
            handleEdit={() => handleEdit(i)}
            handleDelete={() => handleDelete(i)}
          />
        ))}
      </DataWarga>
    </div>
  );
}

const styles = {
  tableStyle: { backgroundColor: "violet" },
};

export default App;
