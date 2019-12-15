const { filterEmpty } = require('./apiFilters.js')

test('filterEmpty() API response filter', () => {
  const mockResponse = [
    {
      Value: '',
      ValueId: '',
      Variable: 'Suggested VIN',
      VariableId: 142
    },
    {
      Value: null,
      ValueId: '',
      Variable: 'Suggested VIN',
      VariableId: 142
    },
    {
      Value: '',
      ValueId: '',
      Variable: 'Suggested VIN',
      VariableId: 142
    },
    {
      Value: 'VOLKSWAGEN',
      ValueId: '482',
      Variable: 'Make',
      VariableId: 26
    }
  ]

  const desiredResult = [
    {
      Value: 'VOLKSWAGEN',
      ValueId: '482',
      Variable: 'Make',
      VariableId: 26
    }
  ]

  const filtered = filterEmpty(mockResponse)

  expect(filtered).toStrictEqual(desiredResult)
})
