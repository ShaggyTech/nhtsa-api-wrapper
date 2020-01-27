/*
 * Mocks cross-fetch to prevent making real http API calls during tests.
 */

import mockData from './mockData';

const mockedResponse = {
  json: () => {
    return {
      ...mockData
    };
  }
};

const mockCrossFetch: any = jest.fn(() => Promise.resolve(mockedResponse));

export { mockedResponse };
export default mockCrossFetch;
