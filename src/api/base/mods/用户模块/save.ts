/**
        * @description 新增
id不需要填写，直接删除id那行
      */
import serverConfig from '@/utils/server.config';
import { initRequest } from '@/common';
import axios from 'axios';

const backEndUrl = serverConfig()['base'];

export async function fetch(data = {}) {
  const result = await axios.post(backEndUrl + `/user`, data, {
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
