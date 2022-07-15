import React, { Component } from 'react'
import { setPersonName, setPersonWeapon } from '../store/person_action'
import store from '../store'

export default class Person extends Component {


    setPersonName = e => {
        store.dispatch(setPersonName(e.target.value))
    }

    setPersonWeapon = e => {
        store.dispatch(setPersonWeapon(e.target.value))
    }

    render() {
        return (
            <div>
                name:
                <select onChange={this.setPersonName}>
                    <option value="">--请选择--</option>
                    <option value="刘备">刘备</option>
                    <option value="关羽">关羽</option>
                    <option value="张飞">张飞</option>
                </select>
                <br />
                weapon:
                <select onChange={this.setPersonWeapon}>
                    <option value="">--请选择--</option>
                    <option value="双股剑">双股剑</option>
                    <option value="青龙偃月刀">青龙偃月刀</option>
                    <option value="丈八蛇矛">丈八蛇矛</option>
                </select>
                <br />
                <p>{store.getState().name} - {store.getState().weapon}</p>
            </div>
        )
    }
}
