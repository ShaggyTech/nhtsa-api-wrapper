import { GetVehicleVariableList } from '../GetVehicleVariableList';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('GetVehicleVariableList()', () => {
  test('it gets all vehicle related variables from the database', async () => {
    const client = new GetVehicleVariableList();
    const response = await client.GetVehicleVariableList().catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetVehicleVariableList();
    const response = await client.GetVehicleVariableList().catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetVehicleVariableList, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetVehicleVariableList();
    const response = await client.GetVehicleVariableList().catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetVehicleVariableList, Fetch.get() error: mock error')
    );
  });
});
