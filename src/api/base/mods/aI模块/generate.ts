/**
        * @description AI生成教案
message 暂定为生成教案的标题
      */
import serverConfig from '@/utils/server.config';
import { initRequest } from '@/common';
import axios from 'axios';

const backEndUrl = serverConfig()['base'];

export async function fetch(params = {}) {
  const result = await axios.post(backEndUrl + `/ai/generate`, params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  if (result) {
    return result.data;
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
