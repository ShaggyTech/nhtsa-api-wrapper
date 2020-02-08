import { GetModelsForMake } from '../GetModelsForMake';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('GetModelsForMake()', () => {
  test('it gets models for a valid makeName', async () => {
    const client = new GetModelsForMake();
    const response = await client.GetModelsForMake('audi').catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it returns an Error when no makeName argument is provided', async () => {
    const client = new GetModelsForMake();
    const response = await client
      .GetModelsForMake(undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetModelsForMake, makeName is required and must be a string, got: undefined'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetModelsForMake();
    const response = await client.GetModelsForMake('audi').catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetModelsForMake, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetModelsForMake();
    const response = await client.GetModelsForMake('fails').catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetModelsForMake, Fetch.get() error: mock error')
    );
  });
});
