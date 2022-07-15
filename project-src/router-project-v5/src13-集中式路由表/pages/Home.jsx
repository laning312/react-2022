import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link, withRouter} from 'react-router-dom'
import HomeCates from './HomeCates'
import HomeGoods from './HomeGoods'


class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>
          <Link to='/home/cates'>cates</Link>
        </p>
        <p>
          <Link to='/home/goods'>goods</Link>
        </p>
        <hr />
        {/* 注册路由 */}
        {this.props.children.props.children}
      </div>
    )
  }
}


export default withRouter(Home)

