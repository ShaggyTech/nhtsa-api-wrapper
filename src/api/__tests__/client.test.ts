import mockAxios, { AxiosResponse, AxiosStatic } from 'axios';

import client from '../client';
import { ApiClient } from '../client';

import { mockedResponse } from '../../__mocks__/axios';

interface AxiosGetMock extends AxiosStatic {
  mockImplementationOnce: Function;
  mockResolvedValue: Function;
  mockRejectedValue: Function;
}

jest.mock('axios');

afterEach(() => {
  jest.clearAllMocks();
});

describe('baseClient tests', () => {
  test('It exists', () => {
    expect(client).toBeDefined();
    expect(client).toEqual(expect.any(Object));
  });

  test('it uses mocked axios response from the nearest __mocks__ folder', async () => {
    (mockAxios.get as AxiosGetMock).mockImplementationOnce(() =>
      Promise.resolve(mockedResponse)
    );

    const result: AxiosResponse = await client
      .get('testurl.com/api')
      .catch(err => err);

    expect(result).toEqual(mockedResponse);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  test('mocked axios.get rejects with mocked error inside axios.get()', async () => {
    jest.spyOn(mockAxios, 'get').mockRejectedValue(new Error('mock error'));

    const result: AxiosResponse = await client
      .get('testurl.com/api')
      .catch(err => {
        expect(err).toEqual(Error('mock error'));
      });
    expect(result).toBeUndefined();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});

describe('ApiClient class tests', () => {
  test('It exists', () => {
    const API = new ApiClient();
    expect(ApiClient).toBeDefined();
    expect(API).toBeTruthy();
    expect(API).toBeInstanceOf(ApiClient);
  });

  test('Class Constructor', () => {
    const API = new ApiClient({ baseURL: 'http://www.test.com/api' });
    expect(API).toBeDefined;
  });
});
