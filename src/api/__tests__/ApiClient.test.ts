import { ApiClient } from '../ApiClient';

import { AxiosRequestConfig } from 'axios';
import mockAxios from 'axios';

import { mockedResponse } from '../../__mocks__/axios';

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

describe('API Action - DecodeVin', () => {
  test('it succeeds with no parms provided', async () => {
    const API = new ApiClient();
    const result = await API.DecodeVin('3VWD07AJ5EM388202');

    expect(mockAxios.get).toBeCalled();
    expect(result).toEqual(mockedResponse);
  });
});
