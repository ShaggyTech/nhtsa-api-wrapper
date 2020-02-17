import { GetCanadianVehicleSpecifications } from '../GetCanadianVehicleSpecifications';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

describe('GetCanadianVehicleSpecifications()', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('it gets Canadian specs with only year param', async () => {
    const client = new GetCanadianVehicleSpecifications();
    const response = await client
      .GetCanadianVehicleSpecifications({
        year: 2011
      })
      .catch(err => err);

    const expectedUrl =
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetCanadianVehicleSpecifications?year=2011&make=&model=&units=&format=json';
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
    expect(response).toStrictEqual(mockData);
  });

  test('it gets canadian specs with year and make params', async () => {
    const client = new GetCanadianVehicleSpecifications();
    const response = await client
      .GetCanadianVehicleSpecifications({
        year: 2011,
        make: 'audi'
      })
      .catch(err => err);

    const expectedUrl =
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetCanadianVehicleSpecifications?year=2011&make=audi&model=&units=&format=json';
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
    expect(response).toStrictEqual(mockData);
  });

  test('it gets canadian specs with year, make, and model params', async () => {
    const client = new GetCanadianVehicleSpecifications();
    const response = await client
      .GetCanadianVehicleSpecifications({
        year: 2011,
        make: 'audi',
        model: 'A4'
      })
      .catch(err => err);

    const expectedUrl =
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetCanadianVehicleSpecifications?year=2011&make=audi&model=A4&units=&format=json';
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
    expect(response).toStrictEqual(mockData);
  });

  test('it gets canadian specs with year, make, model, and units params', async () => {
    const client = new GetCanadianVehicleSpecifications();
    const response = await client
      .GetCanadianVehicleSpecifications({
        year: 2011,
        make: 'audi',
        model: 'A4',
        units: 'US'
      })
      .catch(err => err);

    const expectedUrl =
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetCanadianVehicleSpecifications?year=2011&make=audi&model=A4&units=US&format=json';
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
    expect(response).toStrictEqual(mockData);
  });

  test('it rejects with Error when no params are provided', async () => {
    const client = new GetCanadianVehicleSpecifications();
    const response = await client
      .GetCanadianVehicleSpecifications(undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toStrictEqual(
      Error(
        'GetCanadianVehicleSpecifications, params.year is required, got: undefined'
      )
    );
  });

  test('it rejects with Error when year param is not provided', async () => {
    const client = new GetCanadianVehicleSpecifications();
    const response = await client
      .GetCanadianVehicleSpecifications({
        make: 'audi',
        model: 'A4',
        units: 'US'
      } as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toStrictEqual(
      Error(
        'GetCanadianVehicleSpecifications, params.year is required, got: undefined'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetCanadianVehicleSpecifications();
    const response = await client
      .GetCanadianVehicleSpecifications({
        year: 2020
      })
      .catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(
      Error(
        'GetCanadianVehicleSpecifications, Error building query string: mock error'
      )
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetCanadianVehicleSpecifications();
    const response = await client
      .GetCanadianVehicleSpecifications({
        year: 2020
      })
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(
      Error('GetCanadianVehicleSpecifications, Fetch.get() error: mock error')
    );
  });
});
