import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Home from './pages/Home/Home'
import Resolve from './pages/Resolve'
import About from './pages/About'

import './App.css'
import { Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        {/* 制作导航菜单 */}
        <div className='tabs'>
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/resolve">解决方案</NavLink>
          <NavLink to="/about">关于我们</NavLink>
        </div>


        {/* 注册路由（其实就是路径和组件之间的映射关系 */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/resolve" component={Resolve} />
          <Route path="/about" component={About} />
          <Redirect to="/home" />
        </Switch>
      </div>
    )
  }
}
