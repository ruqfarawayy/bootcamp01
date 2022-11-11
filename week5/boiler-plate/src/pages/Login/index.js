import { useNavigate } from 'react-router-dom'
import URLS from '@/src/enums/urls'
import { useState } from 'react'

const Login = () => {
	const navigate = useNavigate()
 const [dataInput, setDataInput] = useState({
  nama: "",
  pwd: ""
 })

 const datas = {
   nama: "faruq",
   pwd: "123"
 }

const handleDataInput = (e) => {
 setDataInput((prev) => ({
   ...prev,
   [e.target.name]: e.target.value,
 }));
};

const authLogin = () => {
		if (dataInput.nama === datas.nama && dataInput.pwd === datas.pwd ) {
   localStorage.setItem('token', 'hehehehe')
  setTimeout(() => {
			navigate(URLS.PROFILE)
		}, 2000)
  } else {
   alert("heee lahhhh")
  }
	}
	return (
		<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
			<h1>LOGIN</h1>
   <form>
   <label>Username : </label>
   <input type="text" name="nama"value={dataInput.nama} onChange={handleDataInput}/><br/>
   <label>Password : </label>
   <input type="password" name="pwd" value={dataInput.pwd} onChange={handleDataInput}/><br/>
   <button onClick={authLogin}>login</button>
   </form>
		</div>
	)
}

export default Login
