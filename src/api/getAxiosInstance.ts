import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

/**
 * Creates a new Axios client instance
 */
export const getAxiosInstance = (
  requestConfig?: AxiosRequestConfig
): AxiosInstance => {
  // It's possible to do something with options before creating the instance
  const client = axios.create(requestConfig);
  // It's possible to add interceptors before returning the client
  return client;
};
