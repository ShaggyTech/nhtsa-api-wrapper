import { GetModelsForMakeId } from '../GetModelsForMakeId';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('GetModelsForMakeId()', () => {
  test('it gets vehicle models with a valid makeId', async () => {
    const client = new GetModelsForMakeId();
    const response = await client.GetModelsForMakeId(381).catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it returns an Error when no makeID argument is provided', async () => {
    const client = new GetModelsForMakeId();
    const response = await client
      .GetModelsForMakeId(undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetModelsForMakeId, makeID is required and must be a number, got: undefined'
      )
    );
  });

  test('it returns an Error when makeID argument is not of type number', async () => {
    const client = new GetModelsForMakeId();
    const response = await client
      .GetModelsForMakeId('audi' as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetModelsForMakeId, makeID is required and must be a number, got: audi'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetModelsForMakeId();
    const response = await client.GetModelsForMakeId(381).catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetModelsForMakeId, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetModelsForMakeId();
    const response = await client.GetModelsForMakeId(999).catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetModelsForMakeId, Fetch.get() error: mock error')
    );
  });
});
