import React, { useState } from 'react'
import './ErrorMSG'
import ErrorMSG from './ErrorMSG'
const loginUser = async (credentials) => {
  const res = fetch('http://localhost:8000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: credentials
  })

  return await res
}

const Login = ({ setToken }) => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [errorMSG, setErrorMSG] = useState()
  const handleSubmit = async (e) => {
    e.preventDefault()

    var formBody = new URLSearchParams({
      grant_type: 'password',
      username: username,
      password: password
    })
    const token = await loginUser(formBody)
    if (!token.ok) {
      setErrorMSG('Invalid Credentials !!!')
    } else {
      // sessionStorage.setItem('token', token.json)
      console.log(token.body)
      setToken(token)
    }
  }
  return (
    <form onSubmit={handleSubmit} class="login">
      <h1>Login</h1>
      <div class="mb-3">
        <label class="form-label">username</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div class="mb-3">
        <label class="label">password</label>
        <input
          type="password"
          class="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" class="btn btn-primary">
          Log in
        </button>
      </div>
      <ErrorMSG msg={errorMSG} />
    </form>
  )
}

export default Login
