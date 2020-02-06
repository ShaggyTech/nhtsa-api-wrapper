import { DecodeVinExtended } from '../DecodeVinExtended';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('NHTSA.DecodeVin()', () => {
  test('it decodes a VIN', async () => {
    const client = new DecodeVinExtended();
    const response = await client
      .DecodeVinExtended('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it decodes a VIN and handles params', async () => {
    const client = new DecodeVinExtended();
    const response = await client
      .DecodeVinExtended('3VWD07AJ5EM388202', {
        modelYear: 2001
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it returns an Error when no VIN argument is provided', async () => {
    const client = new DecodeVinExtended();
    const response = await client
      .DecodeVinExtended(undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'DecodeVinExtended, vin argument is required and must be a string, got: undefined'
      )
    );
  });

  test('it returns an Error when invalid typeof VIN argument is provided', async () => {
    const client = new DecodeVinExtended();
    const response = await client
      .DecodeVinExtended(3929343 as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'DecodeVinExtended, vin argument is required and must be a string, got: 3929343'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new DecodeVinExtended();
    const response = await client
      .DecodeVinExtended('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('DecodeVinExtended, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new DecodeVinExtended();
    const response = await client
      .DecodeVinExtended('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('DecodeVinExtended, Fetch.get() error: mock error')
    );
  });
});
