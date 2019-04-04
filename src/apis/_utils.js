import axios from 'axios';

const getHost = () => {
  let hostname = 'http://localhost:8000';
  if (process.env.NODE_ENV === 'production') {
    hostname = 'https://www.baidu.com';
  }
  return hostname;
};

export const wrapRequest = (url = '', config) => {
  return (data = {}, params = {}) => {
    request(data, params, url, config);
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
      url: baseUrl,
      data: data,
    }).then(function(response) {
      resolve(response.data);
    });
  });
};
