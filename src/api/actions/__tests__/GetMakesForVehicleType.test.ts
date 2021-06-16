import { GetMakesForVehicleType } from '../GetMakesForVehicleType';
import { Fetch } from '../../Fetch';

import mockData from '../../../__mocks__/mockData';

const ACTION = 'GetMakesForVehicleType';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new GetMakesForVehicleType();
};

describe('GetMakesForVehicleType()', () => {
  let client: GetMakesForVehicleType;

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

  test('it gets makes for a vehicle type', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const response = await client
      .GetMakesForVehicleType('audi')
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);

    const expectedUrl = `${BASE_URL}/audi?format=json`;
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl, {});
  });

  /**************
   * Failures
   **************/

  test('it rejects with Error when no typeName argument is provided', async () => {
    const response = await client
      .GetMakesForVehicleType(undefined as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "typeName" argument is required and must be of type string, got: ` +
          `<undefined> undefined`
      )
    );
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid typeName argument is provided', async () => {
    const response = await client
      .GetMakesForVehicleType(1234 as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "typeName" argument is required and must be of type string, got: ` +
          `<number> 1234`
      )
    );
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .GetMakesForVehicleType('audi')
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
      .GetMakesForVehicleType('fails')
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });
});
