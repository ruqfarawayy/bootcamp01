import { useNavigate, Link } from "react-router-dom";
import URLS from "@/src/enums/urls";
import { useEffect, useState } from "react";
import {getUser, getUserAll} from '../../services/ApiUsers'

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
  });

  const [userInfo, setUserInfo] = useState({
    data: [],
    meta: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    
    // const token ='';
    // getUser().then((res) => {
    //   setUser(res.data.data);
    // });
			
    // getUserAll().then((res) => {
    //   setUserInfo({
    //     data: res.data.data,
    //     meta: res.data.meta,
    //   });
    // });
				Promise.all([
					getUser(),
					getUserAll()
				]).then((res) => {
					const user = res[0];
					const userAll = res[1];
					setUser({name : user.data.data.name})
					setUserInfo({
						data : userAll.data.data,
						meta : userAll.data.meta
					})
					// console.log('name :', user.data.data.name);
					// console.log('user all :', userAll);
				})
  }, []);
  const authLogout = () => {
    localStorage.setItem("token", "");
    setTimeout(() => {
      navigate(URLS.LOGIN);
    }, 2000);
  };
  return (
    <div style={styles.container}>
      <h1>Profile</h1>
      <p>name : {user.name}</p>
      <table>
        <thead>
									<tr>
									<th>No</th>
          <th>name</th>
          <th>username</th>
										</tr>
        </thead>
        <tbody>
          {userInfo.data.map((item, key) => {
            return (
              <tr key={key}>
															<td>{key + 1}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Silahkan melihat data penduduk kami</p>
      <button>
        <Link to={URLS.DATAWARGA}>Data Warga Kongoria</Link>
      </button>
      <button onClick={authLogout}>logout</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: 10,
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Profile;
