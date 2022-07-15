import React, { Component } from 'react'

export default class Cates extends Component {

  goForward = () => {
    this.props.history.goForward()
  }

  render() {
    return (
      <div>分类组件的内容
        <button onClick={this.goForward}>前进</button>
      </div>
    )
  }
}
