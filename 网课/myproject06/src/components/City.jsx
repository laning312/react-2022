import React, { Component } from 'react'
import axios from 'axios'

export default class City extends Component {

    state = {
        keys: [],
        citys: {}
    }

    componentDidMount() {
        axios.get('https://elm.cangdu.org/v1/cities?type=group').then(res => {
            // console.log(res)
            // const citys = res.data
            // console.log(citys)
            // console.log(Object.keys(res.data))
            this.setState({
                keys: Object.keys(res.data).sort(),
                citys: res.data
            })
        })
    }

    render() {
        const {keys, citys} = this.state
        return (
            <div>
                {
                    keys.map(k =>
                        <div key={k}>
                             <h4>{k}</h4>
                             {
                                 citys[k].map(city => 
                                    <span key={city.id} style={{marginRight: '10px'}}>{city.name}</span>
                                )
                             }
                        </div>
                    )
                }
            </div>
        )
    }
}
