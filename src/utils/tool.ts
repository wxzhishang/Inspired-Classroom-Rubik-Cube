import { message } from "antd";

export const handleRequestHeader = (config: any) => {
    // config[''] = '';

    return config;
}

export const handleConfigAuth = (config: any) => {
    // config.headers.withCredentials = true;
    // console.log(useUserStore.getState().token);
    config.headers.Authorization = `${localStorage.getItem('token') || "6b1d4a13797a423ca3d003993975f37d"}`;
    return config;
}

export const handleNetworkError = (errorStatus?: number): void => {
    const networkErrorMap: Map<number, string> = new Map([
        [400, '请求错误'],
        [401, '未授权,请重新登录'],
        [403, '禁止访问'],
        [404, '请求错误，未找到该资源'],
        [405, '请求方法未允许'],
        [408, '请求超时'],
        [500, '服务器内部错误'],
        [501, '服务未实现'],
        [502, '网关错误'],
        [503, '服务不可用'],
        [504, '网关超时'],
        [505, 'HTTP版本不受支持'],
    ]);

    if (errorStatus) {
        message.error(networkErrorMap.get(errorStatus));
        return;
    }

    message.error('无法连接到服务器');
}

export const handleAuthError = (errNo: number): void => {
    const authErrorMap: Map<number, string> = new Map([
        [205, '验证码已过期！'],
        [229, '该用户名已存在！'],
        [250, '登录信息失效，请重新登录！'],
        [255, '用户不存在！'],
        [265, '不能为空！'],
        [268, '未找到该角色！'],
        [269, '信息有误或缺失，导入失败！'],
        [275, '格式错误！'],
        [277, '导出失败！'],
        [285, '验证码错误！'],
        [290, '密码错误！'],
        [291, '两次密码不一致！'],
        [295, '发送失败，请稍后重试！'],
        [300, '未登陆，请登陆后再进行操作！'],
        [305, '登录已过期，请重新登录！'],
        [400, '参数异常！'],
        [403, '没有操作权限！'],
        [404, '当前查询的数据不存在，请稍后再试！'],
        [429, '访问频繁，请稍后再试！'],
        [500, '服务异常！'],
        [501, '系统维护中，请稍后！'],
        [502, '服务器异常！']
    ])

    if (authErrorMap.get(errNo)) {
        message.error(authErrorMap.get(errNo));
        return;
    }
}