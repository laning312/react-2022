import React, { Component } from 'react'
import store from '../redux/store'

export default class Test extends Component {
  render() {
    return (
      <div>
        <h3>Test组件</h3>
          <p>{store.getState().name}</p>
          <p>{store.getState().weapon}</p>
      </div>
    )
  }
}
