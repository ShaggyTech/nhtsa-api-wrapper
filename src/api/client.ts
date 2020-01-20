/** Special thanks to https://laravel-news.com/building-flexible-axios-clients */

import { getClient } from './getClient';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

class ApiClient {
  client: AxiosInstance;

  constructor(requestConfig?: AxiosRequestConfig) {
    this.client = getClient(requestConfig);
  }

  async get(url: string, config: AxiosRequestConfig = {}): Promise<any> {
    return await this.client
      .get(url, config)
      .then(response => Promise.resolve(response))
      .catch(err => Promise.reject(err));
  }

  async post(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<any> {
    return await this.client
      .post(url, data, config)
      .then(response => Promise.resolve(response))
      .catch(err => Promise.reject(err));
  }
}

/**
 * Base HTTP Client
 */
const baseClient = {
  async get(url: string, config?: AxiosRequestConfig): Promise<any> {
    return await getClient()
      .get(url, config)
      .then(response => Promise.resolve(response))
      .catch(err => Promise.reject(err));
  },

  async post(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<any> {
    return getClient()
      .post(url, data, config)
      .then(response => Promise.resolve(response))
      .catch(err => Promise.reject(err));
  }
};

export { ApiClient };
export default baseClient;
