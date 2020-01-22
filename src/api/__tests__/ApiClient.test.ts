import { ApiClient } from '../ApiClient';

import { AxiosRequestConfig } from 'axios';

jest.mock('axios');

afterEach(() => {
  jest.clearAllMocks();
});

describe('ApiClient class tests', () => {
  test('It exists', () => {
    const API = new ApiClient();
    expect(ApiClient).toBeDefined();
    expect(API).toBeTruthy();
    expect(API).toBeInstanceOf(ApiClient);
  });

  test('it properly constructs the class ', () => {
    const config: AxiosRequestConfig = { baseURL: 'http://www.test.com/api' };
    const API = new ApiClient(config);
    expect(API).toBeDefined;
    expect(API.client).toBeDefined;
    expect(API.config).toStrictEqual(config);
  });
});
