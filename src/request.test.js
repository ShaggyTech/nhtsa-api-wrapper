const mockAxios = require('axios')
const { get } = require('./request')

describe('test request.get() method', () => {
  test('returns valid response.data after calling axios.get', async () => {
    // Modify the resolved value of __mocked__ axios.get() function
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { mockedData: 'test data' } })
    )
    // get some response data from our nhtsa.gov api wrapper
    const response = await get('http://test.api.com/').catch(err => {
      expect(err).toEqual('this should never be reached')
    })

    expect(response).toBeDefined()
    expect(response.data).toEqual({ mockedData: 'test data' })
  })

  test('handles errors thrown by axios.get', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject('simulated error')
    )
    const response = await get('url').catch(err => {
      expect(err).toEqual(expect.any(Error))
    })
    expect(response).toBeUndefined()
  })

  test('rejects invalid url arguments', async () => {
    // no url provided
    const response1 = await get().catch(err => {
      expect(err).toEqual(expect.any(Error))
    })
    expect(response1).toBeUndefined()

    // url is not a string
    const response2 = await get({ test: 'should not pass' }).catch(err => {
      expect(err).toEqual(expect.any(Error))
    })
    expect(response2).toBeUndefined()
  })
})
