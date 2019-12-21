// Mocks an Error returned from genQueryString when called from genApiUrl
// 100% test coverage or bust

module.exports.genQueryString = jest.fn(() => {
  return Promise.reject(
    new Error('mocked genQueryString error from __mocks__ folder')
  )
})
