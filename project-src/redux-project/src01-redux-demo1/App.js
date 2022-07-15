import React, { Component } from 'react'
import Count from './components/Count'
import Test from './components/Test'

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <hr />
        <Test />
      </div>
    )
  }
}
