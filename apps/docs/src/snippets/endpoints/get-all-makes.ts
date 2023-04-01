// #region type-results
type GetAllMakesResults = {
  Make_ID: number
  Make_Name: string
}
// #endregion type-results

// #region example-response
// Using GetAllMakes() - Truncated response with 10k+ results
const exampleResponse = {
  Count: 10596,
  Message: 'Response returned successfully',
  Results: [
    {
      Make_ID: 11897,
      Make_Name: ' MID-TOWN TRAILERS',
    },
    {
      Make_ID: 4877,
      Make_Name: '1/OFF KUSTOMS, LLC',
    },
    {
      Make_ID: 11257,
      Make_Name: '102 IRONWORKS, INC.',
    },
    {
      Make_ID: 6387,
      Make_Name: '17 CREEK ENTERPRISES',
    },
    // ...10k+ more results
  ],
  SearchCriteria: null,
}
// #endregion example-response

export type { GetAllMakesResults }
export { exampleResponse }
