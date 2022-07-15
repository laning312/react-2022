import React, { Component } from 'react'
import HomeGoods from '../pages/HomeGoods'
import HomeCates from '../pages/HomeCates'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Service from '../pages/Service'
import Profile from '../pages/Profile'

import { Switch, Route } from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <Switch>
                {/* <Route path='/home' component={Home}/> */}
                <Home path="/home">
                    <Switch>
                        <Route path="/home/cates" component={HomeCates} />
                        <Route path="/home/goods" component={HomeGoods} />
                    </Switch>
                </Home>
                <Route path='/shop' component={Shop} />
                <Route path='/service' component={Service} />
                <Route path='/profile' component={Profile} />
            </Switch>
        )
    }
}
