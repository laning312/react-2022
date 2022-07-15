import React, { Component } from 'react'
import City from './components/City'
import Person from './components/Person'

export default class App extends Component {
  render() {
    return (
      <div>
        <Person />
        <hr />
        <City />
      </div>
    )
  }
}
