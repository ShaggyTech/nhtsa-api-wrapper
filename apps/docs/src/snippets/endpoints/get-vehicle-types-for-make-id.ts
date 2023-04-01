// #region type-results
type GetVehicleTypesForMakeIdResults = {
  VehicleTypeId: number
  VehicleTypeName: string
}
// #endregion type-results

// #region example-response
// Using GetVehicleTypesForMakeId(449)
const exampleResponse = {
  Count: 5,
  Message: 'Response returned successfully',
  Results: [
    {
      VehicleTypeId: 2,
      VehicleTypeName: 'Passenger Car',
    },
    {
      VehicleTypeId: 3,
      VehicleTypeName: 'Truck ',
    },
    {
      VehicleTypeId: 5,
      VehicleTypeName: 'Bus',
    },
    {
      VehicleTypeId: 7,
      VehicleTypeName: 'Multipurpose Passenger Vehicle (MPV)',
    },
    {
      VehicleTypeId: 10,
      VehicleTypeName: 'Incomplete Vehicle',
    },
  ],
  SearchCriteria: 'Make ID: 449',
}
// #endregion example-response

export type { GetVehicleTypesForMakeIdResults }
export { exampleResponse }
