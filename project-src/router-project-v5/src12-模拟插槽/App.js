import React, { Component } from 'react'
import Welcome from './components/Welcome'
import './App.css'


export default class App extends Component {
  
  render() {
    return (
      <div className='app'>
        {/* <Welcome name='刘备'/> */}
        {/* <Welcome>刘备</Welcome> */}
        <Welcome address="蜀国">
          <h2>你好</h2>
          <p>张飞</p>
        </Welcome>
      </div>
    )
  }
}
