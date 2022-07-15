import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class SearchBox extends Component {

    sendData = () => {
        PubSub.publish('pageNumber', 9)
    }

    render() {
        return (
            <div>
                <button onClick={this.sendData}>发布数据</button>
            </div>
        )
    }
}
