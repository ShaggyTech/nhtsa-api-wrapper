import { GetMakesForVehicleType } from '../GetMakesForVehicleType';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('GetMakesForVehicleType()', () => {
  test('it gets all manufacturers', async () => {
    const client = new GetMakesForVehicleType();
    const response = await client
      .GetMakesForVehicleType('audi')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it returns an Error when no typeName argument is provided', async () => {
    const client = new GetMakesForVehicleType();
    const response = await client
      .GetMakesForVehicleType(undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetMakesForVehicleType, typeName is required and must be a string, got: undefined'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetMakesForVehicleType();
    const response = await client
      .GetMakesForVehicleType('audi')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetMakesForVehicleType, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetMakesForVehicleType();
    const response = await client
      .GetMakesForVehicleType('fails')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetMakesForVehicleType, Fetch.get() error: mock error')
    );
  });
});
