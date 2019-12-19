// const { filterEmpty } = require('../utils')
// const genEndPoint = require('../utils').genEndpoint
// const { genQueryString } = require('./index')

// const utils = require('../utils')
// const filterEmpty = utils.filterEmpty
// const genEndpoint = utils.genEndpoint
// const genQueryString = utils.genQueryString
const filter = require('../utils').filterEmpty
const { genEndpoint, genQueryString, genApiUrl } = require('../utils')

describe('api/utils/index - Index for API Utility Methods', () => {
  test('filterEmpty() is correctly exported/imported', async () => {
    expect(filter).toBeDefined()
    expect(filter).toBeInstanceOf(Function)
  })

  test('genEndpoint() is correctly exported/imported', async () => {
    expect(genEndpoint).toBeDefined()
    expect(genEndpoint).toBeInstanceOf(Function)
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
