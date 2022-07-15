import React, { Component } from 'react'
import LogForm from './components/LogForm/LogForm'
import Logs from './components/Logs/Logs'
import './App.css'
import Search from './components/Search/Search'

export default class App extends Component {

  state = {
    logs: []
  }
  
  componentDidMount() {
    const logs = this.getLogsData()
    this.setState({
      logs
    })
  }

  deleteLogHandle = index => {
    const {logs} = this.state
    logs.splice(index, 1)
    this.setState({
      logs
    })
  }

  getLogsBySearch = search => {
    let logs = this.getLogsData()
    logs = logs.filter(log => log.thing.includes(search))
    this.setState({
      logs
    })
  }


  getLogsData = () => {
    let logs = localStorage.getItem('logs')
    logs = logs === null ? [] : JSON.parse(logs)
    return logs
  }

  render() {
    return (
      <div className='app'>
        <LogForm />
        <Search getLogsBySearch={this.getLogsBySearch}/>
        <Logs logs={this.state.logs} deleteLog={this.deleteLogHandle}/>
      </div>
    )
  }
}
