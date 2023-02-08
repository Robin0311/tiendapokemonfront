import { useState, createContext } from 'react'
import clienteAxios from '../config/axios'
export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: null, email: null })
  const [authStatus, setAuthStatus] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    event.preventDefault()
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const registerUser = async (dataForm) => {
    try {
      const res = await clienteAxios.post('/customer', dataForm)
      localStorage.setItem('token', res.data.token)
      setAuthStatus(true)
    } catch (error) {
      console.log(error)
    }
  }

  const verifyingToken = async () => {
    const token = localStorage.getItem('token')

    if (token) {
      clienteAxios.defaults.headers.common['x-auth-token'] = token
    } else {
      delete clienteAxios.defaults.headers.common['x-auth-token']
    }

    try {
      const res = token && (await clienteAxios.get('/customer/verificar'))
      setUser(res.data)
      setAuthStatus(true)
    } catch (error) {
      console.log('Error Verificando token', error)
    }
  }

  const loginUser = async (dataForm) => {
    try {
      const res = await clienteAxios.post('/customer/login', dataForm)
      localStorage.setItem('token', res.data.token)
      setAuthStatus(true)
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    setAuthStatus(false)
  }

  const data = { registerUser, loginUser, handleChange, verifyingToken, logout, formData, user, authStatus }
  console.log('CONTEXTO USUARIO', data)
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}
