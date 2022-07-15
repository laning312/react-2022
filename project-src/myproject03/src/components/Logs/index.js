import React, { Component } from 'react'
import Log from './Log/Log'
import './index.css'

export default class Logs extends Component {
  render() {
    const {logs} = this.props
    return (
      <div className='logs'>
        {logs.map(e => <Log data={e}/>)}
      </div>
    )
  }
}
