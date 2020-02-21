import { GetMakeForManufacturer } from '../GetMakeForManufacturer';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

const ACTION = 'GetMakeForManufacturer';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new GetMakeForManufacturer();
};

describe('GetMakeForManufacturer()', () => {
  let client: GetMakeForManufacturer;

  beforeEach(() => {
    client = getClassInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /**************
   * Successes
   **************/

  test('it gets manufacturer makes w/ manufacturer as a string', async () => {
    const response = await client
      .GetMakeForManufacturer('audi')
      .catch(err => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}/audi?format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets manufacturer makes w/ manufacturer as a number', async () => {
    const response = await client.GetMakeForManufacturer(981).catch(err => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}/981?format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  /**************
   * Failures
   **************/

  test('it rejects with Error when no manufacturer argument is provided', async () => {
    const response = await client
      .GetMakeForManufacturer(undefined as any)
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "manufacturer" argument is required and must be of type string or number, got: ` +
          `<undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid (not a string or number) manufacturer is provided', async () => {
    const response = await client
      .GetMakeForManufacturer(['test'] as any)
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "manufacturer" argument is required and must be of type string or number, got: ` +
          `<array> test`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .GetMakeForManufacturer('audi')
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
      .GetMakeForManufacturer('audi')
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });
});
