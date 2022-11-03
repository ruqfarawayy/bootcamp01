// import logo from './logo.svg';
import './App.css';


function App() {
  // const NamaPanjang = () => <p>Ruq Farawayyy</p>
  // console.log("haha")
  const FormWarga = () => {
    return (
      <form>
        <label>NIK : </label>
        <input type="number" placeholder="Tulis NIKnya .."/><br/>
        <label>Nama : </label>
        <input type="text" placeholder="Tulis Namanya .."/><br/>
        <label>Umur : </label>
        <input type="number" placeholder="Tulis Umurnya .."/><br/>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
  const RowTable = (props) => {
    return (
        <tr>
          <td>{props.nik}</td>
          <td>{props.nama}</td>
          <td>{props.umur}</td>
        </tr>
    );
  };
  const DataWarga = (props) => {
    return (
      <div>
        <table style={{border:'1px solid black'}} >
          <thead>
          <tr>
              <td>NIK</td>
              <td>Nama</td>
              <td>Umur</td>
            </tr>
          </thead>
            <tbody>
            {props.children}
            </tbody>
        </table>
      </div>
    );
  };
  return (
    <div className="App">
      <FormWarga/>
      <DataWarga>
          <RowTable nik="1241" nama="Ruq Farawayyy" umur="21" />
          <RowTable nik="1242" nama="Mavoh Kusuma" umur="23" />
          <RowTable nik="1243" nama="Doni Cikninn" umur="25" />
      </DataWarga>
    </div>
  );
}

export default App;
