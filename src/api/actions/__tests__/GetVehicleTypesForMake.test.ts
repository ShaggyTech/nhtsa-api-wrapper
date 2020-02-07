import { GetVehicleTypesForMake } from '../GetVehicleTypesForMake';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('GetMakesForVehicleType()', () => {
  test('it gets makes for a valid vehicle type', async () => {
    const client = new GetVehicleTypesForMake();
    const response = await client
      .GetVehicleTypesForMake('audi')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it returns an Error when no makeName argument is provided', async () => {
    const client = new GetVehicleTypesForMake();
    const response = await client
      .GetVehicleTypesForMake(undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetVehicleTypesForMake, makeName is required and must be a string, got: undefined'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetVehicleTypesForMake();
    const response = await client
      .GetVehicleTypesForMake('audi')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetVehicleTypesForMake, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetVehicleTypesForMake();
    const response = await client
      .GetVehicleTypesForMake('fails')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetVehicleTypesForMake, Fetch.get() error: mock error')
    );
  });
});
