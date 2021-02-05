import axios from 'axios'
import Api from './service'
import { Message } from 'element-ui'

axios.interceptors.request.use(
    config => {// 在发送请求之前做些什么
        return config;
    },
    error => {// 对请求错误做些什么
        Message({ message: '请求失败', type: 'error' });
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axios.interceptors.response.use(
    response => {// 对响应数据做点什么
        return response;
    },
    error => {// 对响应错误做点什么
        Message({ message: '获取数据失败', type: 'error' });
        return Promise.reject(error);
    }
);

export const Get = <T, U>(url: T, params: U) => {
    return axios.get(`http://${Api.url}${url}`, {
        params: params
    }).then(res => res.data)
}

export const Post = <T, U>(url: T, params: U) => {
    return axios.get(`http://${Api.url}${url}`, {
        params: params
    }).then(res => {
        return res.data
    })
}