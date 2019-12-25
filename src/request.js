const axios = require('axios')

const { isValidType } = require('./util/isValidType')

const get = async url => {
  // Gatekeeping url
  const validUrlType = await isValidType({ type: 'string', value: url })
  if (!url || !validUrlType) {
    return Promise.reject(
      new Error(
        `request.get(url) - invalid url arg, url must be of type String, got: ${url}`
      )
    )
  }

  return await axios
    .get(url)
    .then(response => response)
    .catch(err =>
      Promise.reject(
        new Error(`request.get() - axios.get error follows >>>: ${err}`)
      )
    )
}

module.exports = {
  get
}
