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
    const res = await fetch('http://localhost:8000/api/me', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token')
      }
    })
      .then((data) => {
        return data.json()
      })
      .then((e) => {
        setUser(e.username)
      })
  }
  getUser()
  return (
    <div class="hi">
      <div>
        <Username name={user} />

        <button
          class="btn btn-secondary"
          onClick={() => {
            setToken(null)
          }}
        >
          Log out
        </button>
      </div>
    </div>
  )
}

export default App
