/** Special thanks to https://laravel-news.com/building-flexible-axios-clients */

import { getAxiosInstance } from './getAxiosInstance';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * Default HTTP Axios Client
 */
const baseClient = {
  /** A wrapper for axios.get() */
  async get(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse | Error> {
    return await getAxiosInstance()
      .get(url, config)
      .then(response => Promise.resolve(response))
      .catch(err => Promise.reject(err));
  },

  /** A wrapper for axios.post() */
  async post(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse | Error> {
    return getAxiosInstance()
      .post(url, data, config)
      .then(response => Promise.resolve(response))
      .catch(err => Promise.reject(err));
  }
};

export default baseClient;
