import React, { Component } from 'react'
import './App.css'
import ComA from './components/ComA'
import TestContext from './store/TestContext'

export default class App extends Component {

  render() {
    return (
      <div>
        <TestContext.Provider value={{name: 'aaa', age: 20}}>
          <ComA />
        </TestContext.Provider>
      </div>
    )
  }
}
