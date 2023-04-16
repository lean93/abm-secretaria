import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import TestForm from './components/forms/TestForm';
import LoginComponent from './components/login/LoginComponent';


function App() {

  const [userData, setUserData] = useState(undefined);

  const exitFunction = ()=>{
    setUserData(undefined);
  }

  return (
    <>
    {!userData? <LoginComponent login={setUserData}/>:<TestForm userData={userData} exit={exitFunction}/> }
    </>
  );
}

export default App;
