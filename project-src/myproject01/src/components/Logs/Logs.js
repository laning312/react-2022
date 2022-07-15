import React, { Component } from 'react'
import Log from './Log/Log'
import './Logs.css'

export default class Logs extends Component {
  render() {
    const { logs, deleteLog } = this.props
    return (
      <div className='logs'>
        {
          logs.map((e, index) =>
            <Log key={index} data={e} deleteLog={deleteLog} index={index}/>)
        }
      </div>
    )
  }
}
