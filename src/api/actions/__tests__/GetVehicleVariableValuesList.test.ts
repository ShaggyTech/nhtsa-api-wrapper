import { GetVehicleVariableValuesList } from '../GetVehicleVariableValuesList';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('GetVehicleVariableValuesList()', () => {
  test('it gets vehicle variable values with a variable Name', async () => {
    const client = new GetVehicleVariableValuesList();
    const response = await client
      .GetVehicleVariableValuesList('battery type')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it gets vehicle variable values with a variable ID', async () => {
    const client = new GetVehicleVariableValuesList();
    const response = await client
      .GetVehicleVariableValuesList(2)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it returns an Error when no variableValue is provided', async () => {
    const client = new GetVehicleVariableValuesList();
    const response = await client
      .GetVehicleVariableValuesList(undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetVehicleVariableValuesList, variableValue is required and must be a string or number, got: undefined'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetVehicleVariableValuesList();
    const response = await client
      .GetVehicleVariableValuesList(1)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error(
        'GetVehicleVariableValuesList, Error building query string: mock error'
      )
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetVehicleVariableValuesList();
    const response = await client
      .GetVehicleVariableValuesList('fails')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetVehicleVariableValuesList, Fetch.get() error: mock error')
    );
  });
});
