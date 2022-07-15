import React, { Component } from 'react'
import LogForm from './components/LogForm'
import Logs from './components/Logs'
import './App.css'
import axios from 'axios'

export default class App extends Component {
  // 准备好数据
  state = {
    logs: [
      { month: '六月', day: 20, thing: '学习JavaScript', duration: '2小时' },
      { month: '六月', day: 22, thing: '学习Nodejs', duration: '1小时' },
      { month: '六月', day: 23, thing: '学习React', duration: '2小时' },
      { month: '六月', day: 28, thing: '学习React666', duration: '5小时' }
    ]
  }
  componentDidMount() {
    axios({method: 'get', url: 'https://api.shop.eduwork.cn/api/index'}).then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div className='app'>
        <LogForm />
        <Logs logs={this.state.logs}/>
      </div>
    )
  }
}
