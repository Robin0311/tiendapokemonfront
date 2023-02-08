import Formu from './Formu'
import React, { useEffect, useContext } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const IniciarSesion = () => {

  const userCtx = useContext(UserContext)
  const { loginUser, authStatus, verifyingToken, formData } = userCtx

  const navigate = useNavigate()

  useEffect(() => {
    verifyingToken()

    if (authStatus) {
      navigate('/')
    }
  }, [authStatus])

  if (authStatus) return null

  const sendData = (event) => {
    event.preventDefault()
    loginUser(formData)
  }

  return (
    <form onSubmit={(e) => sendData(e)}>
        <Formu tipo='email' />
        <Formu tipo='password' />
        <button type='submit' className='btn btn-primary mt-3'>
          Comenzar
        </button>
      </form>
  
  );
  };
  
  export default IniciarSesion;
  

  