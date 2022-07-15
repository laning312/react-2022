import React, { Component, lazy, Suspense } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

// import Home from './pages/Home'
const Home = lazy(() => import('./pages/Home'))
const Shop = lazy(() => import('./pages/Shop'))
const Service = lazy(() => import('./pages/Service'))
const Profile = lazy(() => import('./pages/Profile'))

import Loading from './components/Loading'

import './assets/css/iconfont.css'
import './App.css'

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
          <Suspense fallback={<Loading />}>
            <Route path='/home' component={Home} />
            <Route path='/shop' component={Shop} />
            <Route path='/service' component={Service} />
            <Route path='/profile' component={Profile} />
          </Suspense>
        </Switch>
      </div>
    )
  }
}
