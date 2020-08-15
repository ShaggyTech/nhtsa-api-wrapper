import { GetVehicleTypesForMakeId } from '../GetVehicleTypesForMakeId';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

const ACTION = 'GetVehicleTypesForMakeId';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new GetVehicleTypesForMakeId();
};

describe('GetMakesForVehicleType()', () => {
  let client: GetVehicleTypesForMakeId;

  beforeEach(() => {
    client = getClassInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /**************
   * Successes
   **************/

  test('it gets vehicle types with a valid makeId', async () => {
    const response = await client
      .GetVehicleTypesForMakeId(890)
      .catch((err) => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}/890?format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  /**************
   * Failures
   **************/

  test('it rejects with an Error when no makeId argument is provided', async () => {
    const response = await client
      .GetVehicleTypesForMakeId(undefined as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "makeId" argument is required and must be of type number, got: ` +
          `<undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with an Error when invalid makeId argument is provided', async () => {
    const response = await client
      .GetVehicleTypesForMakeId('testing' as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "makeId" argument is required and must be of type number, got: ` +
          `<string> testing`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .GetVehicleTypesForMakeId(666)
      .catch((err) => err);

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
      .GetVehicleTypesForMakeId(767)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });
});
