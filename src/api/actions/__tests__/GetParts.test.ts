import { GetParts } from '../GetParts';
import { Fetch } from '../../Fetch';

import mockData from '../../../__mocks__/mockData';

const ACTION = 'GetParts';
const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/${ACTION}`;

const getClassInstance = () => {
  return new GetParts();
};

describe('GetParts()', () => {
  let client: GetParts;

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

  test('it gets parts list with no optional params', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const response = await client.GetParts();
    expect(response.Results).toStrictEqual(mockData.Results);

    const expectedUrl = `${BASE_URL}?format=json`;
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets parts list with all optional params', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const response = await client
      .GetParts({
        type: 156,
        fromDate: '11/10/2010',
        toDate: '11/20/2019',
        page: 2,
      })
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);

    const expectedUrl = `${BASE_URL}?type=156&fromDate=11/10/2010&toDate=11/20/2019&page=2&format=json`;
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets parts list with two optional params (type and page)', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const response = await client
      .GetParts({
        type: 300,
        page: 25,
      })
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);

    const expectedUrl = `${BASE_URL}?type=300&page=25&format=json`;
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl, {});
  });

  test('it gets parts list with one param (page)', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const response = await client
      .GetParts({
        page: 5,
      })
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);

    const expectedUrl = `${BASE_URL}?page=5&format=json`;
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl, {});
  });

  /**************
   * Failures
   **************/

  test('it rejects with Error when invalid params are provided', async () => {
    const response = await client
      .GetParts('testing' as any)
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params" argument must be of type object, got: <string> testing`
      )
    );
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid params.type is provided', async () => {
    const response = await client
      .GetParts({ type: 'should fail' as any })
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.type" argument must be of type number, got: <string> should fail`
      )
    );
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid params.fromDate is provided', async () => {
    const response = await client
      .GetParts({ fromDate: 122320 as any })
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.fromDate" argument must be of type string, got: <number> 122320`
      )
    );
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid params.toDate is provided', async () => {
    const response = await client
      .GetParts({ toDate: 123456 as any })
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.toDate" argument must be of type string, got: <number> 123456`
      )
    );
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it rejects with Error when invalid params.page is provided', async () => {
    const response = await client
      .GetParts({ page: true as any })
      .catch((err) => err);

    expect(response).toStrictEqual(
      Error(
        `${ACTION}, "params.page" argument must be of type number, got: <boolean> true`
      )
    );
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  test('it handles Fetch.buildQueryString errors', async () => {
    jest
      .spyOn(Fetch.prototype, 'buildQueryString')
      .mockImplementationOnce(() => Promise.reject('mock error'));

    const response = await client.GetParts().catch((err) => err);

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

    const response = await client.GetParts().catch((err) => err);

    expect(response).toStrictEqual(
      Error(`${ACTION}, Fetch.get() error: mock error`)
    );
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledTimes(0);
  });
});
