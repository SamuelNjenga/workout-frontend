import React from 'react'
import { useHistory } from 'react-router-dom'
import { useLogin } from '../../contexts/LoginContext'
const Logout = () => {
  let history = useHistory()
  const { isAuthenticated, setAuthentication } = useLogin()
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  localStorage.removeItem('fname')
  setAuthentication(false)
  console.log(isAuthenticated)
  history.push('/login')
  return <div />
}

export default Logout
