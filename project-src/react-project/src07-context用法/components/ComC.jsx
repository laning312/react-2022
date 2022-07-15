import React, { Component } from 'react'
import ComD from './ComD'
export default class ComC extends Component {
  render() {
    return (
      <div className='comc'>
          <p>这是C组件</p>
          <ComD />
      </div>
    )
  }
}
