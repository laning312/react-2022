import React, { Component } from 'react'
import PubSub from 'pubsub-js'

// 订阅方
export default class GoodsList extends Component {

    componentDidMount() {
        // 在此订阅消息
        PubSub.subscribe('pageNumber', (msg, data) => {
            console.log(msg, data)
        })
        // 通过axios获取后台数据
    }

    render() {
        return (
            <div>GoodsList</div>
        )
    }
}
