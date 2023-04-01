// #region type-results
type DecodeWMIResults = {
  CommonName: string
  CreatedOn: string
  DateAvailableToPublic: string
  Make: string
  ManufacturerName: string
  ParentCompanyName: string
  URL: string
  UpdatedOn: string | null
  VehicleType: string
}
// #endregion type-results

// #region example-response
// Using DecodeWMI('WVW')
const exampleResponse = {
  Count: 1,
  Message: 'Results returned successfully',
  Results: [
    {
      CommonName: 'Volkswagen',
      CreatedOn: '2015-06-01',
      DateAvailableToPublic: '2015-01-01',
      Make: 'VOLKSWAGEN',
      ManufacturerName: 'VOLKSWAGEN AG',
      ParentCompanyName: '',
      URL: 'volkswagenag.com',
      UpdatedOn: '2022-08-08',
      VehicleType: 'Passenger Car',
    },
  ],
  SearchCriteria: 'WMI:WVW',
}
// #endregion example-response

export type { DecodeWMIResults }
export { exampleResponse }
