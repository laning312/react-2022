import React, { Component } from 'react'
import http from './utils/http'
import { setToken } from './utils/token'
import './App.css'

export default class App extends Component {

  oEmail = React.createRef()
  oPassword = React.createRef()

  loginHandle = () => {
    const email = this.oEmail.current.value
    const password = this.oPassword.current.value
    http.post('/api/auth/login', { email, password })
      .then(res => {
        console.log(res)
        setToken(res.data.access_token)
      })
      .catch(err => {
        console.log(err)
      })
  }

  getUserListHandle = () => {
    http.get('/api/admin/users')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <form>
          email: <input type="text" ref={this.oEmail} />  <br />
          password: <input type="password" ref={this.oPassword} /> <br />
          <input type="button" value="login" onClick={this.loginHandle} />
        </form>

        <hr />

        <input type="button" value="获取用户列表" onClick={this.getUserListHandle} />

      </div>
    )
  }
}
