import './App.css';
import Test from './components/Test';
import Person from './components/Person';

import React, { Component } from 'react'

class App extends Component {
  render() {
    console.log(this)
    return (
      <div className="App">
        <Person />
        <hr />
        <Test />
      </div>
    )
  }
}



export default App;
