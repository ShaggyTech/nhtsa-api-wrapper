const fs = require('fs')
const path = require('path')

module.exports.get = (url) => new Promise((resolve, reject) => {
  // Load example NHTSA.gov API json data from mocked data file
  fs.readFile(path.resolve(__dirname, `../__mocks__/mockData/decodeVin.json`), 'utf8', async (err, data) => {
    if (err) reject(err)
    // Resolve with the data parsed as JSON
    // resolve(JSON.parse(data))
    // console.log(await data)
    resolve('This came from a mocked function!')
  })
})
