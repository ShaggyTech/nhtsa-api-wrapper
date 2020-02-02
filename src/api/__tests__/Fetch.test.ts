import { Fetch, DEFAULT_CONFIG } from '../Fetch';

import mockCrossFetch from 'cross-fetch';

import { mockData } from '../../__mocks__/cross-fetch';

afterEach(() => {
  jest.clearAllMocks();
});

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
    expect(client.apiResponseFormat).toEqual('json');
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
  /*
   * Remove 'skip' from the test call to see a real response.
   * The test will then fail so that you can see the results.
   */
  test.skip('it returns a real response', async () => {
    (mockCrossFetch as any).mockImplementationOnce(
      require.requireActual('cross-fetch')
    );

    const client = new Fetch();
    const response = await client.get(
      'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/3VWD07AJ5EM388202?format=json'
    );

    expect(response).toEqual('fails');
    expect(mockCrossFetch).toBeDefined();
  });

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
    const mockedErrorResponse = { ...mockData, status: 500 };
    (mockCrossFetch as any).mockImplementationOnce(() => {
      return Promise.resolve({
        status: 500,
        statusText: 'mocked error',
        headers: 'mocked headers',
        json: jest.fn(async () => {
          return Promise.resolve(mockedErrorResponse);
        })
      });
    });

    const client = new Fetch();
    const response = await client.get('www.shaggytech.com').catch(err => err);
    const expectedError =
      'Fetch.get() http error: Error: Bad response from server, code: 500, text: mocked error, headers: mocked headers';

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(Error(expectedError));
  });

  test('it handles Fetch.get empty response', async () => {
    (mockCrossFetch as any).mockImplementationOnce(() => {
      return Promise.resolve(undefined) as any;
    });

    const client = new Fetch();
    const response = await client.get('www.shaggytech.com').catch(err => err);
    const expectedError =
      'Fetch.get() http error: Error: Bad response from server, code: undefined, text: undefined, headers: undefined';

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(Error(expectedError));
  });

  test('it handles cross-fetch errors', async () => {
    (mockCrossFetch as any).mockImplementationOnce(() => {
      return Promise.reject('mock error');
    });

    const client = new Fetch();
    const response = await client.get('www.testing.com').catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(Error('Fetch.get() http error: mock error'));
  });
});
