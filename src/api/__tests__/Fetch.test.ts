import { Fetch, DEFAULT_CONFIG } from '../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../__mocks__/mockData';

describe('Fetch Class', () => {
  test('it exists', () => {
    expect(Fetch).toBeDefined();
  });

  test('it instantiates', () => {
    const client = new Fetch();
    expect(client).toBeDefined();

    // Class Properties
    expect(client.apiResponseFormat).toEqual('json');
    expect(client.baseUrl).toEqual('https://vpic.nhtsa.dot.gov/api/vehicles');
    expect(client.config).toEqual(DEFAULT_CONFIG);

    // Class Methods
    expect(client.get).toBeDefined();
    expect(client.buildQueryString).toBeDefined();
  });

  test('it instantiates with user provided config', () => {
    const userConfig = {
      apiResponseFormat: 'xml',
      baseUrl: 'https://www.shaggytech.com'
    };

    const client = new Fetch(userConfig);
    expect(client).toBeDefined();

    // Class Properties
    expect(client.apiResponseFormat).toEqual('xml');
    expect(client.baseUrl).toEqual('https://www.shaggytech.com');
    expect(client.config).toEqual({ ...DEFAULT_CONFIG, ...userConfig });

    // Class Methods
    expect(client.get).toBeDefined();
    expect(client.buildQueryString).toBeDefined();
  });
});

describe('buildQueryString() class method', () => {
  test('builds a Query String with no arguments', async () => {
    const client = new Fetch();

    const qs = await client.buildQueryString({});
    const expected = '?format=json';
    expect(qs).toEqual(expected);
  });

  test('builds a Query String with undefined arguments', async () => {
    const client = new Fetch();

    const qs = await client.buildQueryString(undefined as any);
    const expected = '?format=json';
    expect(qs).toEqual(expected);
  });

  test('builds a Query String with users params', async () => {
    const client = new Fetch();

    const qs = await client.buildQueryString({ modelYear: 2001 });
    const expected = '?modelYear=2001&format=json';
    expect(qs).toEqual(expected);
  });

  test('builds a Query String and overrides user "format" param', async () => {
    const client = new Fetch();

    const qs = await client.buildQueryString({ format: 'xml' });
    const expected = '?format=json';
    expect(qs).toEqual(expected);
  });

  test('builds a Query String and overrides user "format" param but allows other params', async () => {
    const client = new Fetch();

    const qs = await client.buildQueryString({
      format: 'xml',
      test: 'testing'
    });
    const expected = '?format=json&test=testing';
    expect(qs).toEqual(expected);
  });
});

describe('get() class method', () => {
  test('it returns a response', async () => {
    const client = new Fetch();
    const response = await client.get('testing.com');

    expect(response).toEqual(mockData);
    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
  });

  test('it handles invalid url arguments', async () => {
    const client = new Fetch();

    const response = await client.get(['testing'] as any).catch(err => err);

    expect(response).toEqual(
      Error('Fetch.get(url) - url argument must be of type string')
    );
  });

  test('it handles undefined url arguments', async () => {
    const client = new Fetch();

    const response = await client.get(undefined as any).catch(err => err);

    expect(response).toEqual(
      Error('Fetch.get(url) - url argument must be of type string')
    );
  });

  test('it handles Fetch.get response status >= 400 as an Error', async () => {
    (mockCrossFetch as any).mockImplementationOnce(() => {
      return Promise.resolve({
        status: 500,
        json: () => {
          return {
            ...mockData
          };
        }
      });
    });

    const client = new Fetch();

    const response = await client.get('www.testing.com').catch(err => err);

    expect(response).toEqual(Error('Fetch.get() - Bad response from server'));
  });

  test('it handles cross-fetch errors', async () => {
    (mockCrossFetch as any).mockImplementationOnce(() => {
      return Promise.reject('mock error');
    });

    const client = new Fetch();

    const response = await client.get('www.testing.com').catch(err => err);

    expect(response).toEqual(Error('Fetch.get() error: mock error'));
  });
});
