import React, { Component } from 'react'
import {setCity} from '../store/city_action'
import store from '../store'

export default class City extends Component {

    setCity = e => {
        if(e.keyCode === 13) {
            store.dispatch(setCity(e.target.value))
        }
    }

    render() {
        return (
            <div>
                city:  <input type="text" onKeyUp={this.setCity} />  <br />
                {store.getState().city}
            </div>
        )
    }
}
