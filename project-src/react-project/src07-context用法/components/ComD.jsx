import React, { Component } from 'react'
import TestContext from '../store/TestContext'

export default class ComD extends Component {
  render() {
    return (
      <div className='comd'>
        ComD
        <TestContext.Consumer>
          {v => 
            <p>{v.name} - {v.age}</p>
          }
        </TestContext.Consumer>
      </div>
    )
  }
}
