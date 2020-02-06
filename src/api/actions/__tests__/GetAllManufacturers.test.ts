import { GetAllManufacturers } from '../GetAllManufacturers';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('GetAllManufacturers()', () => {
  test('it gets all manufacturers', async () => {
    const client = new GetAllManufacturers();
    const response = await client.GetAllManufacturers().catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it gets all manufacturers with params', async () => {
    const client = new GetAllManufacturers();
    const response = await client
      .GetAllManufacturers({
        manufacturerType: 'Alterer',
        page: 2
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetAllManufacturers();
    const response = await client.GetAllManufacturers().catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetAllManufacturers, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetAllManufacturers();
    const response = await client.GetAllManufacturers().catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetAllManufacturers, Fetch.get() error: mock error')
    );
  });
});
