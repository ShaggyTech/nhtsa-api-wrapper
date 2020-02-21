import { GetMakesForManufacturerAndYear } from '../GetMakesForManufacturerAndYear';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

const ACTION = 'GetMakesForManufacturerAndYear';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new GetMakesForManufacturerAndYear();
};

describe('GetMakesForManufacturerAndYear()', () => {
  let client: GetMakesForManufacturerAndYear;

  beforeEach(() => {
    client = getClassInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /**************
   * Successes
   **************/

  test('it gets manufacturer makes w/ manufacturer as a number', async () => {
    const response = await client
      .GetMakesForManufacturerAndYear(121, {
        year: 2009
      })
      .catch(err => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}/121?year=2009&format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets manufacturer makes w/ manufacturer as a string', async () => {
    const response = await client
      .GetMakesForManufacturerAndYear('volks', {
        year: 2020
      })
      .catch(err => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}/volks?year=2020&format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  /**************
   * Failures
   **************/

  test('it rejects with Error when no manufacturer argument is provided', async () => {
    const response = await client
      .GetMakesForManufacturerAndYear(undefined as any, { year: 2009 })
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "manufacturer" argument is required and must be of type string or number, got: ` +
          `<undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid manufacturer argument is provided', async () => {
    const response = await client
      .GetMakesForManufacturerAndYear(['testing'] as any, { year: 2009 })
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "manufacturer" argument is required and must be of type string or number, got: ` +
          `<array> testing`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid typeof params are provided', async () => {
    const response = await client
      .GetMakesForManufacturerAndYear('audi', ['testing'] as any)
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params" argument is required and must be of type object, got: ` +
          `<array> testing`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when no params.year is provided', async () => {
    const response = await client
      .GetMakesForManufacturerAndYear('audi', { year: undefined as any })
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.year" argument is required and must be of type number, got: ` +
          `<undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid typeof params.year value is provided', async () => {
    const response = await client
      .GetMakesForManufacturerAndYear('audi', { year: 'not valid' as any })
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.year" argument is required and must be of type number, got: ` +
          `<string> not valid`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .GetMakesForManufacturerAndYear('audi', { year: 2009 })
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
      .GetMakesForManufacturerAndYear('audi', { year: 2009 })
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });
});
