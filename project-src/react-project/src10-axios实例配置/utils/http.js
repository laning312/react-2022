import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.shop.eduwork.cn'
})

export default http