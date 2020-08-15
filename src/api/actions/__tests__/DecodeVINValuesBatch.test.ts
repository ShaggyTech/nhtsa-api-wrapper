import { DecodeVINValuesBatch } from '../DecodeVINValuesBatch';
import { Fetch } from '../../Fetch';

import mockCrossFetch from 'cross-fetch';
import mockData from '../../../__mocks__/mockData';

const ACTION = 'DecodeVINValuesBatch';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new DecodeVINValuesBatch();
};

describe('NHTSA.DecodeVINValuesBatch()', () => {
  let client: DecodeVINValuesBatch = getClassInstance();

  beforeEach(() => {
    client = getClassInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /**************
   * Successes
   **************/

  test('it decodes a single VIN', async () => {
    const response = await client
      .DecodeVINValuesBatch('3VWD07AJ5EM388202')
      .catch((err) => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}/`;
    expect(mockCrossFetch).toHaveBeenCalledWith(
      expectedUrl,
      expect.objectContaining({ method: 'POST', body: expect.any(String) })
    );
  });

  test('it decodes a batch of VINs', async () => {
    const response = await client
      .DecodeVINValuesBatch('3VWD07AJ5EM388202, WUAPV64B03N905380')
      .catch((err) => err);
    expect(response).toStrictEqual(mockData);

    const expectedUrl = `${BASE_URL}/`;
    expect(mockCrossFetch).toHaveBeenCalledWith(
      expectedUrl,
      expect.objectContaining({ method: 'POST', body: expect.any(String) })
    );
  });

  /**************
   * Failures
   **************/

  test('it rejects with Error when no inputString argument is provided', async () => {
    const response = await client
      .DecodeVINValuesBatch(undefined as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "inputString" argument is required and must be of type string, got: <undefined> undefined`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid typeof inputString argument is provided', async () => {
    const response = await client
      .DecodeVINValuesBatch([{ fails: 'should fail' }] as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "inputString" argument is required and must be of type string, got: <array> [object Object]`
      )
    );
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.get errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'get')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client
      .DecodeVINValuesBatch('3VWD07AJ5EM388202')
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(mockCrossFetch).toHaveBeenCalledTimes(0);
  });
});
