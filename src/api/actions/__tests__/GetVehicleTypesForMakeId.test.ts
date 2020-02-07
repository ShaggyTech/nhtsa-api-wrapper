import { GetVehicleTypesForMakeId } from '../GetVehicleTypesForMakeId';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('GetVehicleTypesForMakeId()', () => {
  test('it gets vehicle types with a valid makeId', async () => {
    const client = new GetVehicleTypesForMakeId();
    const response = await client
      .GetVehicleTypesForMakeId(381)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it returns an Error when no makeID argument is provided', async () => {
    const client = new GetVehicleTypesForMakeId();
    const response = await client
      .GetVehicleTypesForMakeId(undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetVehicleTypesForMakeId, makeID is required and must be a number, got: undefined'
      )
    );
  });

  test('it returns an Error when makeID argument is not of type number', async () => {
    const client = new GetVehicleTypesForMakeId();
    const response = await client
      .GetVehicleTypesForMakeId('audi' as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetVehicleTypesForMakeId, makeID is required and must be a number, got: audi'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetVehicleTypesForMakeId();
    const response = await client
      .GetVehicleTypesForMakeId(381)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetVehicleTypesForMakeId, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetVehicleTypesForMakeId();
    const response = await client
      .GetVehicleTypesForMakeId(999)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetVehicleTypesForMakeId, Fetch.get() error: mock error')
    );
  });
});
