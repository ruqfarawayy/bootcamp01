import { useState } from "react";

const DataKtp = () => {
  const [listInput, setListInput] = useState([]);
  const [dataInput, setDataInput] = useState({
   nama:"",
   gender:"",
   alamat:"",
  });

  const handleAddInputNama = (e) => {
   setDataInput(prevState => ({
    ...prevState,
    nama: e.target.value, 
   })
    )};
  const handleAddInputGender = (e) => {
   setDataInput(prevState => ({
    ...prevState,
    gender: e.target.value, 
   })
    )};
  const handleAddInputAlamat = (e) => {
   setDataInput(prevState => ({
    ...prevState,
    alamat: e.target.value, 
   })
    )};

  const handleAddInput = () => {
    setListInput(prevState => {
      return [...prevState, dataInput]
    })
  }
 
  return (
  <>
   <table>
    <thead>
     <tr>
      <th>No</th>
      <th>Nama</th>
      <th>Jenis Kelamin</th>
      <th>Alamat</th>
      <th>Action</th>
     </tr>
    </thead>
    <tbody>
     
      <>
      {listInput.map((item,index)=> {
       return (
       <tr key={index}>
         <td>{index+1}</td>
         <td>{item.nama}</td>
         <td>{item.gender}</td>
         <td>{item.alamat}</td>
        </tr>
        
       ) 
     })}
      </>
    </tbody>
   </table>

   <div>
    <label>Nama : </label>
    <input type="text" onChange={handleAddInputNama}  value = {dataInput.nama}/>
   </div>
   <div>
    <label>Gender : </label>
    <input type="text" onChange={handleAddInputGender} value = {dataInput.gender}/>
   </div>
   <div>
    <label>Alamat : </label>
    <input type="text" onChange={handleAddInputAlamat} value = {dataInput.alamat}/>
   </div>
   <button onClick={handleAddInput}>Add Input</button>
   </>
  )
}

export default DataKtp;