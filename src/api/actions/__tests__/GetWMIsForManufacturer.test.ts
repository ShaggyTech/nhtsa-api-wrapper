import { GetWMIsForManufacturer } from '../GetWMIsForManufacturer';
import { Fetch } from '../../Fetch';

import mockData from '../../../__mocks__/mockData';

const ACTION = 'GetWMIsForManufacturer';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new GetWMIsForManufacturer();
};

describe('NHTSA.DecodeWMI()', () => {
  let client: GetWMIsForManufacturer;

  beforeEach(() => {
    fetchMock.resetMocks();
    client = getClassInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /**************
   * Successes
   **************/

  test('it gets WMIs for a valid manufacturer via name', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const response = await client
      .GetWMIsForManufacturer('Audi')
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);

    const expectedUrl = `${BASE_URL}/Audi?format=json`;
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets WMIs for a valid manufacturer via id number', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const response = await client
      .GetWMIsForManufacturer(1)
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);

    const expectedUrl = `${BASE_URL}/1?format=json`;
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets WMIs for a valid manufacturer via name and vehicleType by name', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const response = await client
      .GetWMIsForManufacturer('audi', { vehicleType: 'car' })
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);

    const expectedUrl = `${BASE_URL}/audi?vehicleType=car&format=json`;
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets WMIs for a valid manufacturer via name and vehicleType by id number', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const response = await client
      .GetWMIsForManufacturer('audi', { vehicleType: 1 })
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);

    const expectedUrl = `${BASE_URL}/audi?vehicleType=1&format=json`;
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl, {});
  });

  /**************
   * Failures
   **************/

  test('it returns an Error when no manufacturer argument is provided', async () => {
    const response = await client
      .GetWMIsForManufacturer(undefined as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "manufacturer" argument is required and must be of type string or number, got: ` +
          `<undefined> undefined`
      )
    );
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it rejects with an Error when invalid manufacturer argument is provided', async () => {
    const response = await client
      .GetWMIsForManufacturer({ testing: 'test' } as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "manufacturer" argument is required and must be of type string or number, got: ` +
          `<object> [object Object]`
      )
    );
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid typeof params argument is provided', async () => {
    const response = await client
      .GetWMIsForManufacturer('Volkswagen', ['should fail'] as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params" argument must be of type object, got: <array> should fail`
      )
    );
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid typeof params.vehicleType argument is provided', async () => {
    const response = await client
      .GetWMIsForManufacturer('Volkswagen', {vehicleType: ['should fail']} as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "vehicleType" argument must be of type string or number, got: <array> should fail`
      )
    );
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .GetWMIsForManufacturer('Volkswagen')
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Error building query string: mock error`)
    );
    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .GetWMIsForManufacturer('Audi')
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });
});
