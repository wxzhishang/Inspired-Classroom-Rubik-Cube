import axios from "axios";

//暂时这样，等待后端返回真实的
export const codeMessage: Record<number, string> = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '没有权限，请向管理员申请权限。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
  405: 'xxxx',
}

export const initRequest = async () => {
  /** 这边可对接口请求做一些统一的封装 */
  const request = axios.create();

  request.interceptors.request.use(
    config => {
      // 在发送请求之前做些什么
      return config;
    },
    error => {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  )
  return request;
};