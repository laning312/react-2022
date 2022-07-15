import axios from 'axios'
import { getToken, removeToken } from './token'

const http = axios.create({
    baseURL: 'https://api.shop.eduwork.cn'
})

// 对请求进行拦截
http.interceptors.request.use(config => {
    const token = getToken()
    if(token) {
        config.headers.Authorization = 'Bearer ' + token
    }
    return config
}, err=> {
    return Promise.reject(error)
})

//对响应进行拦截
http.interceptors.response.use(response => {
    return response
}, err => {
    const {status} = err.response
    if(status >= 400 && status < 500) 
        removeToken()
    return Promise.reject(err)
})


export default http