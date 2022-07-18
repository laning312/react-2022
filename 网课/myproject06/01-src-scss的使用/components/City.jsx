import React, { Component } from 'react'
import axios from 'axios'
import './City.scss'

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
            <div className='citys'>
                {
                    keys.map(k =>
                        <div className='item' key={k}>
                             <h4 className='letter'>{k}</h4>
                             {
                                 citys[k].map(city => 
                                    <span className='city-name' key={city.id}>{city.name}</span>
                                )
                             }
                        </div>
                    )
                }
            </div>
        )
    }
}
