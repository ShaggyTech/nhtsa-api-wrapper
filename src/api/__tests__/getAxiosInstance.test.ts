import { getAxiosInstance } from '../getAxiosInstance';

import { mockedResponse } from '../../__mocks__/axios';

import mockAxios from 'axios';
jest.mock('axios');

describe('getAxiosInstance', () => {
  test('It exists', () => {
    expect(getAxiosInstance).toBeDefined();
    const client = getAxiosInstance();
    expect(client).toBeDefined();
  });

  test('it returns the correct AxiosInstance', async () => {
    const axiosGetResponse = await getAxiosInstance().get('test');
    expect(axiosGetResponse).toEqual(mockedResponse);
  });

  test('it handles errors from axios by simply returning the error', () => {
    (mockAxios as any) = {
      create: jest.fn(() => new Error('mock error'))
    };

    expect(getAxiosInstance()).toEqual(Error('mock error'));
  });
});
