/*
 * Mocks cross-fetch to prevent making real http API calls during tests.
 */

import mockData from './mockData';

const mockedResponse = {
  headers: 'mocked-headers',
  ok: true,
  redirected: false,
  status: 200,
  statusText: 'OK',
  url: 'mocked-url',
  json: jest.fn(async () => {
    return Promise.resolve({
      ...mockData,
    });
  }),
};

const mockCrossFetch: any = jest.fn(() => Promise.resolve(mockedResponse));

export { mockedResponse, mockData };
export default mockCrossFetch;
