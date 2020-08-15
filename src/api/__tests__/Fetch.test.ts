import { Fetch, DEFAULT_CONFIG } from '../Fetch';

import mockCrossFetch from 'cross-fetch';

import { mockData } from '../../__mocks__/cross-fetch';

describe('api/Fetch Class', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('it exists', () => {
    expect(Fetch).toBeDefined();
  });

  test('it instantiates', () => {
    const client = new Fetch();
    expect(client).toBeDefined();

    // Class Properties
    expect(client.apiResponseFormat).toStrictEqual('json');
    expect(client.baseUrl).toStrictEqual(
      'https://vpic.nhtsa.dot.gov/api/vehicles'
    );
    expect(client.options).toStrictEqual(DEFAULT_CONFIG.options);

    // Class Methods
    expect(client.get).toBeDefined();
    expect(client.buildQueryString).toBeDefined();
  });

  test('it instantiates with user provided config', () => {
    const userConfig = {
      apiResponseFormat: 'xml',
      baseUrl: 'https://www.shaggytech.com',
      options: {
        body: 'test body',
      },
    };

    const client = new Fetch(userConfig);
    expect(client).toBeDefined();

    // Class Properties
    expect(client.apiResponseFormat).toStrictEqual('json');
    expect(client.baseUrl).toStrictEqual('https://www.shaggytech.com');
    expect(client.options).toStrictEqual(userConfig.options);

    // Class Methods
    expect(client.get).toBeDefined();
    expect(client.buildQueryString).toBeDefined();
  });
});

describe('buildQueryString() class method', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('builds a Query String with no arguments', async () => {
    const client = new Fetch();
    const qs = await client.buildQueryString({});
    const expected = '?format=json';

    expect(qs).toStrictEqual(expected);
  });

  test('builds a Query String with undefined arguments', async () => {
    const client = new Fetch();
    const qs = await client.buildQueryString(undefined as any);
    const expected = '?format=json';

    expect(qs).toStrictEqual(expected);
  });

  test('builds a Query String with users params', async () => {
    const client = new Fetch();
    const qs = await client.buildQueryString({ modelYear: 2001 });
    const expected = '?modelYear=2001&format=json';

    expect(qs).toStrictEqual(expected);
  });

  test('builds a Query String and overrides user "format" param', async () => {
    const client = new Fetch();
    const qs = await client.buildQueryString({ format: 'xml' });
    const expected = '?format=json';

    expect(qs).toStrictEqual(expected);
  });

  test('builds a Query String and overrides user "format" param but allows other params', async () => {
    const client = new Fetch();
    const qs = await client.buildQueryString({
      format: 'xml',
      test: 'testing',
    });
    const expected = '?format=json&test=testing';

    expect(qs).toStrictEqual(expected);
  });

  describe('it handles allowEmptyStringValues option set to true:', () => {
    test('only one param is provided containing an empty string value', async () => {
      const client = new Fetch();
      const qs = await client
        .buildQueryString({ nothingHere: '' }, true)
        .catch((err) => err);
      expect(qs).toStrictEqual('?nothingHere=&format=json');
    });

    test('multiple params are provided containing empty string values', async () => {
      const client = new Fetch();
      const qs = await client
        .buildQueryString({ nothingHere: '', second: '' }, true)
        .catch((err) => err);
      expect(qs).toStrictEqual('?nothingHere=&second=&format=json');
    });

    test('a mix of non-empty values and emptry string values are provided', async () => {
      const client = new Fetch();
      const qs = await client
        .buildQueryString(
          { nothingHere: '', test: 'testing', second: '' },
          true
        )
        .catch((err) => err);
      expect(qs).toStrictEqual(
        '?nothingHere=&test=testing&second=&format=json'
      );
    });
  });
});

describe('get() class method', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  /*
   * Remove 'skip' from the test call to see a real response.
   * The test will then fail so that you can see the results.
   */
  test.skip('it returns a real response', async () => {
    (mockCrossFetch as any).mockImplementationOnce(
      jest.requireActual('cross-fetch')
    );

    const client = new Fetch();
    const response = await client.get(
      'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/3VWD07AJ5EM388202?format=json'
    );

    expect(response).toStrictEqual('fails');
    expect(mockCrossFetch).toBeDefined();
  });

  test('it returns a response', async () => {
    const client = new Fetch();
    const response = await client.get('testing.com');

    expect(response).toStrictEqual(mockData);
    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
  });

  test('it returns a response with user provided options', async () => {
    const client = new Fetch();
    const response = await client
      .get('www.shaggytech.com', { method: 'POST', body: 'test body' })
      .catch((err) => err);

    expect(response).toStrictEqual(mockData);
    expect(mockCrossFetch).toHaveBeenCalledWith('www.shaggytech.com', {
      method: 'POST',
      body: 'test body',
    });
  });

  test('it handles invalid url argument', async () => {
    const client = new Fetch();
    const response = await client.get([{}] as any).catch((err) => err);

    expect(response).toStrictEqual(
      Error('Fetch.get(url) - url argument must be of type string, got: array')
    );
  });

  test('it handles undefined url argument', async () => {
    const client = new Fetch();
    const response = await client.get(undefined as any).catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        'Fetch.get(url) - url argument must be of type string, got: undefined'
      )
    );
  });

  test('it handles invalid options argument', async () => {
    const client = new Fetch();
    const response = await client
      .get('testurl.test', 'testing' as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        'Fetch.get(url, options) - options argument must be of type object, got: string'
      )
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
        }),
      });
    });

    const client = new Fetch();
    const response = await client.get('www.shaggytech.com').catch((err) => err);
    const expectedError =
      'Fetch.get() http error: Error: Bad response from server, code: 500, text: mocked error, headers: mocked headers';

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(Error(expectedError));
  });

  test('it handles Fetch.get empty response', async () => {
    (mockCrossFetch as any).mockImplementationOnce(() => {
      return Promise.resolve(undefined) as any;
    });

    const client = new Fetch();
    const response = await client.get('www.shaggytech.com').catch((err) => err);
    const expectedError =
      'Fetch.get() http error: Error: Bad response from server, code: undefined, text: undefined, headers: undefined';

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(Error(expectedError));
  });

  test('it handles cross-fetch errors', async () => {
    (mockCrossFetch as any).mockImplementationOnce(() => {
      return Promise.reject('mock error');
    });

    const client = new Fetch();
    const response = await client.get('www.testing.com').catch((err) => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(Error('Fetch.get() http error: mock error'));
  });
});
