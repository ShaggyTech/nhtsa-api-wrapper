const wrapper = require('./main').ApiWrapper

const {
  DecodeVin,
  DecodeVinValues,
  DecodeVinExtended
} = require('./main').ApiWrapper

describe('Tests ApiWrapper (main.js class export)', () => {
  test('it exists', () => {
    expect(wrapper).toBeDefined()
  })

  describe('has correct properties', () => {
    test('BASE_URL exists', () => {
      expect(wrapper.BASE_URL).toBeDefined()
    })

    test('DEFAULT_FORMAT exists', () => {
      expect(wrapper.DEFAULT_FORMAT).toBeDefined()
    })
  })

  describe('Tests DecodeVin static class function', () => {
    test('it exists', () => {
      expect(wrapper.DecodeVin).toBeDefined()
      expect(DecodeVin).toBeDefined()
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

    test('it returns true when required via its own variable', async () => {
      const result = await DecodeVin('TEST_VIN').catch(err => err)
      expect(result).toEqual(expect.any(Object))
      expect(result.Results).toEqual(expect.any(Array))
      expect(result.Results[0].Variable).toEqual('Mocked Data')
      expect(result.Results[0].Value).toEqual(
        'axios is being mocked from src/__mocks__ folder'
      )
    })

    test('it handles errors', async () => {
      const result = await wrapper
        .DecodeVin('TEST_VIN', { baseUrl: { should: 'fail' } })
        .catch(err => {
          expect(err).rejects.toEqual(expect.any(Error))
        })
      expect(result).toBeUndefined()
    })
  })

  describe('Tests DecodeVinValues static class function', () => {
    test('it exists', () => {
      expect(wrapper.DecodeVinValues).toBeDefined()
      expect(DecodeVin).toBeDefined()
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

    test('it returns true when required via its own variable', async () => {
      const result = await DecodeVinValues('TEST_VIN').catch(err => err)
      expect(result).toEqual(expect.any(Object))
      expect(result.Results).toEqual(expect.any(Array))
      expect(result.Results[0].Variable).toEqual('Mocked Data')
      expect(result.Results[0].Value).toEqual(
        'axios is being mocked from src/__mocks__ folder'
      )
    })

    test('it handles errors', async () => {
      const result = await wrapper.DecodeVinValues().catch(err => {
        expect(err).rejects.toEqual(expect.any(Error))
      })
      expect(result).toBeUndefined()
    })
  })

  describe('Tests DecodeVinExtended static class function', () => {
    test('it exists', () => {
      expect(wrapper.DecodeVinExtended).toBeDefined()
      expect(DecodeVinExtended).toBeDefined()
    })

    test('it returns true', async () => {
      const result = await wrapper
        .DecodeVinExtended('TEST_VIN')
        .catch(err => err)
      expect(result).toEqual(expect.any(Object))
      expect(result.Results).toEqual(expect.any(Array))
      expect(result.Results[0].Variable).toEqual('Mocked Data')
      expect(result.Results[0].Value).toEqual(
        'axios is being mocked from src/__mocks__ folder'
      )
    })

    test('it returns true when required via its own variable', async () => {
      const result = await DecodeVinExtended('TEST_VIN').catch(err => err)
      expect(result).toEqual(expect.any(Object))
      expect(result.Results).toEqual(expect.any(Array))
      expect(result.Results[0].Variable).toEqual('Mocked Data')
      expect(result.Results[0].Value).toEqual(
        'axios is being mocked from src/__mocks__ folder'
      )
    })

    test('it handles errors', async () => {
      const result = await wrapper
        .DecodeVinExtended('TEST_VIN', { baseUrl: { should: 'fail' } })
        .catch(err => {
          expect(err).rejects.toEqual(expect.any(Error))
        })
      expect(result).toBeUndefined()
    })
  })
})
