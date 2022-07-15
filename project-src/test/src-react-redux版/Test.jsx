import React, { Component } from 'react'
import axios from 'axios'

export default class Test extends Component {
    componentDidMount() {
        axios.post('http://192.168.0.90:8888/api/reg', {username: 'aaa', password: '111'}).then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div>Test</div>
        )
    }
}
