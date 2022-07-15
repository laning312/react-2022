import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Resolve from './pages/Resolve'
import About from './pages/About'

import './App.css'
import { Switch } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        {/* 制作导航菜单 */}
        <div className='tabs'>
          {/* <a href="/home">首页</a>
          <a href="/resolve">解决方案</a>
          <a href="/about">关于我们</a> */}

          <Link to="/home">首页</Link>
          <Link to="/resolve">解决方案</Link>
          <Link to="/about">关于我们</Link>
        </div>


        {/* 注册路由（其实就是路径和组件之间的映射关系 */}
        <Route exact path="/" component={Home} />
        <Route exact path="/resolve" component={Resolve} />
        <Route  exact path="/about" component={About} />
      </div>
    )
  }
}
