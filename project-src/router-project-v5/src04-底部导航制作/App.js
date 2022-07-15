import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import Home from './pages/Home'
import Shop from './pages/Shop'

import './assets/css/iconfont.css'
import './App.css'
import { Redirect } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        {/* 底部导航部分 */}
        <div className='tabsbar'>
          <NavLink className='item' to="/home">
            <i className='iconfont icon-home'></i>
            <span>首页</span>
          </NavLink>
          <NavLink className='item' to="/shop">
            <i className='iconfont icon-shop'></i>
            <span>商城</span>
          </NavLink>
          <NavLink className='item' to="/service">
            <i className='iconfont icon-service'></i>
            <span>服务</span>
          </NavLink>
          <NavLink className='item' to="/profile">
            <i className='iconfont icon-me'></i>
            <span>我的</span>
          </NavLink>
        </div>
        {/* 内容区 */}
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/shop' component={Shop}/>
          {/* <Route path='/service' component={}/>
          <Route path='/profile' component={}/> */}
        </Switch>
      </div>
    )
  }
}
