// #region type-results
type GetMakesForVehicleTypeResults = {
  MakeId: number
  MakeName: string
  VehicleTypeId: number
  VehicleTypeName: string
}
// #endregion type-results

// #region example-response
// Using GetMakesForVehicleType('truck') - truncated for brevity
const exampleResponse = {
  Count: 171,
  Message: 'Response returned successfully',
  Results: [
    {
      MakeId: 441,
      MakeName: 'TESLA',
      VehicleTypeId: 3,
      VehicleTypeName: 'Truck ',
    },
    {
      MakeId: 448,
      MakeName: 'TOYOTA',
      VehicleTypeId: 3,
      VehicleTypeName: 'Truck ',
    },
    {
      MakeId: 449,
      MakeName: 'MERCEDES-BENZ',
      VehicleTypeId: 3,
      VehicleTypeName: 'Truck ',
    },
    {
      MakeId: 450,
      MakeName: 'FREIGHTLINER',
      VehicleTypeId: 3,
      VehicleTypeName: 'Truck ',
    },
    {
      MakeId: 460,
      MakeName: 'FORD',
      VehicleTypeId: 3,
      VehicleTypeName: 'Truck ',
    },
    {
      MakeId: 464,
      MakeName: 'LINCOLN',
      VehicleTypeId: 3,
      VehicleTypeName: 'Truck ',
    },
    {
      MakeId: 465,
      MakeName: 'MERCURY',
      VehicleTypeId: 3,
      VehicleTypeName: 'Truck ',
    },
    {
      MakeId: 467,
      MakeName: 'CHEVROLET',
      VehicleTypeId: 3,
      VehicleTypeName: 'Truck ',
    },
    {
      MakeId: 469,
      MakeName: 'CADILLAC',
      VehicleTypeId: 3,
      VehicleTypeName: 'Truck ',
    },
    {
      MakeId: 472,
      MakeName: 'GMC',
      VehicleTypeId: 3,
      VehicleTypeName: 'Truck ',
    },
    {
      MakeId: 473,
      MakeName: 'MAZDA',
      VehicleTypeId: 3,
      VehicleTypeName: 'Truck ',
    },
    {
      MakeId: 474,
      MakeName: 'HONDA',
      VehicleTypeId: 3,
      VehicleTypeName: 'Truck ',
    },
    {
      MakeId: 475,
      MakeName: 'ACURA',
      VehicleTypeId: 3,
      VehicleTypeName: 'Truck ',
    },
    {
      MakeId: 476,
      MakeName: 'DODGE',
      VehicleTypeId: 3,
      VehicleTypeName: 'Truck ',
    },
    // ... 156 more items
  ],
  SearchCriteria: 'Vehicle Type: truck',
}
// #endregion example-response

export type { GetMakesForVehicleTypeResults }
export { exampleResponse }
