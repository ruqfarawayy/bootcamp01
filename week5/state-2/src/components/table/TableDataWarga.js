import React from 'react';

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
const TableDataWarga = ({data, handleEdit, handleDelete, ...props }) => {
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
      <tbody>
      {data.map((item, i) => (
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
      </tbody>
    </table>
    </div>
 );
};

const styles = {
 tableStyle: { backgroundColor: "#DBDBDB" },
};
export default TableDataWarga;