import axios from "axios";

const request = axios.create({
    // baseURL: 'http://localhost:9000',
    baseURL: 'https://autumnfish.cn/'
})

// 请求拦截器
request.interceptors.request.use(
    config => {
        if(!config.params){
            config.params = {}
        }
        config.params.t = Date.now()
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// 响应拦截器
request.interceptors.response.use(
    res => {
        return res.data
    },
    err => {
        return Promise.reject(err)
    }
)

export default request