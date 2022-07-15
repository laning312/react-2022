import React, { Component } from 'react'
import http from './utils/http'
import './App.css'

export default class App extends Component {

  getHomeData = async () => {
    try {
      const url = '/api/index'
      const res = await http.get(url)  // baseURL会自动添加到url前面
      console.log(res)
    } catch (err) {
      console.log(err)
    }
    console.log('hello')
  }

  render() {
    return (
      <div>
        <button onClick={this.getHomeData}>获取首页数据</button>
      </div>
    )
  }
}
