/**
 * @description Filter falsey objects from the NHTSA.gov api response
 */
exports.default.filterFalsey = (/** JSON */ apiResponse) => {
  // example error code object that will be found in response array
  //  {
  //     "Value": "1",
  //     "ValueId": "1",
  //     "Variable": "Error Code",
  //     "VariableId": 143
  // }

  // TODO:  filter false/null/empty response objects and add an Error object to the response
  return null
}
