// #region type-results
type GetWMIsForManufacturerResults = {
  Country: string | null
  CreatedOn: string
  DateAvailableToPublic: string
  Id: number
  Name: string
  UpdatedOn: string
  VehicleType: string
  WMI: string
}
// #endregion type-results

// #region example-response
// Using GetWMIsForManufacturer(987, vehicleType: 2)
const exampleResponse = {
  Count: 2,
  Message: 'Response returned successfully',
  Results: [
    {
      Country: null,
      CreatedOn: '2015-03-26',
      DateAvailableToPublic: '2015-01-01',
      Id: 987,
      Name: 'HONDA MOTOR CO., LTD',
      UpdatedOn: '2015-06-04',
      VehicleType: 'Passenger Car',
      WMI: 'JHM',
    },
    {
      Country: null,
      CreatedOn: '2015-03-27',
      DateAvailableToPublic: '2015-01-01',
      Id: 987,
      Name: 'HONDA MOTOR CO., LTD',
      UpdatedOn: null,
      VehicleType: 'Passenger Car',
      WMI: 'JH4',
    },
  ],
  SearchCriteria: 'Manufacturer: 987 , VehicleType: 2',
}
// #endregion example-response

export type { GetWMIsForManufacturerResults }
export { exampleResponse }
