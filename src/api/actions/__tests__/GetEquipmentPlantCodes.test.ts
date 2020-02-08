import { GetEquipmentPlantCodes } from '../GetEquipmentPlantCodes';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';

import mockData from '../../../__mocks__/mockData';

afterEach(() => {
  jest.clearAllMocks();
});

describe('GetEquipmentPlantCodes()', () => {
  test('it gets equipment plant codes', async () => {
    const client = new GetEquipmentPlantCodes();
    const response = await client
      .GetEquipmentPlantCodes({
        year: 2020,
        equipmentType: 13,
        reportType: 'All'
      })
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockData);
  });

  test('it rejects with Error when no params are provided ', async () => {
    const client = new GetEquipmentPlantCodes();
    const response = await client
      .GetEquipmentPlantCodes(undefined as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetEquipmentPlantCodes, "year" parameter is required, got: undefined'
      )
    );
  });

  test('it rejects with Error when no year param ', async () => {
    const client = new GetEquipmentPlantCodes();
    const response = await client
      .GetEquipmentPlantCodes({ equipmentType: 13, reportType: 'All' } as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetEquipmentPlantCodes, "year" parameter is required, got: undefined'
      )
    );
  });

  test('it rejects with Error when no equipmentType param ', async () => {
    const client = new GetEquipmentPlantCodes();
    const response = await client
      .GetEquipmentPlantCodes({ year: '2020', reportType: 'All' } as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetEquipmentPlantCodes, "equipmentType" parameter is required, got: undefined'
      )
    );
  });

  test('it rejects with Error when no reportType param ', async () => {
    const client = new GetEquipmentPlantCodes();
    const response = await client
      .GetEquipmentPlantCodes({ year: '2020', equipmentType: '13' } as any)
      .catch(err => err);

    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
    expect(response).toEqual(
      Error(
        'GetEquipmentPlantCodes, "reportType" parameter is required, got: undefined'
      )
    );
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetEquipmentPlantCodes();
    const response = await client
      .GetEquipmentPlantCodes({
        year: 2020,
        equipmentType: 13,
        reportType: 'All'
      })
      .catch(err => err);

    expect(client.buildQueryString).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetEquipmentPlantCodes, Error building query string: mock error')
    );
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const client = new GetEquipmentPlantCodes();
    const response = await client
      .GetEquipmentPlantCodes({
        year: 2020,
        equipmentType: 13,
        reportType: 'All'
      })
      .catch(err => err);

    expect(client.get).toHaveBeenCalledTimes(1);
    expect(response).toEqual(
      Error('GetEquipmentPlantCodes, Fetch.get() error: mock error')
    );
  });
});
