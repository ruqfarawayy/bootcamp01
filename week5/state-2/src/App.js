import TableDataWarga from "./components/table/TableDataWarga";
import DataWarga from "./components/table/DataWarga"
import "./App.css";

function App() {
  return (
    <div className="App">
      <DataWarga 
      
      />
      <TableDataWarga
      data={dataWarga}
      handleEdit={handleEdit}
      handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
