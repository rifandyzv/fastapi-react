import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [token, setToken] = useState()
  if (!token) {
    console.log('gagal token')
    return (
      <div>
        <Login setToken={setToken} />
        <Register />
      </div>
    )
  }
  return (
    <div>
      <h1>Hi</h1>
    </div>
  )
}

export default App
