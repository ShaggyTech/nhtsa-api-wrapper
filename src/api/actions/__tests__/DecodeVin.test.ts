import { DecodeVin } from '../DecodeVin';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

const getClassInstance = () => {
  return new DecodeVin();
};

describe('NHTSA.DecodeVin()', () => {
  let client: DecodeVin = getClassInstance();

  beforeEach(() => {
    client = getClassInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('it decodes a VIN', async () => {
    const response = await client
      .DecodeVin('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(mockData);
  });

  test('it decodes a VIN and handles params', async () => {
    const response = await client
      .DecodeVin('3VWD07AJ5EM388202', {
        modelYear: 2001
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(mockData);
  });

  test('it returns an Error when no VIN argument is provided', async () => {
    const response = await client.DecodeVin(undefined as any).catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toStrictEqual(
      Error(
        'DecodeVin, vin argument is required and must be a string, got: undefined'
      )
    );
  });

  test('it returns an Error when invalid typeof VIN argument is provided', async () => {
    const response = await client
      .DecodeVin([{ fails: 'should fail' }] as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toStrictEqual(
      Error(
        'DecodeVin, vin argument is required and must be a string, got: [object Object]'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .DecodeVin('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(
      Error('DecodeVin, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .DecodeVin('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(
      Error('DecodeVin, Fetch.get() error: mock error')
    );
  });
});
