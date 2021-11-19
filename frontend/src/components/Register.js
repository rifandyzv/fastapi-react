import React, { useState } from 'react'

const Register = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const signUp = async () => {
    const signUp = fetch('http://localhost:8000/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: username, password: password })
    })

    return await signUp.json
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signUp()
  }

  return (
    <form onSubmit={handleSubmit} class="register">
      <h1>Register</h1>
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
        <button class="btn btn-primary">Sign Up</button>
      </div>
    </form>
  )
}

export default Register
