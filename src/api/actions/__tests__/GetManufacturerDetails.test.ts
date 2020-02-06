import { GetManufacturerDetails } from '../GetManufacturerDetails';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('GetManufacturerDetails()', () => {
  test('it gets manufacturer details w/ manufacturer as a string', async () => {
    const client = new GetManufacturerDetails();
    const response = await client
      .GetManufacturerDetails('audi')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it gets manufacturer details w/ manufacturer as a number', async () => {
    const client = new GetManufacturerDetails();
    const response = await client.GetManufacturerDetails(981).catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it returns an Error when no manufacturer argument is provided', async () => {
    const client = new GetManufacturerDetails();
    const response = await client
      .GetManufacturerDetails(undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetManufacturerDetails, manufacturer argument is required and must be a string or number, got: undefined'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetManufacturerDetails();
    const response = await client
      .GetManufacturerDetails('audi')
      .catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetManufacturerDetails, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetManufacturerDetails();
    const response = await client
      .GetManufacturerDetails('audi')
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetManufacturerDetails, Fetch.get() error: mock error')
    );
  });
});
