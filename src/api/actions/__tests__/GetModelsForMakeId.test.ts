import { GetModelsForMakeId } from '../GetModelsForMakeId';
import { Fetch } from '../../Fetch';

import mockData from '../../../__mocks__/mockData';

const ACTION = 'GetModelsForMakeId';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new GetModelsForMakeId();
};

describe('GetModelsForMakeId()', () => {
  let client: GetModelsForMakeId;

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

  test('it gets vehicle models with a valid makeId', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const response = await client.GetModelsForMakeId(381).catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);

    const expectedUrl = `${BASE_URL}/381?format=json`;
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl, {});
  });

  /**************
   * Failures
   **************/

  test('it rejects with Error when no makeID argument is provided', async () => {
    const response = await client
      .GetModelsForMakeId(undefined as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "makeId" argument is required and must be of type number, got: ` +
          `<undefined> undefined`
      )
    );
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid makeId is provided', async () => {
    const response = await client
      .GetModelsForMakeId('audi' as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "makeId" argument is required and must be of type number, got: ` +
          `<string> audi`
      )
    );
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client.GetModelsForMakeId(381).catch((err) => err);

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

    const response = await client.GetModelsForMakeId(999).catch((err) => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });
});
