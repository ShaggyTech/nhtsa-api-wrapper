/*
 * Mocks Axios to prevent making real axios API calls during tests.
 */

import { AxiosResponse } from 'axios';

export const mockedData = {
  message: 'This Axios response is being mocked from ./src/__mocks__/axios.ts',
  mockedFrom: './src/__mocks__/axios.ts'
};

export const mockedResponse: AxiosResponse = {
  // `data` is the response that was provided by the server
  //  we're mocking it here with our mockedData
  data: mockedData,
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  request: {}
};

const mockAxios: any = jest.genMockFromModule('axios');
mockAxios.create = jest.fn(() => mockAxios);
mockAxios.get = jest.fn(() => Promise.resolve(mockedResponse));
mockAxios.post = jest.fn(() => Promise.resolve(mockedResponse));

export default mockAxios;
