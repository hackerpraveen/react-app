import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './Components/MainPage';
import LoginPage from './Components/LoginPage';
import { useEffect, useState } from 'react';
// import NewPage from './Components/NewPage.js';
// import FnPage from './Components/FnPage';

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    login()
  }, [localStorage.getItem('token')]);

  const login = ()=>{
    let token =localStorage.getItem('token')
    if(token){
      setUser(true)
    }else{
      setUser(false)
    }
  }

  const logout = ()=>{
    localStorage.removeItem('token')
    console.log('logout');
    login()
  }

  return (
    <div className="App">
      {user?<MainPage logout={logout}/>:<LoginPage login={login}/>}
      
      

      
    </div>
  );
}
     /* <div>
      <NewPage aData={a}  />
      </div>
      <div className='bg-info'>
        <FnPage/>
      </div> */

export default App;
