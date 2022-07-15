import axios from 'axios'
import React, { Component } from 'react'
import Header from '../components/Header'

export default class Detail extends Component {

    state = {
        goods: {}
    }

    componentDidMount() {
        const {id} = this.props.match.params
        axios.get('https://api.shop.eduwork.cn/api/goods/' + id).then(res => {
            console.log(res)
            this.setState({
                goods: res.data.goods
            })
        })
    }

    render() {
        return (
            <div>
                <Header />
                <h3>{this.state.goods.title}</h3>
                <div dangerouslySetInnerHTML={{__html:this.state.goods.details}}/>
            </div>
        )
    }
}
