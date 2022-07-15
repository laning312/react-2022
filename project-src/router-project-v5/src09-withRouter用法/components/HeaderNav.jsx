import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class HeaderNav extends Component {

  back = () => {
    console.log(this.props)
    this.props.history.goBack()
  }

  render() {
    return (
      <div className='header'>
        <span className='back' onClick={this.back}>&lt;</span>
      </div>
    )
  }
}


export default withRouter(HeaderNav)
