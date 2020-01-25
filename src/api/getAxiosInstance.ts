import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

import { getTypeof, makeQueryString, QueryStringParameters } from '../utils';

export const BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles';

export const DEFAULT_CONFIG = {
  baseURL: BASE_URL,
  paramSerializer: async (params: QueryStringParameters) => {
    return await makeQueryString(params);
  }
};

/**
 * Creates a new Axios client instance
 */
export const getAxiosInstance = (
  requestConfig?: AxiosRequestConfig
): AxiosInstance => {
  // It's possible to modify the config before creating the instance
  let config: AxiosRequestConfig;

  if (getTypeof(requestConfig) === 'object') {
    config = { ...DEFAULT_CONFIG, ...requestConfig };
  } else {
    config = { ...DEFAULT_CONFIG };
  }

  const client: AxiosInstance = axios.create(config);

  // It's possible to add interceptors or modify the axios defaults before returning the client
  return client;
};
