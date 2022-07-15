import React, { Component } from 'react'

import './Goods.css'

export default class Goods extends Component {
  
  jumpAbout = () => {
    // console.log(this.props)
    this.props.history.push('/about', {title: 'test'})
    // this.props.history.replace('/about')
  }

  goBack = () => {
    this.props.history.goBack()
  }
  

  render() {
    return (
      <div className='goods'>
          Goods!!!
          <button onClick={this.jumpAbout}>跳转到about组件</button>
          <button onClick={this.goBack}>后退</button>
      </div>
    )
  }
}
