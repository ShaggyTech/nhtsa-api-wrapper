const axios = require('axios')

const { isValidType } = require('./util/isValidType')

const get = async url => {
  const validUrl = await isValidType({ type: 'string', value: url })
  // Gatekeeping url
  if (!url || !validUrl) {
    return Promise.reject(
      new Error(
        `request.get(url) - invalid url arg, url must be of type String, got: ${url}`
      )
    )
  }

  return await axios
    .get(url)
    .then(response => ({ ...response, url }))
    .catch(err =>
      Promise.reject(
        new Error(`request.get() - axios.get error follows >>>: ${err}`)
      )
    )
}

module.exports = {
  get
}
