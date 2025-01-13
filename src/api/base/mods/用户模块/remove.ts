/**
 * @description 根据id删除
 */
import serverConfig from '@/utils/server.config';
import { initRequest } from '@/common';
import axios from 'axios';

const backEndUrl = serverConfig()['base'];

export async function fetch(params = {}) {
  const result = await axios.delete(
    backEndUrl + `/user/${params['id']}`,
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
