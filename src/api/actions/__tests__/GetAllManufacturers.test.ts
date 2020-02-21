import { GetAllManufacturers } from '../GetAllManufacturers';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

const ACTION = 'GetAllManufacturers';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new GetAllManufacturers();
};

describe('GetAllMakes()', () => {
  let client: GetAllManufacturers;

  beforeEach(() => {
    client = getClassInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /**************
   * Successes
   **************/

  test('it gets all manufacturers', async () => {
    const response = await client.GetAllManufacturers().catch(err => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}?format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets all manufacturers with single param (manufacturerType)', async () => {
    const response = await client
      .GetAllManufacturers({
        manufacturerType: 'Alterer'
      })
      .catch(err => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}?manufacturerType=Alterer&format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets all manufacturers with single param (page)', async () => {
    const response = await client
      .GetAllManufacturers({
        page: 99
      })
      .catch(err => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}?page=99&format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets all manufacturers with multiple params', async () => {
    const response = await client
      .GetAllManufacturers({
        manufacturerType: 'Alterer',
        page: 2
      })
      .catch(err => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}?manufacturerType=Alterer&page=2&format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  /**************
   * Failures
   **************/

  test('it rejects with Error when invalid typeof params argument is provided', async () => {
    const response = await client
      .GetAllManufacturers(['should fail'] as any)
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params" argument must be of type object, got: <array> should fail`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid typeof params.manufacturerType argument is provided', async () => {
    const response = await client
      .GetAllManufacturers({
        manufacturerType: ['should fail']
      } as any)
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.manufacturerType" argument must be of type string, ` +
          `got: <array> should fail`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid typeof params.page argument is provided', async () => {
    const response = await client
      .GetAllManufacturers({
        page: '120'
      } as any)
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.page" argument must be of type number, ` +
          `got: <string> 120`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client.GetAllManufacturers().catch(err => err);

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

    const response = await client.GetAllManufacturers().catch(err => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });
});
