// #region type-results
type GetManufacturerDetailsResults = {
  Address: string | null
  Address2: string | null
  City: string | null
  ContactEmail: string | null
  ContactFax: string | null
  ContactPhone: string | null
  Country: string | null
  DBAs: string | null
  EquipmentItems: Array<unknown>
  LastUpdated: string
  ManufacturerTypes: Array<{
    Name: string
  }>
  Mfr_CommonName: string | null
  Mfr_ID: number | null
  Mfr_Name: string | null
  OtherManufacturerDetails: string | null
  PostalCode: string | null
  PrimaryProduct: string | null
  PrincipalFirstName: string | null
  PrincipalLastName: string | null
  PrincipalPosition: string | null
  StateProvince: string | null
  SubmittedName: string | null
  SubmittedOn: string
  SubmittedPosition: string | null
  VehicleTypes: Array<{
    GVWRFrom: string
    GVWRTo: string
    IsPrimary: boolean
    Name: string
  }>
}
// #endregion type-results

// #region example-response
// Using GetMakesForVehicleType('truck') - truncated for brevity
const exampleResponse = {
  Count: 1,
  Message: 'Response returned successfully',
  Results: [
    {
      Address: '1 Tesla Road',
      Address2: null,
      City: 'Austin',
      ContactEmail: 'erwilliams@tesla.com',
      ContactFax: null,
      ContactPhone: '(508)272-8358',
      Country: 'UNITED STATES (USA)',
      DBAs: 'Tesla, Inc.',
      EquipmentItems: [],
      LastUpdated: '/Date(1665153455790-0400)/',
      ManufacturerTypes: [
        {
          Name: 'Completed Vehicle Manufacturer',
        },
      ],
      Mfr_CommonName: 'Tesla',
      Mfr_ID: 955,
      Mfr_Name: 'TESLA, INC.',
      OtherManufacturerDetails: null,
      PostalCode: '78725',
      PrimaryProduct: null,
      PrincipalFirstName: 'Elon Musk',
      PrincipalLastName: null,
      PrincipalPosition: 'CEO',
      StateProvince: 'TEXAS',
      SubmittedName: 'David Kim',
      SubmittedOn: '/Date(1665152176543-0400)/',
      SubmittedPosition: 'Corporate Counsel, Regulatory',
      VehicleTypes: [
        {
          GVWRFrom: 'Class 1A: 3,000 lb or less (1,360 kg or less)',
          GVWRTo: 'Class 1D: 5,001 - 6,000 lb (2,268 - 2,722 kg)',
          IsPrimary: true,
          Name: 'Passenger Car',
        },
        {
          GVWRFrom: 'Class 8: 33,001 lb and above (14,969 kg and above)',
          GVWRTo: 'Class 8: 33,001 lb and above (14,969 kg and above)',
          IsPrimary: false,
          Name: 'Truck ',
        },
        {
          GVWRFrom: 'Class 2E: 6,001 - 7,000 lb (2,722 - 3,175 kg)',
          GVWRTo: 'Class 2E: 6,001 - 7,000 lb (2,722 - 3,175 kg)',
          IsPrimary: false,
          Name: 'Multipurpose Passenger Vehicle (MPV)',
        },
      ],
    },
  ],
  SearchCriteria: null,
}
// #endregion example-response

export type { GetManufacturerDetailsResults }
export { exampleResponse }
