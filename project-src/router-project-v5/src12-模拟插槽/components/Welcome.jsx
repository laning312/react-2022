import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        /*  <div>Welcome, {this.props.name}</div> */
        console.log(this)
        return (
            <div>welcome, {this.props.children}</div>
        )
    }
}
