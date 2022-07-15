import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {

    back = () => {
        this.props.history.goBack()
    }

  render() {
    return (
      <div className="header">
          <span onClick={this.back}>back</span>
      </div>
    )
  }
}


export default  withRouter(Header)