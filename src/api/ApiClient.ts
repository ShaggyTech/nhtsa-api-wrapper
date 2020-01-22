import { getAxiosInstance } from './getAxiosInstance';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

/** An extensible class wrapper around an Axios instance */
export class ApiClient {
  client: AxiosInstance;
  config: AxiosRequestConfig | undefined;

  constructor(requestConfig?: AxiosRequestConfig) {
    this.client = getAxiosInstance(requestConfig);
    this.config = requestConfig;
  }

  async get(
    url: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    return await this.client
      .get(url, config)
      .then(response => Promise.resolve(response))
      .catch(err => Promise.reject(err));
  }

  async post(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return await this.client
      .post(url, data, config)
      .then(response => Promise.resolve(response))
      .catch(err => Promise.reject(err));
  }
}
