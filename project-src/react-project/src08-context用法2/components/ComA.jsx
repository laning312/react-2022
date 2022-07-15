import React, { Component } from 'react'
import ComB from './ComB'

export default class ComA extends Component {
  render() {
    return (
      <div className='coma'>
        <p>这是A组件</p>
        <ComB />
      </div>
    )
  }
}
