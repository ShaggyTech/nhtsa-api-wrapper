// Mocks an Error returned from genApiUrl when called from ApiWrapper.generateApiUrl()
// 100% test coverage or bust

module.exports.genApiUrl = jest.fn(() => {
  return Promise.reject(
    new Error('mocked utils.genApiUrl error from __mocks__ folder')
  )
})
