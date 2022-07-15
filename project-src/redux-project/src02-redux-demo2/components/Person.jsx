import React, { Component } from 'react'
import {setPersonName, setPersonWeapon} from '../store/person_action'
import store from '../store'

export default class Person extends Component {

    oName = React.createRef()
    oWeapon = React.createRef()

    setPersonName = () => {
        store.dispatch(setPersonName(this.oName.current.value))
    }

    setPersonWeapon = () => {
        store.dispatch(setPersonWeapon(this.oWeapon.current.value))
     }

    render() {
        return (
            <div>
                name: <input type="text" ref={this.oName}/> <input type="button" value="修改姓名" onClick={this.setPersonName} /><br />
                weapon: <input type="text" ref={this.oWeapon}/> <input type="button" value="修改兵器" onClick={this.setPersonWeapon} /> <br />
                <p>{store.getState().name} - {store.getState().weapon}</p>
            </div>
        )
    }
}
