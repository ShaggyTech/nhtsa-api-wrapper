import { GetMakeForManufacturer } from '../GetMakeForManufacturer';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('GetManufacturerDetails()', () => {
  test('it gets manufacturer makes w/ manufacturer as a string', async () => {
    const client = new GetMakeForManufacturer();
    const response = await client
      .GetMakeForManufacturer('audi')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it gets manufacturer makes w/ manufacturer as a number', async () => {
    const client = new GetMakeForManufacturer();
    const response = await client.GetMakeForManufacturer(981).catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it returns an Error when no manufacturer argument is provided', async () => {
    const client = new GetMakeForManufacturer();
    const response = await client
      .GetMakeForManufacturer(undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetMakeForManufacturer, manufacturer argument is required and must be a string or number, got: undefined'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetMakeForManufacturer();
    const response = await client
      .GetMakeForManufacturer('audi')
      .catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetMakeForManufacturer, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetMakeForManufacturer();
    const response = await client
      .GetMakeForManufacturer('audi')
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetMakeForManufacturer, Fetch.get() error: mock error')
    );
  });
});
