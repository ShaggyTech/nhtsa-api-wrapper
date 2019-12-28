const converter = require('./getObjFromUrlStr')

let mockUrl =
  'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/5UXWX7C5*BA?format=json&modelyear=2011'

describe('Tests getObjFromUrlStr utility method', () => {
  test('it exists', async () => {
    expect(converter).toBeDefined()
    expect(converter).toEqual(expect.any(Function))
  })

  test('it returns empty object with url that fails regex test for valid URLs', async () => {
    expect(await converter()).toEqual({})
    expect(await converter('')).toEqual({})
    expect(await converter(null)).toEqual({})
    expect(await converter('http://')).toEqual({})
    expect(await converter('shouldNotPassValidUrl')).toEqual({})
    expect(await converter('htt:testapi.com/api/DecodeVinValues')).toEqual({})
  })

  test('it returns empty string with invalid url arg, not type String', async () => {
    expect(await converter(['test', 'return', 'empty'])).toEqual({})
    expect(await converter({ mockUrl: 'returns empty string' })).toEqual({})
  })

  test('it returns correct object with valid urls', async () => {
    const expected = {
      action: 'DecodeVinExtended',
      hostname: 'vpic.nhtsa.dot.gov',
      path: 'api/vehicles',
      protocol: 'https',
      queryString: '?format=json&modelyear=2011',
      resource: '5UXWX7C5*BA'
    }

    const expected1 = { ...expected, url: mockUrl }
    expect(await converter(mockUrl)).toEqual(expected1)

    // No resource or querystring in the url, should pass regex test for urls
    const noResourceMockUrl =
      'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended'
    const expectedNoResource = {
      ...expected,
      queryString: '',
      resource: '',
      url: noResourceMockUrl
    }
    expect(await converter(noResourceMockUrl)).toEqual(expectedNoResource)

    // No action, resource, or querystring in the url, should pass regex test for urls
    const noActionMockUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles'
    const expectedNoAction = {
      ...expected,
      action: '',
      queryString: '',
      resource: '',
      url: noActionMockUrl
    }
    expect(await converter(noActionMockUrl)).toEqual(expectedNoAction)

    // No path, action, resource, or querystring in the url, should pass regex test for urls
    const noPathMockUrl = 'https://vpic.nhtsa.dot.gov'
    const expectedNoPath = {
      ...expected,
      path: '',
      action: '',
      queryString: '',
      resource: '',
      url: noPathMockUrl
    }
    expect(await converter(noPathMockUrl)).toEqual(expectedNoPath)
  })
})
