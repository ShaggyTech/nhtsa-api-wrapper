import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

import { makeQueryString, QueryStringParameters } from '../utils';

export const BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles';

export const DEFAULT_CONFIG = {
  baseURL: BASE_URL,
  paramSerializer: function(params: QueryStringParameters) {
    return makeQueryString(params);
  }
};

/* Merge the Axios configs, giving user's config preference over defaults */
const mergeConfigs = (userConfig: AxiosRequestConfig): AxiosRequestConfig => {
  return { ...DEFAULT_CONFIG, ...userConfig };
};
/**
 * Creates a new Axios client instance
 */
export const getAxiosInstance = (
  requestConfig?: AxiosRequestConfig
): AxiosInstance => {
  // It's possible to do something with options before creating the instance
  let config: AxiosRequestConfig;

  if (requestConfig) {
    config = mergeConfigs(requestConfig);
  } else {
    config = DEFAULT_CONFIG;
  }

  const client = axios.create(config);

  // It's possible to add interceptors before returning the client
  return client;
};
