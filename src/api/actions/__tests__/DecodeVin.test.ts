import { DecodeVin } from '../DecodeVin';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('NHTSA.DecodeVin()', () => {
  test('it decodes a VIN', async () => {
    const client = new DecodeVin();
    const response = await client
      .DecodeVin('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it decodes a VIN and handles params', async () => {
    const client = new DecodeVin();
    const response = await client
      .DecodeVin('3VWD07AJ5EM388202', {
        modelYear: 2001
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it returns an Error when no VIN argument is provided', async () => {
    const client = new DecodeVin();
    const response = await client.DecodeVin(undefined as any).catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'DecodeVin, vin argument is required and must be a string, got: undefined'
      )
    );
  });

  test('it returns an Error when invalid typeof VIN argument is provided', async () => {
    const client = new DecodeVin();
    const response = await client
      .DecodeVin([{ fails: 'should fail' }] as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'DecodeVin, vin argument is required and must be a string, got: [object Object]'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new DecodeVin();
    const response = await client
      .DecodeVin('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('DecodeVin, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new DecodeVin();
    const response = await client
      .DecodeVin('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(Error('DecodeVin, Fetch.get() error: mock error'));
  });
});
