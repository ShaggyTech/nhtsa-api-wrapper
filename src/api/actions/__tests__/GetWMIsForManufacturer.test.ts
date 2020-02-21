import { GetWMIsForManufacturer } from '../GetWMIsForManufacturer';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

const ACTION = 'GetWMIsForManufacturer';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new GetWMIsForManufacturer();
};

describe('NHTSA.DecodeWMI()', () => {
  let client: GetWMIsForManufacturer;

  beforeEach(() => {
    client = getClassInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /**************
   * Successes
   **************/

  test('it gets WMIs for a valid manufacturer', async () => {
    const response = await client
      .GetWMIsForManufacturer('Audi')
      .catch(err => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}/Audi?format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  /**************
   * Failures
   **************/

  test('it returns an Error when no manufacturer argument is provided', async () => {
    const response = await client
      .GetWMIsForManufacturer(undefined as any)
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "manufacturer" argument is required and must be of type string, got: ` +
          `<undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with an Error when invalid manufacturer argument is provided', async () => {
    const response = await client
      .GetWMIsForManufacturer({ testing: 'test' } as any)
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "manufacturer" argument is required and must be of type string, got: ` +
          `<object> [object Object]`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .GetWMIsForManufacturer('Volkswagen')
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Error building query string: mock error`)
    );
    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .GetWMIsForManufacturer('Audi')
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });
});
