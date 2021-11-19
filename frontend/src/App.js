import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Username from './components/Username'
// const setToken = (userToken) => {
//   sessionStorage.setItem('token', JSON.stringify(userToken))
// }
// const getToken = () => {}

function App() {
  const [token, setToken] = useState()
  // const token = getToken()

  const [user, setUser] = useState()

  if (!token) {
    return (
      <div class="main">
        <Login setToken={setToken} />
        <Register />
      </div>
    )
  }

  const getUser = async () => {
    return fetch('http://localhost:8000/api/me', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer ' +
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFzZCIsInBhc3N3b3JkIjoiJDJiJDEyJEhETGRYbE8vbVhqRHJHaVR0b20vQy4vb2hERzBmS2lidGVpUEFLRG1OazdQYnRnZWoyZGdLIn0.1kz5Jrpc0XIcNls4Cy5jz7qpXqzY5r-fbjdyxd0Kiqs'
      }
    }).then((data) => {
      data.json()
    })
  }

  return (
    <div class="hi">
      <div>
        <Username name={user} />
        <button class="btn btn-secondary">Log out</button>
      </div>
    </div>
  )
}

export default App
