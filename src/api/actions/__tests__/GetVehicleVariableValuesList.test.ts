import { GetVehicleVariableValuesList } from '../GetVehicleVariableValuesList';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

const ACTION = 'GetVehicleVariableValuesList';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new GetVehicleVariableValuesList();
};

describe('GetVehicleVariableValuesList()', () => {
  let client: GetVehicleVariableValuesList;

  beforeEach(() => {
    client = getClassInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /**************
   * Successes
   **************/

  test('it gets vehicle variable values with a variableValue as string name', async () => {
    const response = await client
      .GetVehicleVariableValuesList('battery type')
      .catch(err => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}/battery%20type?format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets vehicle variable values with a variableValue as number ID', async () => {
    const response = await client
      .GetVehicleVariableValuesList(2)
      .catch(err => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}/2?format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  /**************
   * Failures
   **************/

  test('it rejects with an Error when no variableValue is provided', async () => {
    const response = await client
      .GetVehicleVariableValuesList(undefined as any)
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "variableValue" argument is required and must be of type string or number, got: ` +
          `<undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with an Error when invalid variableValue is provided', async () => {
    const response = await client
      .GetVehicleVariableValuesList({ testing: 'test' } as any)
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "variableValue" argument is required and must be of type string or number, got: ` +
          `<object> [object Object]`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .GetVehicleVariableValuesList(33)
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
      .GetVehicleVariableValuesList('13')
      .catch(err => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });
});
