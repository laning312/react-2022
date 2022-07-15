import React, { Component } from 'react'
import ComC from './ComC'

export default class ComB extends Component {
    render() {
        return (
            <div className='comb'>
                <p>这是B组件</p>
                <ComC />
            </div>
        )
    }
}
