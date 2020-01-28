/*
 * Mocks cross-fetch to prevent making real http API calls during tests.
 */

import mockData from './mockData';

const mockedResponse = {
  mocked: true,
  headers: undefined,
  ok: true,
  redirected: false,
  status: 200,
  statusText: 'OK',
  url:
    'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/3VWD07AJ5EM388202?format=json',
  json: jest.fn(async () => {
    return Promise.resolve({
      ...mockData
    });
  })
};

const mockCrossFetch: any = jest.fn(() => Promise.resolve(mockedResponse));

export { mockedResponse, mockData };
export default mockCrossFetch;
