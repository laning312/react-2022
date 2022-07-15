import React, { Component } from 'react'

import {connect} from 'react-redux'
import {updateWeapon, updateName} from '../redux/person_action'

class Person extends Component {

    oName = React.createRef()
    oWeapon = React.createRef()

    updateName = () => {
        const data = this.oName.current.value
        this.props.updateName(data)
    }

    updateWeapon = () => {
        const data = this.oWeapon.current.value
        this.props.updateWeapon(data)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Person组件</h3>
                姓名: <input type="text" ref={this.oName} /> <button onClick={this.updateName}>修改姓名</button><br />
                兵器: <input type="text" ref={this.oWeapon} /> <button onClick={this.updateWeapon}>修改兵器</button><br />
                <p>{this.props.name} - {this.props.weapon}</p>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     console.log(state)
//     return {
//         ...state
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         updateName: name => dispatch(createSetNameAction(name)),
//         updateWeapon: weapon => dispatch(createSetWeaponAction(weapon))
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Person)
export default connect(
    state => ({...state}),
    {
        updateName,
        updateWeapon
    })(Person)
