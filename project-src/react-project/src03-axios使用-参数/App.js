import React, { Component } from 'react'
import axios from 'axios'

import './App.css'

/**
 * 获取首页数据
 * 1. 安装axios包
 * 2. 按照使用说明发送get请求
 * 3. 得到数据并处理
 */
export default class App extends Component {

    state = {
        page: 1,
        goods: []
    }

    // 定义ref
    currPage = React.createRef()

    componentDidMount() {
       this.getData()
    }

    getData = () => {
         // 调用axios的get/post方法发送请求
         axios.get(`https://api.shop.eduwork.cn/api/index?page=${this.state.page}`)
         .then(res => {
             console.log(res)
             if(res.status === 200) {
                 this.setState({
                     page: res.data.goods.current_page,
                     goods: res.data.goods.data
                 })
             }
         })
    }

    queryData = () => {
        // 拿到输入的页码
        // setState是异步的，要保证设置页码后再调用getData方法的话，需要将其写在回调函数中
        this.setState({
            page: this.currPage.current.value
        }, () => {
            this.getData()
        })
        
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="请输入页码" ref={this.currPage}/> 
                <button onClick={this.queryData}>查询</button>
                <h3>当前页: {this.state.page}</h3>
                {
                    this.state.goods.map(e => 
                        <div className='item' key={e.id}>
                            <h4>{e.title}</h4>
                            <img src={e.cover_url} />
                        </div>
                    )
                }
            </div>
        )
    }
}
