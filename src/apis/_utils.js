import axios from 'axios';

const getHost = () => {
  let hostname = 'http://localhost:8000';
  if (process.env.NODE_ENV === 'production') {
    hostname = 'https://www.baidu.com';
  }
  return hostname;
};

export const wrapRequest = (url = '', mock = false) => {
  return (data = {}, params = {}) => {
    request(data, params, url, mock);
  };
};

export const request = (data, params, url, mock) => {
  const base = {
    method: 'POST',
  };

  const origin = mock ? 'mock' : 'apis';

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
