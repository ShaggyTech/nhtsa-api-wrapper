const ApiWrapper = require('./main').ApiWrapper

const wrapper = new ApiWrapper()

describe('Tests ApiWrapper (main.js class export)', () => {
  test('it exists', () => {
    expect(wrapper).toBeDefined()
  })

  describe('has correct properties', () => {
    test('BASE_URL exists', () => {
      expect(ApiWrapper.BASE_URL).toBeDefined()
    })

    test('DEFAULT_FORMAT exists', () => {
      expect(ApiWrapper.DEFAULT_FORMAT).toBeDefined()
    })
  })

  describe('Tests DecodeVin static class function', () => {
    test('it exists', () => {
      expect(wrapper.DecodeVin).toBeDefined()
    })

    test('it returns true', async () => {
      const result = await wrapper.DecodeVin('TEST_VIN').catch(err => err)
      expect(result).toEqual(expect.any(Object))
      expect(result.Results).toEqual(expect.any(Array))
      expect(result.Results[0].Variable).toEqual('Mocked Data')
      expect(result.Results[0].Value).toEqual(
        'axios is being mocked from src/__mocks__ folder'
      )
    })

    test('it handles errors', async () => {
      const result = await wrapper.DecodeVin().catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(result).toBeUndefined()
    })
  })

  describe('Tests DecodeVinValues static class function', () => {
    test('it exists', () => {
      expect(wrapper.DecodeVinValues).toBeDefined()
    })

    test('it returns true', async () => {
      const result = await wrapper.DecodeVinValues('TEST_VIN').catch(err => err)
      expect(result).toEqual(expect.any(Object))
      expect(result.Results).toEqual(expect.any(Array))
      expect(result.Results[0].Variable).toEqual('Mocked Data')
      expect(result.Results[0].Value).toEqual(
        'axios is being mocked from src/__mocks__ folder'
      )
    })

    test('it handles errors', async () => {
      const result = await wrapper.DecodeVinValues().catch(err => {
        expect(err).toEqual(expect.any(Error))
      })
      expect(result).toBeUndefined()
    })
  })
})
