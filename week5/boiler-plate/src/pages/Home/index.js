import logo from '@/src/logo.svg';
import {useNavigate, Link} from 'react-router-dom'
import URLS from '@/src/enums/urls';
function Home() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to={URLS.LOGIN}>Login Now</Link>
      </header>
    </div>
  );
}

export default Home;