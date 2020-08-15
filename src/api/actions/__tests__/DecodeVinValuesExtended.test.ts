import { DecodeVinValuesExtended } from '../DecodeVinValuesExtended';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';
import mockData from '../../../__mocks__/mockData';

const ACTION = 'DecodeVinValuesExtended';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new DecodeVinValuesExtended();
};

describe('NHTSA.DecodeVinValuesExtended()', () => {
  let client: DecodeVinValuesExtended;

  beforeEach(() => {
    client = getClassInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /**************
   * Successes
   **************/

  test('it decodes a VIN', async () => {
    const response = await client
      .DecodeVinValuesExtended('3VWD07AJ5EM388202')
      .catch((err) => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}/3VWD07AJ5EM388202?format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it decodes a VIN and handles params', async () => {
    const response = await client
      .DecodeVinValuesExtended('3VWD07AJ5EM388202', {
        modelYear: 2001,
      })
      .catch((err) => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}/3VWD07AJ5EM388202?modelYear=2001&format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  /**************
   * Failures
   **************/

  test('it rejects with Error when no VIN argument is provided', async () => {
    const response = await client
      .DecodeVinValuesExtended(undefined as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "vin" argument is required and must be of type string, got: <undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid typeof VIN argument is provided', async () => {
    const response = await client
      .DecodeVinValuesExtended([{ fails: 'should fail' }] as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "vin" argument is required and must be of type string, got: <array> [object Object]`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid typeof params argument is provided', async () => {
    const response = await client
      .DecodeVinValuesExtended('3VWD07AJ5EM388202', ['should fail'] as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params" argument must be of type object, got: <array> should fail`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid typeof params.modelYear argument is provided', async () => {
    const response = await client
      .DecodeVinValuesExtended('3VWD07AJ5EM388202', {
        modelYear: ['should fail'] as any,
      })
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.modelYear" argument is required and must be of type string or number, ` +
          `got: <array> should fail`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .DecodeVinValuesExtended('3VWD07AJ5EM388202')
      .catch((err) => err);

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
      .DecodeVinValuesExtended('3VWD07AJ5EM388202')
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });
});
