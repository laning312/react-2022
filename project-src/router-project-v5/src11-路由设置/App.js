import React, { Component } from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'

import Layout from './pages/Layout'
import Detail from './pages/Detail'
import City from './pages/City'

import './assets/css/iconfont.css'
import './App.css'


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        {/* 注册路由 */}
        <Switch>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/city" component={City} />
          <Route path="/" component={Layout}/>
        </Switch>
      </div>
    )
  }
}
