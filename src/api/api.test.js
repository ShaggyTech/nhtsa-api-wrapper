const api = require('./api')

jest.mock('./api')

// test('decodeVin request mode', async () => {
//   const getResponse = await get(
//     'https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/3VWD07AJ5EM388202?format=json'
//   )
//   expect(getResponse).toBe('This came from a mocked function!')
// })

describe('get() api method tests', () => {

  test('method correctly resolves', async () => {
    expect(await api.get('url')).toStrictEqual('This came from a mocked function!')
  })

})
