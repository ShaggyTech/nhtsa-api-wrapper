const { filterEmpty, genQueryString, genApiUrl } = require('../utils')

describe('api/utils/index - Index for API Utility Methods', () => {
  test('filterEmpty() is correctly exported/imported', async () => {
    expect(filterEmpty).toBeDefined()
    expect(filterEmpty).toBeInstanceOf(Function)
  })

  test('genQueryString() is correctly exported/imported', async () => {
    expect(genQueryString).toBeDefined()
    expect(genQueryString).toBeInstanceOf(Function)
  })

  test('genApiUrl() is correctly exported/imported', async () => {
    expect(genApiUrl).toBeDefined()
    expect(genApiUrl).toBeInstanceOf(Function)
  })
})
