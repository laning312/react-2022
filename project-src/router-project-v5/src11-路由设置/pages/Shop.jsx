import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class About extends Component {
  
  state = {
    list: []
  }

  componentDidMount() {
    axios.get('https://api.shop.eduwork.cn/api/goods').then(res => {
      console.log(res)
      this.setState({
        list: res.data.goods.data
      })
    })
  }

  render() {
    return (
      <div>
        <h3>商品列表</h3>
        {
          this.state.list.map(e => 
            <p key={e.id}>
              <Link to={`/detail/${e.id}`}>{e.title}</Link>
            </p>
            )
        }
      </div>
    )
  }
}
