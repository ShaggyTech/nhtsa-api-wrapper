/**
 * @description Filter empty objects from the NHTSA.gov api response
 */
const filterEmpty = (/** JSON */ apiResultsArray) => {
  // Filter empty results objects from the array
  const filteredResultsArray = apiResultsArray.filter(resultsObj => {
    const value = resultsObj.Value
    // empty or null value
    if (!value) return false
    // value is == error text indicating no errors
    else if (value[0] === '0') return false
    return true
  })

  return filteredResultsArray
}

exports.filterEmpty = filterEmpty
