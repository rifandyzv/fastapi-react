import React, { useState } from 'react'

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
  const handleSubmit = async (e) => {
    e.preventDefault()

    var formBody = new URLSearchParams({
      grant_type: 'password',
      username: username,
      password: password
    })
    const token = await loginUser(formBody)
    console.log(token)
    setToken(token)
  }
  return (
    <form onSubmit={handleSubmit} class="box">
      <label>
        <p>username</p>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        <p>password</p>
        <input
          type="password"
          class="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <div>
        <button type="submit" class="btn btn-primary">
          Log in
        </button>
      </div>
    </form>
  )
}

export default Login
