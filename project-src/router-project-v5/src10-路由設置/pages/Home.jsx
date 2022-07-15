import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  state = {
    list: [
      {id: 1, title: '商品一'}, 
      {id: 2, title: '商品二'}, 
      {id: 3, title: '商品三'}
    ]
  }
  render() {
    return (
      <div>
        {this.state.list.map(e => 
          <p  key={e.id}>
            <Link to="/detail">{e.title}</Link>
          </p>
        )}
      </div>
    )
  }
}
