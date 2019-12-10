// example error code object that will be found in response array
//  {
//     "Value": "1",
//     "ValueId": "1",
//     "Variable": "Error Code",
//     "VariableId": 143
// }

module.exports = {
  /**
   * @description Filter empty objects from the NHTSA.gov api response
   */
  filterEmpty: (/** JSON */ apiResultsArray) => {
    // Filter empty results objects from the array
    const filteredResultsArray = apiResultsArray.filter(resultsObj => {
      const id = resultsObj.ValueId
      if (id !== null && id !== '' && id !== '0') return true
      return false
    })

    return filteredResultsArray
  }
}
