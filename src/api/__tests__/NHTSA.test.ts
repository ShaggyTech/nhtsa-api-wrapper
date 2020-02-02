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
    expect(client.apiResponseFormat).toEqual('json');
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

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it decodes a VIN and handles params', async () => {
    const client = new NHTSA();
    const response = await client
      .DecodeVin('3VWD07AJ5EM388202', {
        modelYear: 2001
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).not.toBeInstanceOf(Error);
    expect(response).toEqual(mockData);
  });

  test('it handles no VIN', async () => {
    const client = new NHTSA();
    const response = await client.DecodeVin(undefined as any);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client
      .DecodeVin('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
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

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(Error('DecodeVin, Fetch.get() error: mock error'));
  });
});

describe('DecodeVinValues()', () => {
  test('it decodes a VIN', async () => {
    const client = new NHTSA();
    const response = await client.DecodeVinValues('3VWD07AJ5EM388202');

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it decodes a VIN and handles params', async () => {
    const client = new NHTSA();
    const response = await client
      .DecodeVinValues('3VWD07AJ5EM388202', {
        modelYear: 2001
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).not.toBeInstanceOf(Error);
    expect(response).toEqual(mockData);
  });

  test('it handles no VIN', async () => {
    const client = new NHTSA();
    const response = await client.DecodeVinValues(undefined as any);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client
      .DecodeVinValues('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('DecodeVinValues, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client
      .DecodeVinValues('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('DecodeVinValues, Fetch.get() error: mock error')
    );
  });
});

describe('DecodeVinExtended()', () => {
  test('it decodes a VIN', async () => {
    const client = new NHTSA();
    const response = await client.DecodeVinExtended('3VWD07AJ5EM388202');

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it decodes a VIN and handles params', async () => {
    const client = new NHTSA();
    const response = await client
      .DecodeVinExtended('3VWD07AJ5EM388202', {
        modelYear: 2001
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).not.toBeInstanceOf(Error);
    expect(response).toEqual(mockData);
  });

  test('it handles no VIN', async () => {
    const client = new NHTSA();
    const response = await client.DecodeVinExtended(undefined as any);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client
      .DecodeVinExtended('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('DecodeVinExtended, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client
      .DecodeVinExtended('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('DecodeVinExtended, Fetch.get() error: mock error')
    );
  });
});

describe('DecodeVinValuesExtended()', () => {
  test('it decodes a VIN', async () => {
    const client = new NHTSA();
    const response = await client.DecodeVinValuesExtended('3VWD07AJ5EM388202');

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it decodes a VIN and handles params', async () => {
    const client = new NHTSA();
    const response = await client
      .DecodeVinValuesExtended('3VWD07AJ5EM388202', {
        modelYear: 2001
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).not.toBeInstanceOf(Error);
    expect(response).toEqual(mockData);
  });

  test('it handles no VIN', async () => {
    const client = new NHTSA();
    const response = await client.DecodeVinValuesExtended(undefined as any);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client
      .DecodeVinValuesExtended('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('DecodeVinValuesExtended, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client
      .DecodeVinValuesExtended('3VWD07AJ5EM388202')
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('DecodeVinValuesExtended, Fetch.get() error: mock error')
    );
  });
});

describe('DecodeWMI()', () => {
  test('it decodes a WMI', async () => {
    const client = new NHTSA();
    const response = await client.DecodeWMI('3VW');

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it handles no WMI', async () => {
    const client = new NHTSA();
    const response = await client.DecodeWMI(undefined as any);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client.DecodeWMI('1VW').catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('DecodeWMI, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client.DecodeWMI('3VW').catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(Error('DecodeWMI, Fetch.get() error: mock error'));
  });
});

describe('GetWMIsForManufacturer()', () => {
  test('it gets a manufacturers WMIs', async () => {
    const client = new NHTSA();
    const response = await client.GetWMIsForManufacturer('audi');

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it handles no WMI', async () => {
    const client = new NHTSA();
    const response = await client.GetWMIsForManufacturer(undefined as any);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client
      .GetWMIsForManufacturer('audi')
      .catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetWMIsForManufacturer, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client
      .GetWMIsForManufacturer('audi')
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetWMIsForManufacturer, Fetch.get() error: mock error')
    );
  });
});

describe('GetAllMakes()', () => {
  test('it gets all makes from the database', async () => {
    const client = new NHTSA();
    const response = await client.GetAllMakes();

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client.GetAllMakes().catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetAllMakes, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client.GetAllMakes().catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetAllMakes, Fetch.get() error: mock error')
    );
  });
});

describe('GetParts()', () => {
  test('it gets all makes from the database', async () => {
    const client = new NHTSA();
    const response = await client.GetParts();

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it gets all makes from the database with params', async () => {
    const client = new NHTSA();
    const response = await client.GetParts({
      type: 156,
      fromDate: '11/10/2010',
      toDate: '11/20/2019',
      page: 2
    });

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client.GetParts().catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetParts, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client.GetParts().catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(Error('GetParts, Fetch.get() error: mock error'));
  });
});
