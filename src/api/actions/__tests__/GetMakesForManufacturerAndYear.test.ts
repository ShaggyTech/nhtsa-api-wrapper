import { GetMakesForManufacturerAndYear } from '../GetMakesForManufacturerAndYear';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('GetMakesForManufacturerAndYear()', () => {
  test('it gets manufacturer makes w/ manufacturer as a number', async () => {
    const client = new GetMakesForManufacturerAndYear();
    const response = await client
      .GetMakesForManufacturerAndYear(121, {
        year: 2009
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it gets manufacturer makes w/ manufacturer as a string', async () => {
    const client = new GetMakesForManufacturerAndYear();
    const response = await client
      .GetMakesForManufacturerAndYear('volks', {
        year: '2020'
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it rejects with Error when no manufacturer argument ', async () => {
    const client = new GetMakesForManufacturerAndYear();
    const response = await client
      .GetMakesForManufacturerAndYear(undefined as any, { year: 2009 })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetMakesForManufacturerAndYear, please provide a valid manufacturer arg, either a number or string, got: undefined'
      )
    );
  });

  test('it rejects with Error when no params.year value ', async () => {
    const client = new GetMakesForManufacturerAndYear();
    const response = await client
      .GetMakesForManufacturerAndYear('audi', undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetMakesForManufacturerAndYear, please provide a valid year parameter, either a number or string, got params.year: undefined'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetMakesForManufacturerAndYear();
    const response = await client
      .GetMakesForManufacturerAndYear('audi', { year: 2009 })
      .catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error(
        'GetMakesForManufacturerAndYear, Error building query string: mock error'
      )
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetMakesForManufacturerAndYear();
    const response = await client
      .GetMakesForManufacturerAndYear('audi', { year: 2009 })
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetMakesForManufacturerAndYear, Fetch.get() error: mock error')
    );
  });
});
