import axios, { AxiosRequestConfig, Method } from "axios";
import { baseURL, TIMEOUT } from "./config.ts";
import {
    handleRequestHeader,
    handleConfigAuth,
    handleNetworkError,
    handleAuthError,
} from './tool.ts';

type Fn = (data: FcResponse<any>) => unknown;

interface FcResponse<T> {
    errNo: number;
    errMsg: string;
    data: T;
}

//配置公共信息
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = baseURL;

//请求拦截器
axios.interceptors.request.use(config => {
    config = handleRequestHeader(config);
    config = handleConfigAuth(config);
    return config;
}, error => {
    return Promise.reject(error);
}
)

//响应拦截器
axios.interceptors.response.use(res => {
    if (res.status !== 200) {
        return Promise.reject(res.data);
    }
    handleAuthError(res.data.code);
    return res;
}, err => {
    handleNetworkError(err.status);
    return Promise.reject(err);
})

//处理请求并返回promise对象
/**
 * 
 * @param {*} method 请求方式
 * @param {*} url api路径
 * @param {*} ohterConfig 其他配置
 * @returns 
 */
function request<T = any>(method: Method, url?: string, ohterConfig: AxiosRequestConfig = {}) {
    return axios.request({ method, url, ...ohterConfig })
}


//封装get请求
export const Get = <T = any>(url: string, params: Object = {}) => {
    return request<T>('get', url, { params })
}

//封装post请求
export const Post = <T = any>(url: string, data: Object = {}, otherConfig: AxiosRequestConfig = {}) => {
    return request<T>('post', url, { data, ...otherConfig })
}

//封装put请求
export const Put = <T = any>(url: string, data: Object = {}, otherConfig: AxiosRequestConfig = {}) => {
    return request<T>('put', url, { data, ...otherConfig })
}

//封装delete请求
export const Delete = (url: string, pathParams: any[] = [], otherConfig: AxiosRequestConfig = {}) => {
    return request('delete', url + '/' + pathParams.join('/'), { ...otherConfig })
}