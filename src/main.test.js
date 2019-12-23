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
      const result = await wrapper.DecodeVin('TEST_VIN')
      expect(result).toEqual({
        config: {},
        data: { mockedData: 'from __mocks__ folder' },
        headers: {},
        request: {},
        status: 200,
        statusText: 'OK',
        url:
          'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/TEST_VIN?format=json'
      })
    })
  })
})
