/**
        * @description 删除权限
根据id进行权限表的删除<br/>权限：admin.permission.delete
      */
import serverConfig from '@/utils/server.config';
import { initRequest } from '@/common';
import axios from 'axios';

const backEndUrl = serverConfig()['base'];

export async function fetch(params = {}) {
  const result = await axios.delete(
    backEndUrl + `/user/permission/${params['id']}`,
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
