import axios from 'axios';
import { okMsg, errorMsg } from '@/utils/msg';

const getHost = () => {
  let hostname = 'http://localhost:8000';
  if (process.env.APP_KEY === 'pre') {
    hostname = 'https://www.google.com';
  }
  if (process.env.APP_KEY === 'production') {
    hostname = 'https://www.baidu.com';
  }
  return hostname;
};

export const wrapRequest = (url = '', config) => {
  return (data = {}, params = {}) => {
    // 返回一个promise的request
    return request(data, params, url, config);
  };
};

export const request = (data, params, url, config) => {
  const base = {
    method: 'POST',
    ...config,
  };

  const origin = base.mock ? 'mock' : 'apis';

  const baseUrl = `${getHost()}/${origin}/${url}`;

  params = { ...base, ...params };

  const { method } = params;

  return new Promise((resolve, reject) => {
    axios({
      method: method,
      // 客户端发送服务端的数据格式为json
      headers: { 'content-type': 'application/json; charset=utf-8' },
      url: baseUrl,
      data: data,
      // 服务器将响应的数据类型只接收json格式
      responseType: 'json',
    })
      .then(function(response) {
        const { data } = response;
        if (!data) {
          errorMsg('服务器未响应数据');
          return;
        }
        if (params.okMsg) {
          okMsg(params.okMsg);
        }
        resolve(data);
      })
      .catch(error => {
        console.info(error);
        errorMsg(params.okMsg || '服务器未响应数据');
      });
  });
};
