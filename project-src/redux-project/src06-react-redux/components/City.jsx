import React, { Component } from 'react'
import { connect } from 'react-redux'
// import store from '../store'

class City extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                city:  <input type="text" />  <br />
                {this.props.name}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(City)
