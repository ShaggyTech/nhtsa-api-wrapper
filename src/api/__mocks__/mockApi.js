const fs = require('fs')

exports.default.decodeVin = (url) => new Promise((resolve, reject) => {
  // Load example NHTSA.gov API json data from mocked data file
  fs.readFile(`./tests/mocks/mockData/decodeVin.json`, 'utf8', (data, err) => {
    if (err) reject(err)
    // Resolve with the data parsed as JSON
    resolve(JSON.parse(data))
  })
})
