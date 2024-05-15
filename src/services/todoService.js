import { apiEndpoint, fetchAPI, requestConfig } from '../config/api';

export const getAll = async () => {
  const config = requestConfig('GET');
  return await fetchAPI(`${apiEndpoint}/todos`, config);
};

export const addTodo = async (data) => {
  const config = requestConfig('POST', data);
  return await fetchAPI(`${apiEndpoint}/todos`, config);
};

export const updateTodo = async (data, id) => {
  const config = requestConfig('PATCH', data);
  return await fetchAPI(`${apiEndpoint}/todos/${id}`, config);
};
