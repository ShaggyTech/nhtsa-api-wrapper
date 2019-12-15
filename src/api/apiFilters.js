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
      const value = resultsObj.Value
      if (!value) return false
      return true
    })

    return filteredResultsArray
  }

  /**
   * @description Catch error objects in the api response and add them as 'Error': object in response
   */
}
