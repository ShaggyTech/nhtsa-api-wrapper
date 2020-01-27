import { NHTSA } from '../NHTSA';
import { Fetch, DEFAULT_CONFIG } from '../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('NHTSA Class', () => {
  test('it exists', () => {
    expect(NHTSA).toBeDefined();
  });

  test('it instantiates', () => {
    const client = new NHTSA();
    expect(client).toBeDefined();

    // Class Properties
    expect(client.apiResponseFormat).toEqual('json');
    expect(client.baseUrl).toEqual('https://vpic.nhtsa.dot.gov/api/vehicles');
    expect(client.config).toEqual(DEFAULT_CONFIG);

    // Class Methods
    expect(client.get).toBeDefined();
    expect(client.buildQueryString).toBeDefined();
    expect(client.DecodeVin).toBeDefined();
  });

  test('it instantiates with user provided config', () => {
    const userConfig = {
      apiResponseFormat: 'xml',
      baseUrl: 'https://www.shaggytech.com'
    };

    const client = new NHTSA(userConfig);
    expect(client).toBeDefined();

    // Class Properties
    expect(client.apiResponseFormat).toEqual('xml');
    expect(client.baseUrl).toEqual('https://www.shaggytech.com');
    expect(client.config).toEqual({ ...DEFAULT_CONFIG, ...userConfig });

    // Class Methods
    expect(client.get).toBeDefined();
    expect(client.buildQueryString).toBeDefined();
    expect(client.DecodeVin).toBeDefined();
  });
});

describe('DecodeVin()', () => {
  test('it decodes a VIN', async () => {
    const client = new NHTSA();
    const response = await client.DecodeVin('3VWD07AJ5EM388202');

    expect(response).toEqual(mockData);
    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
  });

  test('it decodes a VIN and handles params', async () => {
    const client = new NHTSA();

    const dataWithParams = {
      ...mockData,
      queryString: '?modelYear=2001&format=json',
      requestUrl:
        'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/3VWD07AJ5EM388202?modelYear=2001&format=json'
    };

    const response = await client.DecodeVin('3VWD07AJ5EM388202', {
      modelYear: 2001
    });

    expect(response).toEqual(dataWithParams);
    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();

    const response = await client
      .DecodeVin('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(response).toEqual(
      Error('DecodeVin, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();

    const response = await client
      .DecodeVin('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(response).toEqual(Error('DecodeVin, Fetch.get() error: mock error'));
  });
});
