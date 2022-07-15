import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

export default class App extends Component {

  /* getHomeData = () => {
    const url = 'https://api.shop.eduwork.cn/api/index'
    axios.get(url).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  } */


  getHomeData = async () => {
    try {
      const url = 'https://api.shop.eduwork.cn/api/idex'
      const res = await axios.get(url)
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
