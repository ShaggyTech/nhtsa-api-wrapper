// #region type-results
type GetVehicleVariableValuesListResults = {
  ElementName: string
  Id: number
  Name: string
}
// #endregion type-results

// #region example-response
// Using GetVehicleVariableValuesList('battery type')
const exampleResponse = {
  Count: 9,
  Message: 'Results returned successfully',
  Results: [
    {
      ElementName: 'Battery Type',
      Id: 1,
      Name: 'Lead Acid/Lead',
    },
    {
      ElementName: 'Battery Type',
      Id: 2,
      Name: 'Nickel-Metal-Hydride/NiMH',
    },
    {
      ElementName: 'Battery Type',
      Id: 3,
      Name: 'Lithium-Ion/Li-Ion',
    },
    {
      ElementName: 'Battery Type',
      Id: 4,
      Name: 'Cobalt Dioxide/Cobalt',
    },
    {
      ElementName: 'Battery Type',
      Id: 5,
      Name: 'Nickle-Cobalt-Manganese/NCM',
    },
    {
      ElementName: 'Battery Type',
      Id: 6,
      Name: 'Nickle-Cobalt-Aluminum/NCA',
    },
    {
      ElementName: 'Battery Type',
      Id: 7,
      Name: 'Manganese Oxide Spinel/MnO',
    },
    {
      ElementName: 'Battery Type',
      Id: 8,
      Name: 'Iron Phosphate/FePo',
    },
    {
      ElementName: 'Battery Type',
      Id: 9,
      Name: 'Silicon',
    },
  ],
  SearchCriteria: 'Variable:battery type',
}
// #endregion example-response

export type { GetVehicleVariableValuesListResults }
export { exampleResponse }
