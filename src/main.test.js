const wrapper = require('./main')

describe('Tests ApiWrapper (main.js class export)', () => {
  test('it exists', () => {
    expect(wrapper).toBeDefined()
  })

  describe('Tests DecodeVin static class function', () => {
    test('it exists', () => {
      expect(wrapper.DecodeVin).toBeDefined()
    })

    test('it returns true', async () => {
      const result = await wrapper.DecodeVin('TEST_VIN').catch(err => err)
      expect(result).toEqual(expect.any(Object))
      expect(result.Results[0].Variable).toEqual('Mocked Data')
    })
  })
})
