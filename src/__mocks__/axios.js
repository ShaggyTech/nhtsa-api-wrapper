const get = jest.fn(() => Promise.resolve({ data: 'default axios response' }))

exports.get = get
