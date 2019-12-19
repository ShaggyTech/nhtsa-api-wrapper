const { isValidType } = require('./isValidType')

describe('api/utils genApiUrl() method', () => {
  test('it is defined', async () => {
    expect(isValidType).toBeDefined()
  })

  describe('Successes ', () => {
    test('returns true with known true args', async () => {
      const isValid = await isValidType({
        type: 'string',
        value: 'this is a string'
      })
      expect(isValid).toBe(true)
    })
    test('returns false with known false args', async () => {
      const isValid = await isValidType({
        type: 'Object',
        value: () => 'this is a function'
      })
      expect(isValid).toBe(false)
    })
  })
  describe('it fails with ', () => {
    test('missing "type" arg', async () => {
      const isValid = await isValidType({
        value: 'this is a string'
      })
      expect(isValid).toBe(false)
    })

    test('missing "value" arg', async () => {
      const isValid = await isValidType({
        type: 'string'
      })
      expect(isValid).toBe(false)
    })

    test('invalid "type" arg', async () => {
      const isValid = await isValidType({
        type: ['i am not of type String and should fail'],
        value: { test: 'value' }
      })
      expect(isValid).toBe(false)
    })
  })
})
