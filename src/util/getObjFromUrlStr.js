/**
 * Returns an object with key:values for each named part of the URL string
 *
 * https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/5UXWX7C5*BA?format=json&modelyear=2011
 *
 * Returns:
 * {
 *   "action": "DecodeVinExtended",
 *   "hostname": "vpic.nhtsa.dot.gov",
 *   "path": "api/vehicles",
 *   "protocol": "https",
 *   "queryString": "?format=json&modelyear=2011",
 *   "resource": "5UXWX7C5*BA"
 * }
 *
 *
 * [
 *     [0]- protocol     [2]- hostname        [3]/[4]- path      [5]- action
 *     "https:", "", "vpic.nhtsa.dot.gov", "api", "vehicles", "decodevinextended",
 *     [6]- (resource / queryString)
 *     "5UXWX7C5*BA / ?format=json&modelyear=2011"
 * ]
 */

// Simple regex test to verify urls
const isValidUrl = url => {
  const regex = new RegExp(
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)().*?$/i
  )
  return regex.test(url)
}

const getObjFromUrlStr = async url => {
  // return empty string with empty/invalid url values
  if (!url || typeof url !== 'string') return Promise.resolve(Object.assign({}))

  const validUrl = isValidUrl(url)

  if (!validUrl) return Promise.resolve(Object.assign({}))

  const splitUrl = url.split('/')

  // protocol and hostname should always be present in a valid URL string
  let protocol = `${splitUrl[0].split(':')[0]}`
  let hostname = `${splitUrl[2]}`

  // urls with no path or action will still pass as a validUrl so extra steps are needed
  let path = splitUrl[3]
    ? `${splitUrl[3]}${splitUrl[4] ? '/' : ''}${splitUrl[4] || ''}`
    : ''
  let action = `${!validUrl ? '' : splitUrl[5] ? splitUrl[5] : ''}`
  let resource = ''
  let queryString = ''

  const fullResource = splitUrl[6]
  if (fullResource) {
    const splitResource = fullResource.split('?')
    resource = `${validUrl ? splitResource[0] : ''}`
    queryString = `?${splitResource[1]}` || ''
  }

  return Promise.resolve({
    protocol,
    hostname,
    path,
    action,
    resource,
    queryString,
    url
  })
}

module.exports = getObjFromUrlStr
