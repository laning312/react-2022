import React, { Component } from 'react'

export default class Search extends Component {

    state = {
        search: ''
    }

    searchLogs = () => {
        this.props.getLogsBySearch(this.state.search)
    }

    saveSearch = e => {
        this.setState(
            {
                search: e.target.value
            }
        )
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.saveSearch}/>
                <button onClick={this.searchLogs}>Search</button>
            </div>
        )
    }
}
