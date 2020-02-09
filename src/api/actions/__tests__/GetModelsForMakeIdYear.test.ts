import { GetModelsForMakeIdYear } from '../GetModelsForMakeIdYear';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('GetModelsForMakeIdYear()', () => {
  test('it gets models with modelYear and vehicleType params', async () => {
    const client = new GetModelsForMakeIdYear();
    const response = await client
      .GetModelsForMakeIdYear({
        makeId: 991,
        modelYear: 2016,
        vehicleType: 'moto'
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it gets models with modelYear and no vehicleType', async () => {
    const client = new GetModelsForMakeIdYear();
    const response = await client
      .GetModelsForMakeIdYear({
        makeId: 991,
        modelYear: 2016
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it gets models with vehicleType and no modelYear', async () => {
    const client = new GetModelsForMakeIdYear();
    const response = await client
      .GetModelsForMakeIdYear({
        makeId: 1,
        vehicleType: 'truck'
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it builds the correct URL with all params', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.resolve(mockData as any));

    const client = new GetModelsForMakeIdYear();
    const response = await client
      .GetModelsForMakeIdYear({
        makeId: 343,
        modelYear: 2017,
        vehicleType: 'moto'
      })
      .catch(err => err);

    const expectedUrl =
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/343/modelYear/2017/vehicleType/moto?format=json';

    expect(client.get).toHaveBeenCalledWith(expectedUrl);
    expect(response).toEqual(mockData);
  });

  test('it builds the correct URL with makeId and modelYear params', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.resolve(mockData as any));

    const client = new GetModelsForMakeIdYear();
    const response = await client
      .GetModelsForMakeIdYear({
        makeId: 420,
        modelYear: 2020
      })
      .catch(err => err);

    const expectedUrl =
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/420/modelYear/2020?format=json';

    expect(client.get).toHaveBeenCalledWith(expectedUrl);
    expect(response).toEqual(mockData);
  });

  test('it builds the correct URL with makeId and vehicleType params', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.resolve(mockData as any));

    const client = new GetModelsForMakeIdYear();
    const response = await client
      .GetModelsForMakeIdYear({
        makeId: 666,
        vehicleType: 'truck'
      })
      .catch(err => err);

    const expectedUrl =
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/666/vehicleType/truck?format=json';

    expect(client.get).toHaveBeenCalledWith(expectedUrl);
    expect(response).toEqual(mockData);
  });

  test('it rejects with Error when invalid typeof modelYear is provided ', async () => {
    const client = new GetModelsForMakeIdYear();
    const response = await client
      .GetModelsForMakeIdYear({ makeId: 343, modelYear: 'fails' } as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetModelsForMakeIdYear, params.modelYear must be of type number, got type of: string'
      )
    );
  });

  test('it rejects with Error when invalid typeof vehicleType is provided ', async () => {
    const client = new GetModelsForMakeIdYear();
    const response = await client
      .GetModelsForMakeIdYear({ makeId: 33, vehicleType: ['invalid'] } as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetModelsForMakeIdYear, params.vehicleType must be of type string, got type of: array'
      )
    );
  });

  test('it rejects with Error when no params are provided ', async () => {
    const client = new GetModelsForMakeIdYear();
    const response = await client
      .GetModelsForMakeIdYear(undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetModelsForMakeIdYear, params.makeId is required and must be a string, got: undefined of type undefined'
      )
    );
  });

  test('it rejects with Error when no make param is provided  ', async () => {
    const client = new GetModelsForMakeIdYear();
    const response = await client
      .GetModelsForMakeIdYear({ modelYear: 2016, vehicleType: 'moto' } as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetModelsForMakeIdYear, params.makeId is required and must be a string, got: undefined of type undefined'
      )
    );
  });

  test('it rejects with Error when no modelYear and vehicleType params are provided', async () => {
    const client = new GetModelsForMakeIdYear();
    const response = await client
      .GetModelsForMakeIdYear({ makeId: 100 } as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetModelsForMakeIdYear, one of or both of, params.modelYear or params.vehicleType is required, got params: [object Object]'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetModelsForMakeIdYear();
    const response = await client
      .GetModelsForMakeIdYear({
        makeId: 466,
        modelYear: 2017,
        vehicleType: 'moto'
      })
      .catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetModelsForMakeIdYear, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetModelsForMakeIdYear();
    const response = await client
      .GetModelsForMakeIdYear({
        makeId: 777,
        modelYear: 2017,
        vehicleType: 'moto'
      })
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetModelsForMakeIdYear, Fetch.get() error: mock error')
    );
  });
});
