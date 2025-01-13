/**
        * @description 上传文件
上传图片的通用接口，只能上传图片，且图片大小不超过3M(如果嫌小可以在配置文件中改大，不过消耗的流量也会因此增大)，返回结果即为图片地址
      */
import serverConfig from '@/utils/server.config';
import { initRequest } from '@/common';
import axios from 'axios';

const backEndUrl = serverConfig()['base'];

export async function fetch(data = {}) {
  const result = await axios.post(backEndUrl + `/file/upload`, data, {
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
