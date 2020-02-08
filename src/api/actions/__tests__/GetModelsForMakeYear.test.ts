import { GetModelsForMakeYear } from '../GetModelsForMakeYear';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('GetModelsForMakeYear()', () => {
  test('it gets models with modelYear and vehicleType params', async () => {
    const client = new GetModelsForMakeYear();
    const response = await client
      .GetModelsForMakeYear({
        make: 'Audi',
        modelYear: 2016,
        vehicleType: 'auto'
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it gets models with modelYear and no vehicleType', async () => {
    const client = new GetModelsForMakeYear();
    const response = await client
      .GetModelsForMakeYear({
        make: 'Audi',
        modelYear: 2016
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it gets models with vehicleType and no modelYear', async () => {
    const client = new GetModelsForMakeYear();
    const response = await client
      .GetModelsForMakeYear({
        make: 'Audi',
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

    const client = new GetModelsForMakeYear();
    const response = await client
      .GetModelsForMakeYear({
        make: 'Audi',
        modelYear: 2017,
        vehicleType: 'moto'
      })
      .catch(err => err);

    const expectedUrl =
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/Audi/modelYear/2017/vehicleType/moto?format=json';

    expect(client.get).toHaveBeenCalledWith(expectedUrl);
    expect(response).toEqual(mockData);
  });

  test('it builds the correct URL with make and modelYear params', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.resolve(mockData as any));

    const client = new GetModelsForMakeYear();
    const response = await client
      .GetModelsForMakeYear({
        make: 'Ford',
        modelYear: 2020
      })
      .catch(err => err);

    const expectedUrl =
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/Ford/modelYear/2020?format=json';

    expect(client.get).toHaveBeenCalledWith(expectedUrl);
    expect(response).toEqual(mockData);
  });

  test('it builds the correct URL with make and vehicleType params', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.resolve(mockData as any));

    const client = new GetModelsForMakeYear();
    const response = await client
      .GetModelsForMakeYear({
        make: 'Chevrolet',
        vehicleType: 'truck'
      })
      .catch(err => err);

    const expectedUrl =
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/Chevrolet/vehicleType/truck?format=json';

    expect(client.get).toHaveBeenCalledWith(expectedUrl);
    expect(response).toEqual(mockData);
  });

  test('it rejects with Error when invalid typeof modelYear is provided ', async () => {
    const client = new GetModelsForMakeYear();
    const response = await client
      .GetModelsForMakeYear({ make: 'audi', modelYear: 'fails' } as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetModelsForMakeYear, params.modelYear must be of type number, got type of: string'
      )
    );
  });

  test('it rejects with Error when invalid typeof vehicleType is provided ', async () => {
    const client = new GetModelsForMakeYear();
    const response = await client
      .GetModelsForMakeYear({ make: 'audi', vehicleType: ['invalid'] } as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetModelsForMakeYear, params.vehicleType must be of type string, got type of: array'
      )
    );
  });

  test('it rejects with Error when no params are provided ', async () => {
    const client = new GetModelsForMakeYear();
    const response = await client
      .GetModelsForMakeYear(undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetModelsForMakeYear, params.make is required and must be a string, got: undefined of type undefined'
      )
    );
  });

  test('it rejects with Error when no make param is provided  ', async () => {
    const client = new GetModelsForMakeYear();
    const response = await client
      .GetModelsForMakeYear({ modelYear: 2016, vehicleType: 'moto' } as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetModelsForMakeYear, params.make is required and must be a string, got: undefined of type undefined'
      )
    );
  });

  test('it rejects with Error when no modelYear and vehicleType params are provided', async () => {
    const client = new GetModelsForMakeYear();
    const response = await client
      .GetModelsForMakeYear({ make: 'volkswagen' } as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetModelsForMakeYear, one of or both of, params.modelYear or params.vehicleType is required, got params: [object Object]'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetModelsForMakeYear();
    const response = await client
      .GetModelsForMakeYear({
        make: 'Audi',
        modelYear: 2017,
        vehicleType: 'moto'
      })
      .catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetModelsForMakeYear, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetModelsForMakeYear();
    const response = await client
      .GetModelsForMakeYear({
        make: 'Audi',
        modelYear: 2017,
        vehicleType: 'moto'
      })
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetModelsForMakeYear, Fetch.get() error: mock error')
    );
  });
});
