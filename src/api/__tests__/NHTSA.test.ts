import { NHTSA } from '../NHTSA';
import { DEFAULT_CONFIG } from '../Fetch';

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

  test('it decodes a VIN', async () => {
    const client = new NHTSA();
    expect(client).toBeDefined();

    // const response = await client.DecodeVin('3VWD07AJ5EM388202');
    // console.log(response);
    // expect(response).toEqual('test');
  });
});
