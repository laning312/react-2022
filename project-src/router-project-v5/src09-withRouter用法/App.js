import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

import './App.css'
import { Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import HeaderNav from './components/HeaderNav'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <HeaderNav />
        <hr />
        <div className='tabs'>
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/about">关于我们</NavLink>
        </div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Redirect to="/home" />
        </Switch>
      </div>
    )
  }
}
