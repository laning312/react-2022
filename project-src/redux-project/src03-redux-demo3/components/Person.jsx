import React, { Component } from 'react'
import {setPersonName, setPersonWeapon} from '../store/person_action'
import store from '../store'

export default class Person extends Component {

  
    setPersonName = e => {
        // store.dispatch(setPersonName(this.oName.current.value))
        if(e.keyCode === 13) {
            store.dispatch(setPersonName(e.target.value))
        }
    }

    setPersonWeapon = e => {
        // store.dispatch(setPersonWeapon(this.oWeapon.current.value))
        if(e.keyCode === 13) {
            store.dispatch(setPersonWeapon(e.target.value))
        }
     }

    render() {
        return (
            <div>
                name: <input type="text" onKeyUp={this.setPersonName}/><br />
                weapon: <input type="text" onKeyUp={this.setPersonWeapon}/> <br />
                <p>{store.getState().name} - {store.getState().weapon}</p>
            </div>
        )
    }
}
