import { GetEquipmentPlantCodes } from '../GetEquipmentPlantCodes';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

const ACTION = 'GetEquipmentPlantCodes';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new GetEquipmentPlantCodes();
};

describe('GetEquipmentPlantCodes()', () => {
  let client: GetEquipmentPlantCodes;

  beforeEach(() => {
    client = getClassInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /**************
   * Successes
   **************/

  test('it gets equipment plant codes', async () => {
    const response = await client
      .GetEquipmentPlantCodes({
        year: 2020,
        equipmentType: 13,
        reportType: 'All',
      })
      .catch((err) => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}?year=2020&equipmentType=13&reportType=All&format=json`;
    expect(mockCrossFetch).toHaveBeenCalledWith(expectedUrl, {});
  });

  /**************
   * Failures
   **************/

  test('it rejects with Error when no params are provided', async () => {
    const response = await client
      .GetEquipmentPlantCodes(undefined as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params" argument must be of type object, got: <undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when no year param', async () => {
    const response = await client
      .GetEquipmentPlantCodes({
        year: undefined as any,
        equipmentType: 13,
        reportType: 'All',
      })
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.year" argument is required and must be of type number, got: <undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when no equipmentType param', async () => {
    const response = await client
      .GetEquipmentPlantCodes({
        year: 2020,
        equipmentType: undefined as any,
        reportType: 'All',
      } as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.equipmentType" argument is required and must be of type number, ` +
          `got: <undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when no reportType param', async () => {
    const response = await client
      .GetEquipmentPlantCodes({
        year: 2020,
        equipmentType: 13,
        reportType: undefined as any,
      } as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.reportType" argument is required and must be of type string, got: ` +
          `<undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .GetEquipmentPlantCodes({
        year: 2020,
        equipmentType: 13,
        reportType: 'All',
      })
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
      .GetEquipmentPlantCodes({
        year: 2020,
        equipmentType: 13,
        reportType: 'All',
      })
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });
});
