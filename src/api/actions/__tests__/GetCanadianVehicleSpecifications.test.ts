import { GetCanadianVehicleSpecifications } from '../GetCanadianVehicleSpecifications';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

const ACTION = 'GetCanadianVehicleSpecifications';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new GetCanadianVehicleSpecifications();
};

describe('GetCanadianVehicleSpecifications()', () => {
  let client: GetCanadianVehicleSpecifications;

  beforeEach(() => {
    client = getClassInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /**************
   * Successes
   **************/

  test('it gets Canadian specs with only year param', async () => {
    const response = await client
      .GetCanadianVehicleSpecifications({
        year: 2011
      })
      .catch(err => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}?year=2011&make=&model=&units=&format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets Canadian specs with year and make params', async () => {
    const response = await client
      .GetCanadianVehicleSpecifications({
        year: 2011,
        make: 'audi'
      })
      .catch(err => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}?year=2011&make=audi&model=&units=&format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets Canadian specs with year, make, and model params', async () => {
    const response = await client
      .GetCanadianVehicleSpecifications({
        year: 2011,
        make: 'audi',
        model: 'A4'
      })
      .catch(err => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}?year=2011&make=audi&model=A4&units=&format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets Canadian specs with year, make, model, and units params', async () => {
    const response = await client
      .GetCanadianVehicleSpecifications({
        year: 2011,
        make: 'audi',
        model: 'A4',
        units: 'US'
      })
      .catch(err => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}?year=2011&make=audi&model=A4&units=US&format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  /**************
   * Failures
   **************/

  test('it rejects with Error when no params are provided', async () => {
    const response = await client
      .GetCanadianVehicleSpecifications(undefined as any)
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params" argument must be of type object, ` +
          `got: <undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid params are provided', async () => {
    const response = await client
      .GetCanadianVehicleSpecifications(['testing'] as any)
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params" argument must be of type object, ` +
          `got: <array> testing`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when params.year is not provided', async () => {
    const response = await client
      .GetCanadianVehicleSpecifications({
        year: undefined as any,
        make: 'audi',
        model: 'A4',
        units: 'US'
      })
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.year" argument is required and must be of type number, ` +
          `got: <undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid params.make is provided', async () => {
    const response = await client
      .GetCanadianVehicleSpecifications({
        year: 2001,
        make: 1234 as any
      })
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.make" argument must be of type string, ` +
          `got: <number> 1234`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid params.model is provided', async () => {
    const response = await client
      .GetCanadianVehicleSpecifications({
        year: 2001,
        model: [1, 2, 3] as any
      })
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.model" argument must be of type string, ` +
          `got: <array> 1,2,3`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid params.units is provided', async () => {
    const response = await client
      .GetCanadianVehicleSpecifications({
        year: 2001,
        units: true as any
      })
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.units" argument must be of type string, ` +
          `got: <boolean> true`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .GetCanadianVehicleSpecifications({ year: 2011 })
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Error building query string: mock error`)
    );
    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .GetCanadianVehicleSpecifications({ year: 2011 })
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });
});
