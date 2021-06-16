import { DecodeWMI } from '../DecodeWMI';
import { Fetch } from '../../Fetch';

import mockData from '../../../__mocks__/mockData';

const ACTION = 'DecodeWMI';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new DecodeWMI();
};

describe('NHTSA.DecodeWMI()', () => {
  let client: DecodeWMI;

  beforeEach(() => {
    fetchMock.resetMocks();
    client = getClassInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /**************
   * Successes
   **************/

  test('it decodes a WMI', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const response = await client.DecodeWMI('3VW').catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);

    const expectedUrl = `${BASE_URL}/3VW?format=json`;
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl, {});
  });

  /**************
   * Failures
   **************/

  test('it rejects with Error when no WMI argument is provided', async () => {
    const response = await client
      .DecodeWMI(undefined as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "WMI" argument is required and must be of type string, got: <undefined> undefined`
      )
    );
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid typeof WMI argument is provided', async () => {
    const response = await client.DecodeWMI(3929343 as any).catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "WMI" argument is required and must be of type string, got: <number> 3929343`
      )
    );
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client.DecodeWMI('3VW').catch((err) => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Error building query string: mock error`)
    );
    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client.DecodeWMI('3VW').catch((err) => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });
});
