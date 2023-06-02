import axios, { type AxiosRequestConfig } from "axios"
import { ElMessage } from 'element-plus'

class Request {
    baseURL: string
    timeout: number
    constructor() {
        this.baseURL = import.meta.env.MODE === 'development' ? 'http://localhost:5000/api/' : '/api/'
        this.timeout = 1000000
    }
    request(config: AxiosRequestConfig<any>) {
        const instance = axios.create({
            baseURL: this.baseURL,
            timeout: this.timeout,
        })
        // 设置拦截器
        instance.interceptors.request.use((config) => {
            config.headers!.Authorization = localStorage.getItem('token')
            return config
        }, err => Promise.reject(err))
        // 设置响应拦截器
        instance.interceptors.response.use(res => res, err => {
            if (!err.response && err.message) {
                ElMessage.error({
                    dangerouslyUseHTMLString: true,
                    message: `<strong>${err.message}</strong>`,
                    duration: 5000,
                })
            }
            else if (err.response && err.response.status == 500) {
                let msg = '内部服务错误'
                if (err.response.data) msg = err.response.data
                else msg = `Code ${err.response.status}: ${err.response.statusText}`
                ElMessage.error({
                    dangerouslyUseHTMLString: true,
                    message: `<strong>${msg}</strong>`,
                    duration: 5000,
                })
            }
            else throw err
        })

        return instance(config)
    }
}
export default new Request()
