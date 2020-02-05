import { GetWMIsForManufacturer } from '../GetWMIsForManufacturer';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('NHTSA.DecodeWMI()', () => {
  test('it decodes a WMI', async () => {
    const client = new GetWMIsForManufacturer();
    const response = await client
      .GetWMIsForManufacturer('audi')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it returns an Error when no WMI argument is provided', async () => {
    const client = new GetWMIsForManufacturer();
    const response = await client
      .GetWMIsForManufacturer(undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetWMIsForManufacturer, manufacturer argument is required and must be a string, got: undefined'
      )
    );
  });

  test('it returns an Error when invalid typeof WMI argument is provided', async () => {
    const client = new GetWMIsForManufacturer();
    const response = await client
      .GetWMIsForManufacturer(3929343 as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetWMIsForManufacturer, manufacturer argument is required and must be a string, got: 3929343'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetWMIsForManufacturer();
    const response = await client
      .GetWMIsForManufacturer('3VW')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetWMIsForManufacturer, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetWMIsForManufacturer();
    const response = await client
      .GetWMIsForManufacturer('3VW')
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetWMIsForManufacturer, Fetch.get() error: mock error')
    );
  });
});
