/**
        * @description 修改权限
有些字段不需要的可以直接不传<br/>权限：admin.permission.update
      */
import serverConfig from '@/utils/server.config';
import { initRequest } from '@/common';
import axios from 'axios';

const backEndUrl = serverConfig()['base'];

export async function fetch(data = {}) {
  const result = await axios.put(backEndUrl + `/user/permission/`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (result) {
    return result.data;
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
