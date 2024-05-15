import { apiEndpoint, fetchAPI, requestConfig } from '../config/api';

export const getAll = async () => {
  const config = requestConfig('GET');
  return await fetchAPI(`${apiEndpoint}/todos`, config);
};
