import React, { Component } from 'react'

import store from '../redux/store'

export default class Person extends Component {

    oName = React.createRef()
    oWeapon = React.createRef()

    updateName = () => {
        const data = this.oName.current.value
        store.dispatch({type: 'SET_NAME', data })
    }

    updateWeapon = () => {
        const data = this.oWeapon.current.value
        store.dispatch({type: 'SET_WEAPON', data })
    }

    render() {
        return (
            <div>
                <h3>Person组件</h3>
                姓名: <input type="text" ref={this.oName} /> <button onClick={this.updateName}>修改姓名</button><br />
                兵器: <input type="text" ref={this.oWeapon} /> <button onClick={this.updateWeapon}>修改兵器</button><br />
                <p>{store.getState().name} - {store.getState().weapon}</p>
            </div>
        )
    }
}
