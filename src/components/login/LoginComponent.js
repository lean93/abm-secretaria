import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginComponent(props) {

  const [user, setUser] = useState();
  const [password, setPassword] = useState();


  const onChangeInput = (e, stateSetter)=>{
    stateSetter(e.target.value)
  }

  const login=()=>{
    console.log("Iniciando Sesion. Usuario: " +user+ " Constrasñea: " +password)
    props.login({user:user})
  }

  return (
    <>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label><b>Usuario: </b></Form.Label>
            <Form.Control type="user" placeholder="Ingresar Usuario...." onChange={(e)=> onChangeInput(e, setUser)} value={user}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Contraseña: </b></Form.Label>
            <Form.Control type="password" placeholder="Ingrese Contraseña...." onChange={(e)=> onChangeInput(e, setPassword)} value={password}/>
        </Form.Group>
        <Button variant="primary" onClick={login}>
            Iniciar Sesion
        </Button>
    </Form>
    </>
    );
}

export default LoginComponent;