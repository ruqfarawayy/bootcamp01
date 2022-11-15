import './App.css';
import { useState } from 'react';
import InputText from './component/InputText';
import ButtonCLick from './component/ButtonClick';
import InputNumber from './component/InputNumber';
import InputMail from './component/InputMail';
import InputPwd from './component/InputPwd';
import SelectComp from './component/SelectComp';
import RadioBox from './component/RadioBox';
import CheckBox from './component/CheckBoxComp';
import InputDate from './component/DatePicker';
import InputTime from './component/InputTime';
import InputRange from './component/InputRange';
function App() {
  const [dataCuy, setDataCuy] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [dataInput, setDataInput] = useState({
    nama: "",
    nik: "",
    email: "",
    password: "",
    bahasa: "",
    gender: "",
    policy: "",
    tanggal: "",
    waktu: "",
    suhu: "",
    nama_orangtua: "",
  });

  const [editIndex, setEditIndex] = useState(undefined);
  
  const bahasa = [
    { label: "Inggris", value: "inggris" },
    { label: "Indonesia", value: "indonesia" },
    { label: "Jepang", value: "Jepang" },
    { label: "Rusia", value: "Rusia" },
  ];

  const gender = [
    { label: "Laki-Laki", value: "Laki-Laki" },
    { label: "Wanita", value: "Wanita" },
  ]
  const handleDataInput = (e) => {
    // console.log(e.target.value);
    setDataInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    if (editIndex !== undefined) {
      setDataCuy((prev) => {
        let editData = prev;
        editData[editIndex] = dataInput;
        localStorage.setItem("dataCuy", JSON.stringify(editData));
        return editData;
      });
    } else {
      setDataCuy((prev) => {
        return [...prev, dataInput];
      });
    }
    setDataInput({
      nama: "",
      nik: "",
      email: "",
      password: "",
      bahasa: "",
      gender: "",
      policy: "",
      tanggal: "",
      waktu: "",
      suhu: "",
    });
    setEditIndex(undefined);
    e.preventDefault();
  };
  // const handleSelect = (e) => {
  //   console.log(e)
  //   setDataInput((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // }
  const handleEdit = (e) => {
    console.log("editing");
    setEditIndex(e);
    setDataInput(dataCuy[e]);
  };

  const handleDel = (e) => {
    setDataCuy((prev) => prev.filter((item, i) => i !== e));
  };
  const handleDisableToggle = () => {
    setDisabled((prev) => {
      return !prev;
    });
  };

  const handleReadOnlyToggle = () => {
    setReadOnly((prev) => {
      return !prev;
    });
  };

  return (
    <div className="App">
        <h1>Formulir Pendaftaran Mahasiswa Baru :</h1>
        <InputText
        label="Masukan Nama"
        name="nama"
        value={dataInput.nama}
        disabled={disabled}
        onChange={handleDataInput}
        placeholder="Nama Panjang"
        readOnly={readOnly}
        />
        <InputNumber
        label="Masukan NIK"
        name="nik"
        value={dataInput.nik}
        disabled={disabled}
        onChange={handleDataInput}
        placeholder="NIK"
        readOnly={readOnly}/>
        <InputMail
        label="Masukan Email"
        name="email"
        value={dataInput.email}
        disabled={disabled}
        onChange={handleDataInput}
        placeholder="Email"
        readOnly={readOnly}/>
        <InputPwd
        label="Masukkan Password"
        name="password"
        value={dataInput.password}
        onChange={handleDataInput}
        placeholder="Password"
        />
        <SelectComp
        optionData= {bahasa}
        label="Pilih Bahasa : "
        name="bahasa"
        value={dataInput.bahasa}
        // onChange={handleDataInput}
        onChange={handleDataInput}
        // placeholder="Password"
        />
        <RadioBox
        optionData={gender}
        label="Pilih Jenis Kelamin : "
        name="gender"
        value={dataInput.gender}
        onChange={handleDataInput}
        />
        <CheckBox/>
        <InputDate/>
        <InputTime/>
        <InputRange/>
        <ButtonCLick 
        onClick={handleSubmit}/>
    </div>
  );
}

export default App;
