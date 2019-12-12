const mockAxios = require('axios')
const { get } = require('./api')

describe('test api.get() method', () => {
  test('returns valid response.data after calling axios.get', async () => {
    // Modify the resolved value of __mocked__ axios.get() function
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: 'test data' })
    )
    // get some response data from our nhtsa.gov api wrapper
    const response = await get('url')

    expect(response).toStrictEqual('test data')
  })

  test('handles errors thrown by axios.get', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject('simulated error')
    )
    const response = await get('url')
    expect(response).toStrictEqual('simulated error')
  })

  test('rejects invalid url arguments', async () => {
    // no url provided
    const response1 = await get()
    expect(response1).toEqual(
      expect.objectContaining({
        errMsg: expect.any(String)
      })
    )

    // url is not a string
    const response2 = await get({ url: 'url' })
    expect(response2).toEqual(
      expect.objectContaining({
        errMsg: expect.any(String)
      })
    )
  })
})
