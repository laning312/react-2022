import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Detail from './Detail/Detail'

import './Goods.css'

export default class Goods extends Component {
  state = {
    goodsList: [
      { id: 1, title: 'AAA', desc: 'aaaaaaaaaaaaa' },
      { id: 2, title: 'BBB', desc: 'bbbbbbbbbbbbb' },
      { id: 3, title: 'CCC', desc: 'ccccccccccccc' }
    ]
  }
  render() {
    return (
      <div className='goods'>
        <div className='list'>
          {this.state.goodsList.map(e => <Link key={e.id} to={`/home/goods/detail?id=${e.id}&title=${e.title}`}>{e.title}</Link>)}
        </div>
        <hr />
        {/* 路由注册 */}
        <Route path="/home/goods/detail" component={Detail}/>
      </div>
    )
  }
}
