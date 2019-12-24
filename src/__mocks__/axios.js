const get = jest.fn(() =>
  Promise.resolve({
    // `data` is the response that was provided by the server
    data: {
      Results: [
        {
          Value: 'axios is being mocked from src/__mocks__ folder',
          ValueId: '',
          Variable: 'Mocked Data',
          VariableId: 420
        },
        {
          Value: '',
          ValueId: '',
          Variable: 'Mocked Empty Value',
          VariableId: 240
        },
        {
          Value: null,
          ValueId: '',
          Variable: 'Mocked Null Value',
          VariableId: 334
        }
      ]
    },

    // `status` is the HTTP status code from the server response
    status: 200,

    // `statusText` is the HTTP status message from the server response
    statusText: 'OK',

    // `headers` the headers that the server responded with
    // All header names are lower cased
    headers: {},

    // `config` is the config that was provided to `axios` for the request
    config: {},

    // `request` is the request that generated this response
    // It is the last ClientRequest instance in node.js (in redirects)
    // and an XMLHttpRequest instance the browser
    request: {}
  })
)

exports.get = get
