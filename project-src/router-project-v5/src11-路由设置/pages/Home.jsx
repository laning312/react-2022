import React, { Component } from 'react'

export default class Home extends Component {

  jumpCity = () => {
    this.props.history.push('/city')
  }

  render() {
    return (
      <div>
        <button onClick={this.jumpCity}>选择城市</button>
        这是首页内容
      </div>
    )
  }
}
