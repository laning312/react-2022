import React, { Component } from 'react'

export default class Detail extends Component {

    getDataById = id => {
        const data = [
            { id: 1, title: 'AAA', desc: 'aaaaaaaaaaaaa' },
            { id: 2, title: 'BBB', desc: 'bbbbbbbbbbbbb' },
            { id: 3, title: 'CCC', desc: 'ccccccccccccc' }
        ]

        return data.find(e => e.id == id)
    }

    componentDidMount() {
        console.log('componentDidMount .....')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate ....')
    }

    render() {
        // const {id, title, desc} = this.state.goodsDetail
        console.log('render....')
        const { id } = this.props.match.params
        const goodsDetail = this.getDataById(id)
        return (
            <div>
                <p>id: {goodsDetail.id}</p>
                <p>title: {goodsDetail.title}</p>
                <p>desc: {goodsDetail.desc}</p>
            </div>
        )
    }
}
