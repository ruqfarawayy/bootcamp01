import logo from './logo.svg';
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
    kelamin: "",
    policy: "",
    tanggal: "",
    waktu: "",
    suhu: "",
    nama_orangtua: "",
  });

  const [editIndex, setEditIndex] = useState(undefined);

  const handleDataInput = (e) => {
    console.log(e.target.value);
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
      kelamin: "",
      policy: "",
      tanggal: "",
      waktu: "",
      suhu: "",
    });
    setEditIndex(undefined);
    e.preventDefault();
  };

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
        placeholder="Nama"
        readOnly={readOnly}
        />
        <InputNumber
        label="Masukan NIK"
        name="nama"
        value={dataInput.nik}
        disabled={disabled}
        onChange={handleDataInput}
        placeholder="NIK"
        readOnly={readOnly}/>
        <InputMail
        label="Masukan Email"
        name="Email"
        value={dataInput.email}
        disabled={disabled}
        onChange={handleDataInput}
        placeholder="Email"
        readOnly={readOnly}/>
        <InputPwd
        placeholder="Password"
        />
        <SelectComp/>
        <RadioBox/>
        <CheckBox/>
        <InputDate/>
        <InputTime/>
        <InputRange/>
        <ButtonCLick />
    </div>
  );
}

export default App;
