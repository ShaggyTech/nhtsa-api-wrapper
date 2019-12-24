// Mocks an Error returned from genQueryString when called from genApiUrl
// 100% test coverage or bust

module.exports.genQueryString = jest.fn(() => {
  return Promise.resolve('mocked genQueryString resolve from __mocks__ folder')
})
