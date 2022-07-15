import React, { Component } from 'react'
import GoodsList from './component/GoodsList'
import SearchBox from './component/SearchBox'
import TestSwiper from './component/TestSwiper'
import './App.css'
import TestScorllX from './component/TestScorllX'

export default class App extends Component {
  render() {
    return (
      <div>
          {/* <SearchBox />
          <GoodsList /> */}
          {/* <TestSwiper /> */}
          <TestScorllX />
          <h3>test!!!</h3>
      </div>
    )
  }
}
