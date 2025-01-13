/**
        * @description 根据角色查询权限
只会查询到id,用于数据回显
      */
import serverConfig from '@/utils/server.config';
import { initRequest } from '@/common';
import axios from 'axios';

const backEndUrl = serverConfig()['base'];

export async function fetch(params = {}) {
  const result = await axios.get(
    backEndUrl + `/user/permission/role/${params['roleId']}`,
    params,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  if (result) {
    return result.data;
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
