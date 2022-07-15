import React, { Component } from 'react'
import { connect } from 'react-redux'

class Test extends Component {
  render() {
    return (
      <div>
        <h3>Test组件</h3>
          <p>{this.props.name}</p>
          <p>{this.props.weapon}</p>
      </div>
    )
  }
}


export default connect(
  state => ({...state})
  ,null)(Test)