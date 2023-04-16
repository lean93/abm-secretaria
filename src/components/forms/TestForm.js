import 'bootstrap/dist/css/bootstrap.min.css';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import React, { useState } from 'react';


function TestForm(props) {

  const [data, setData] = useState("Vacio");


  const getData =()=>{
    axios.get("https://funny-manatee-217b3e.netlify.app/.netlify/functions/api/clientes").then(response=>{
      console.log(response);
      setData(JSON.stringify(response.data))
    }).catch(error=>{

    });
  }

  return (
    <>
    <Alert key='success' variant='success'>
      Pronto aca vas a poder cargar todo {props.userData.user}
    </Alert> 
    <Button onClick={getData} variant="primary">Buscar</Button>
    <Button onClick={props.exit} variant="danger">Salir</Button>

    <h4>{data}</h4>
     </>
    );
}

export default TestForm;
