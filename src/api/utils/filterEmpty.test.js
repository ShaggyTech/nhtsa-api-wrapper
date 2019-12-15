const { filterEmpty } = require('./filterEmpty')

describe('filterEmptyResults() - Filters falsey objects from api Response array', () => {
  test('Filters when { Value: null || empty string || Value[0] = "0" }', () => {
    const mockResponse = [
      // Should be removed from the array
      {
        Value: '',
        ValueId: '',
        Variable: 'Empty String',
        VariableId: 1001
      },
      {
        Value: null,
        ValueId: '',
        Variable: 'Null',
        VariableId: 1002
      },
      {
        Value: '0 - VIN decoded clean. Check Digit (9th position) is correct',
        ValueId: '',
        Variable: 'Error Text',
        VariableId: 1003
      },
      // Should remain in the array
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
})
