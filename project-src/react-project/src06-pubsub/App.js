import React, { Component } from 'react'
import GoodsList from './component/GoodsList'
import SearchBox from './component/SearchBox'

export default class App extends Component {
  render() {
    return (
      <div>
          <SearchBox />
          <GoodsList />
      </div>
    )
  }
}
