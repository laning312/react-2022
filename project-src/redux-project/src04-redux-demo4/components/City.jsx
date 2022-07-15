import React, { Component } from 'react'
import store from '../store'

export default class City extends Component {
    render() {
        return (
            <div>
                city:  <input type="text" />  <br />
                {store.getState().name}
            </div>
        )
    }
}
