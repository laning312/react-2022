import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { NavLink, Route } from 'react-router-dom'
import Cates from './Cates/Cates'
import Goods from './Goods/Goods'

import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='left'>
          <NavLink to="/home/cates">分类</NavLink>
          <NavLink to="/home/goods">商品</NavLink>
        </div>
        <div className='right'>
          {/* 路由注册 */}
          <Switch>
            <Route path="/home/cates" component={Cates}/>
            <Route path="/home/goods" component={Goods}/>
            <Redirect to="/home/goods" />
          </Switch>
        </div>
      </div>
    )
  }
}
