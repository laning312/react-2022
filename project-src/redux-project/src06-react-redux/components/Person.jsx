import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPersonName, setPersonWeapon } from '../store/person_action'

// UI组件
class Person extends Component {


    setPersonName = e => {
        // this.props.dispatch(setPersonName(e.target.value))
        this.props.setPersonName(e.target.value)
    }

    setPersonWeapon = e => {
        // this.props.dispatch(setPersonWeapon(e.target.value))
        this.props.setPersonWeapon(e.target.value)
    }

    render() {
        console.log(this.props)
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
                <p>{this.props.name} - {this.props.weapon}</p>
            </div>
        )
    }
} 

// const mapStateToProps = state => state

// const mapDispatchToProps = dispatch => {
//     return {
//         setPersonName: name => dispatch(setPersonName(name)),
//         setPersonWeapon: weapon => dispatch(setPersonWeapon(weapon))
//     }
// }

// 容器组件
// export default connect(mapStateToProps, mapDispatchToProps)(Person)
export default connect(state => state, 
    {
        setPersonName,
        setPersonWeapon
    }
)(Person)
