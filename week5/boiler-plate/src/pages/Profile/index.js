import { useNavigate } from 'react-router-dom'
import URLS from '@/src/enums/urls'

const Profile = () => {
	const navigate = useNavigate()
	const authLogout = () => {
		localStorage.setItem('token', '')
		setTimeout(() => {
			navigate(URLS.LOGIN)
		}, 2000)
	}
	return (
		<div style={styles.container}>
			<h1>Profile</h1>
			<p>Silahkan melihat data penduduk kami</p>
			<button>Data Penduduk Kongoria</button>
			<button onClick={authLogout}>logout</button>
		</div>
	)
}

const styles = {
	container: { display: 'flex', gap: 10, flexDirection: 'column', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }
}

export default Profile
