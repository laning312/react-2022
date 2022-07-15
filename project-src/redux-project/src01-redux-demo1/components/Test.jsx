import React, { Component } from 'react'
import store from '../redux/store'

export default class Test extends Component {
  render() {
    return (
      <div>
          <h4>这是Test组件</h4>
          <p>{store.getState().num}</p>
      </div>
    )
  }
}
