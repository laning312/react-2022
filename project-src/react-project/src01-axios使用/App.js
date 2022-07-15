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
        slides: []
    }

    componentDidMount() {
        // 调用axios的get/post方法发送请求
        axios.get('https://api.shop.eduwork.cn/api/index')
            .then(res => {
                console.log(res)
                if(res.status === 200) {
                    this.setState({
                        slides: res.data.slides
                    })
                }
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.slides.map(e => 
                        <div className='item' key={e.id}>
                            <img src={e.img_url} />
                        </div>
                    )
                }
            </div>
        )
    }
}
