import React, { Component } from 'react'
import {addAction, subAction} from '../redux/count_action'
import store from '../redux/store'

export default class Count extends Component {

    // componentDidMount() {
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    oNumber = React.createRef()

    subNum = () => {
        const v = +this.oNumber.current.value
        store.dispatch(subAction(v))
    }

    addNum = () => {
        const v = +this.oNumber.current.value
        store.dispatch(addAction(v))
    }

    render() {
        return (
            <div>
                <input type="number" id="inputNumber" ref={this.oNumber}/> <br />
                <input type="button" id="subBtn" value="减少" onClick={this.subNum} />
                <span id="num">{store.getState().num}</span>
                <input type="button" id="addBtn" value="增加" onClick={this.addNum} />
            </div>
        )
    }
}
