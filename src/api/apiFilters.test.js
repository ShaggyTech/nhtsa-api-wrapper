const { filterFalsey } = require('./apiFilters.js')

test('filterFalsey() API response filter', () => {
  const mockResponse = [
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

  const filtered = filterFalsey(mockResponse)

  expect(filtered).toStrictEqual(desiredResult)
})
