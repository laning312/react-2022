import React, { Component } from 'react'
import TestContext from '../store/TestContext'
import ComC from './ComC'

export default class ComB extends Component {

    state = {
        user: {}
    }

    oName = React.createRef()
    oAge = React.createRef()

    // user = {}  // 对象属性

    clickHandle = () => {
        console.log('rest....')
        const name = this.oName.current.value
        const age = this.oAge.current.value
        const user = {name, age}
        // this.user = user
        this.setState(
            {
                user
            }
        )
    }

    render() {
        return (
            <div className='comb'>
                <p>这是B组件</p>
                <TestContext.Consumer>
                    {v => 
                    <p>B组件得到的数据为：{v.name} - {v.age}</p>
                    }
                </TestContext.Consumer>

                <form action="">
                    name: <input type="text" ref={this.oName}/> <br />
                    age: <input type="text" ref={this.oAge}/> <br />
                    <input type="button" value="button" onClick={this.clickHandle}/>
                </form>

                <TestContext.Provider value={this.state.user}>
                 <ComC />
                </TestContext.Provider>
            </div>
        )
    }
}
