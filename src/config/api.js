export const apiEndpoint = import.meta.env.VITE_ENDPOINT_API || '';

export const requestConfig = (method, data = null) => {
  const config = {
    method,
    headers: {
      Accept: 'application/json',
    },
  };

  if (['POST', 'PUT', 'PATCH'].includes(method)) {
    config.body = JSON.stringify(data);
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
};

export const fetchAPI = async (url, config) => {
  const response = await fetch(url, config);
  return await response.json();
};
