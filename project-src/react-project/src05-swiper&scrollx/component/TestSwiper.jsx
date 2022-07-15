import React, { Component } from 'react'
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default class TestSwiper extends Component {

    state = {
        slides: []
    }

    async componentDidMount() {
        
        const { data: { slides } } = await axios.get('https://api.shop.eduwork.cn/api/index')
        console.log(slides)
        this.setState({
            slides
        }, () => {
            new Swiper('.swiper-container', {
                // loop: true, // 循环模式选项
                autoplay: 3000,
                pagination : '.swiper-pagination'
            })
        })
    }

    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.state.slides.map(e =>
                            <div className="swiper-slide" key={e.id}>
                                <img src={e.img_url} />
                            </div>
                        )
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}
