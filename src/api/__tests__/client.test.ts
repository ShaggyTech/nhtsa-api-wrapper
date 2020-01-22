import mockAxios, { AxiosResponse, AxiosStatic } from 'axios';

import client from '../client';

import { mockedResponse } from '../../__mocks__/axios';

interface AxiosStaticMock extends AxiosStatic {
  mockImplementationOnce: Function;
  mockResolvedValue: Function;
  mockRejectedValue: Function;
}

jest.mock('axios');

afterEach(() => {
  jest.clearAllMocks();
});

describe('baseClient tests', () => {
  test('it exists', () => {
    expect(client).toBeDefined();
    expect(client).toEqual(expect.any(Object));
  });

  describe('get() function', () => {
    test('it returns the correct response', async () => {
      (mockAxios.get as AxiosStaticMock).mockImplementationOnce(() =>
        Promise.resolve(mockedResponse)
      );

      const result: AxiosResponse = await client
        .get('/testing/getendpoint', { baseURL: 'http://www.test.com/api' })
        .catch(err => err);

      expect(result).toEqual(mockedResponse);
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });

    test('it handles rejections from axios.get()', async () => {
      jest.spyOn(mockAxios, 'get').mockRejectedValue(new Error('mock error'));

      const result:
        | void
        | AxiosResponse<any>
        | Error = await client
        .get('/testing/getendpoint', { baseURL: 'http://www.test.com/api' })
        .catch(err => {
          expect(err).toEqual(Error('mock error'));
        });

      expect(result).toBeUndefined();
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('post() function', () => {
    test('it returns the correct response', async () => {
      (mockAxios.post as AxiosStaticMock).mockImplementationOnce(() =>
        Promise.resolve(mockedResponse)
      );

      const result: AxiosResponse = await client
        .post(
          '/testing/postendpoint',
          { data: 'test data' },
          { baseURL: 'http://www.test.com/api' }
        )
        .catch(err => err);

      expect(result).toEqual(mockedResponse);
      expect(mockAxios.post).toHaveBeenCalledTimes(1);
    });

    test('it handles rejections from axios.get()', async () => {
      jest.spyOn(mockAxios, 'post').mockRejectedValue(new Error('mock error'));

      const result: void | AxiosResponse<any> | Error = await client
        .post(
          '/testing/postendpoint',
          { data: 'test data' },
          { baseURL: 'http://www.test.com/api' }
        )
        .catch(err => {
          expect(err).toEqual(Error('mock error'));
        });

      expect(result).toBeUndefined();
      expect(mockAxios.post).toHaveBeenCalledTimes(1);
    });
  });
});
