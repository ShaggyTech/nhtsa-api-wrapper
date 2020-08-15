import { GetModelsForMakeIdYear } from '../GetModelsForMakeIdYear';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

const ACTION = 'GetModelsForMakeIdYear';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new GetModelsForMakeIdYear();
};

describe('GetModelsForMakeIdYear()', () => {
  let client: GetModelsForMakeIdYear;

  beforeEach(() => {
    client = getClassInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /**************
   * Successes
   **************/

  test('it get models with all available params', async () => {
    const response = await client
      .GetModelsForMakeIdYear({
        makeId: 901,
        modelYear: 2017,
        vehicleType: 'moto',
      })
      .catch((err) => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}/makeId/901/modelYear/2017/vehicleType/moto?format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets models with modelYear and no vehicleType', async () => {
    const response = await client
      .GetModelsForMakeIdYear({
        makeId: 305,
        modelYear: 2016,
      })
      .catch((err) => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}/makeId/305/modelYear/2016?format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets models with vehicleType and no modelYear', async () => {
    const response = await client
      .GetModelsForMakeIdYear({
        makeId: 707,
        vehicleType: 'truck',
      })
      .catch((err) => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}/makeId/707/vehicleType/truck?format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  /**************
   * Failures
   **************/

  test('it rejects with Error when no params are provided', async () => {
    const response = await client
      .GetModelsForMakeIdYear(undefined as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params" argument must be of type object, got: <undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid typeof params are provided', async () => {
    const response = await client
      .GetModelsForMakeIdYear(['params as array'] as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params" argument must be of type object, got: <array> params as array`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when no makeId param is provided', async () => {
    const response = await client
      .GetModelsForMakeIdYear({
        makeId: undefined as any,
        modelYear: 2016,
        vehicleType: 'moto',
      })
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.makeId" argument is required and must be of type number, got: ` +
          `<undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid typeof makeId param is provided', async () => {
    const response = await client
      .GetModelsForMakeIdYear({
        makeId: ['fails'] as any,
        modelYear: 2016,
        vehicleType: 'moto',
      })
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.makeId" argument is required and must be of type number, got: ` +
          `<array> fails`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when neither modelYear or vehicleType params are provided', async () => {
    const response = await client
      .GetModelsForMakeIdYear({
        makeId: 908,
        modelYear: undefined as any,
        vehicleType: undefined as any,
      })
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, either one of "params.modelYear" or "params.vehicleType" is required, got: ` +
          `undefined | undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid typeof modelYear is provided', async () => {
    const response = await client
      .GetModelsForMakeIdYear({ makeId: 458, modelYear: 'fails' as any })
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.modelYear" must be of type number, got: <string> fails`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid typeof vehicleType is provided', async () => {
    const response = await client
      .GetModelsForMakeIdYear({ makeId: 458, vehicleType: ['invalid'] as any })
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.vehicleType" must be of type string, got: <array> invalid`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .GetModelsForMakeIdYear({
        makeId: 777,
        modelYear: 2017,
        vehicleType: 'moto',
      })
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
      .GetModelsForMakeIdYear({
        makeId: 777,
        modelYear: 2017,
        vehicleType: 'moto',
      })
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });
});
