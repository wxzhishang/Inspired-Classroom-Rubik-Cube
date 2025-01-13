/**
        * @description 修改角色
permissions字段用于传输需要重新绑定的权限id(完全覆盖,不会在原有基础上增加或者删除)
权限：admin.role.update
      */
import serverConfig from '@/utils/server.config';
import { initRequest } from '@/common';
import axios from 'axios';

const backEndUrl = serverConfig()['base'];

export async function fetch(data = {}) {
  const result = await axios.put(backEndUrl + `/user/role/`, data, {
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
