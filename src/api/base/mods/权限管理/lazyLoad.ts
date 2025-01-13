/**
        * @description 级联权限懒加载
表格数据渲染<br/>权限：admin.permission
      */
import serverConfig from '@/utils/server.config';
import { initRequest } from '@/common';
import axios from 'axios';

const backEndUrl = serverConfig()['base'];

export async function fetch(params = {}) {
  const result = await axios.get(
    backEndUrl + `/user/permission/lazyLoad/${params['parentId']}`,
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
