import { GetModelsForMake } from '../GetModelsForMake';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

const ACTION = 'GetModelsForMake';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new GetModelsForMake();
};

describe('GetModelsForMake()', () => {
  let client: GetModelsForMake;

  beforeEach(() => {
    client = getClassInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /**************
   * Successes
   **************/

  test('it gets models for a valid makeName', async () => {
    const response = await client.GetModelsForMake('audi').catch((err) => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}/audi?format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  /**************
   * Failures
   **************/

  test('it rejects with Error when no makeName argument is provided', async () => {
    const response = await client
      .GetModelsForMake(undefined as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "makeName" argument is required and must be of type string, got: ` +
          `<undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid makeName argument is provided', async () => {
    const response = await client
      .GetModelsForMake(1234 as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "makeName" argument is required and must be of type string, got: ` +
          `<number> 1234`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client.GetModelsForMake('audi').catch((err) => err);

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

    const response = await client.GetModelsForMake('fails').catch((err) => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });
});
