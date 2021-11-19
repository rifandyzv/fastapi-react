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
    <form onSubmit={handleSubmit}>
      <label>
        <p>username</p>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        <p>password</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div>
        <button>Sign Up</button>
      </div>
    </form>
  )
}

export default Register
