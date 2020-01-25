import { getAxiosInstance, DEFAULT_CONFIG } from '../getAxiosInstance';

import { mockedResponse } from '../../__mocks__/axios';

import mockAxios from 'axios';

afterEach(() => {
  jest.clearAllMocks();
});

describe('getAxiosInstance', () => {
  test('It exists', () => {
    expect(getAxiosInstance).toBeDefined();
    const client = getAxiosInstance();
    expect(client).toBeDefined();
  });

  test('it returns the correct AxiosInstance', async () => {
    const response = await getAxiosInstance().get('test', {
      params: { format: 'xml' }
    });

    expect(mockAxios.create).toBeCalledWith(DEFAULT_CONFIG);
    expect(mockAxios.get).toBeCalledWith('test', {
      params: { format: 'xml' }
    });
    expect(response).toEqual(mockedResponse);
  });

  test('it handles errors from axios by simply returning the error', () => {
    (mockAxios.create as any).mockImplementationOnce(
      () => new Error('mock error')
    );

    expect(getAxiosInstance()).toEqual(Error('mock error'));
  });

  test('custom paramSerializer functions correctly', async () => {
    const userConfig = { params: { modelYear: 1997, format: 'xml' } };

    const instance = getAxiosInstance(userConfig);
    const calledWith = { ...DEFAULT_CONFIG, ...userConfig };
    expect(instance).toBeDefined();
    expect(mockAxios.create).toBeCalledWith(calledWith);

    const queryString = await DEFAULT_CONFIG.paramSerializer(userConfig.params);
    expect(queryString).toEqual('?modelYear=1997&format=xml');
  });

  test('user defined config options take precendence over defaults', () => {
    const userConfig = {
      baseURL: 'www.testBaseURL.com/',
      params: { modelYear: 2009, format: 'xml' }
    };
    const instance = getAxiosInstance(userConfig);
    const calledWith = { ...DEFAULT_CONFIG, ...userConfig };

    expect(instance).toBeDefined();
    expect(mockAxios.create).toBeCalledWith(calledWith);
  });
});
