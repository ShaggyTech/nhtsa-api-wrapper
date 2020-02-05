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

    // Parent Class Methods
    expect(client.get).toBeDefined();
    expect(client.buildQueryString).toBeDefined();
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

    // Parent Class Methods
    expect(client.get).toBeDefined();
    expect(client.buildQueryString).toBeDefined();
  });
});

/******************************************************************************************
 * More complete individual tests for all of the below can be found in ../actions/__tests__
 ******************************************************************************************/

describe('NHTSA.DecodeVin()', () => {
  test('it exists', () => {
    const client = new NHTSA();
    expect(client.DecodeVin).toBeInstanceOf(Function);
  });

  test('it decodes a VIN', async () => {
    const client = new NHTSA();
    const response = await client
      .DecodeVin('3VWD07AJ5EM388202', {
        modelYear: 2001
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });
});

describe('NHTSA.DecodeVinValues()', () => {
  test('it exists', () => {
    const client = new NHTSA();
    expect(client.DecodeVinValues).toBeInstanceOf(Function);
  });

  test('it decodes a VIN', async () => {
    const client = new NHTSA();
    const response = await client
      .DecodeVinValues('3VWD07AJ5EM388202', {
        modelYear: 2001
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });
});

describe('NHTSA.DecodeVinExtended()', () => {
  test('it exists', () => {
    const client = new NHTSA();
    expect(client.DecodeVinExtended).toBeInstanceOf(Function);
  });

  test('it decodes a VIN', async () => {
    const client = new NHTSA();
    const response = await client
      .DecodeVinExtended('3VWD07AJ5EM388202', {
        modelYear: 2001
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });
});

describe('NHTSA.DecodeVinValuesExtended()', () => {
  test('it exists', () => {
    const client = new NHTSA();
    expect(client.DecodeVinValuesExtended).toBeInstanceOf(Function);
  });

  test('it decodes a VIN', async () => {
    const client = new NHTSA();
    const response = await client
      .DecodeVinValuesExtended('3VWD07AJ5EM388202', {
        modelYear: 2001
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
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

describe('GetAllManufacturers()', () => {
  test('it gets all manufacturers', async () => {
    const client = new NHTSA();
    const response = await client.GetAllManufacturers();

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it gets all manufacturers with params', async () => {
    const client = new NHTSA();
    const response = await client.GetAllManufacturers({
      manufacturerType: 'Intermediate',
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
    const response = await client.GetAllManufacturers().catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetAllManufacturers, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client.GetAllManufacturers().catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetAllManufacturers, Fetch.get() error: mock error')
    );
  });
});

describe('GetManufacturerDetails()', () => {
  test('it gets manufacturer details w/ manufacturer as a number', async () => {
    const client = new NHTSA();
    const response = await client.GetManufacturerDetails(989);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it gets manufacturer details w/ manufacturer as a string', async () => {
    const client = new NHTSA();
    const response = await client.GetManufacturerDetails('volks');

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client
      .GetManufacturerDetails('audi')
      .catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetManufacturerDetails, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client
      .GetManufacturerDetails('audi')
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetManufacturerDetails, Fetch.get() error: mock error')
    );
  });
});

describe('GetMakeForManufacturer()', () => {
  test('it gets all manufacturers', async () => {
    const client = new NHTSA();
    const response = await client.GetMakeForManufacturer('audi');

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it handles no arguments', async () => {
    const client = new NHTSA();
    const response = await client.GetMakeForManufacturer(undefined as any);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client
      .GetMakeForManufacturer('audi')
      .catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetMakeForManufacturer, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client
      .GetMakeForManufacturer('fails')
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetMakeForManufacturer, Fetch.get() error: mock error')
    );
  });
});

describe('GetMakesForManufacturerAndYear()', () => {
  test('it gets manufacturer makes w/ manufacturer as a number', async () => {
    const client = new NHTSA();
    const response = await client.GetMakesForManufacturerAndYear(121, {
      year: 2009
    });

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it gets manufacturer makes w/ manufacturer as a string', async () => {
    const client = new NHTSA();
    const response = await client.GetMakesForManufacturerAndYear('volks', {
      year: 2020
    });

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it rejects with Error when no arguments', async () => {
    const client = new NHTSA();
    const response = await client
      .GetMakesForManufacturerAndYear(undefined as any, undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetMakesForManufacturerAndYear, please provide a valid manufacturer arg, either a number or string, got: undefined'
      )
    );
  });

  test('it rejects with Error when no params argument', async () => {
    const client = new NHTSA();
    const response = await client
      .GetMakesForManufacturerAndYear('volks', undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetMakesForManufacturerAndYear, please provide a valid year parameter, got params: undefined'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new NHTSA();
    const response = await client
      .GetMakesForManufacturerAndYear('volks', {
        year: 2020
      })
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

    const client = new NHTSA();
    const response = await client
      .GetMakesForManufacturerAndYear('volks', {
        year: 2020
      })
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetMakesForManufacturerAndYear, Fetch.get() error: mock error')
    );
  });
});
