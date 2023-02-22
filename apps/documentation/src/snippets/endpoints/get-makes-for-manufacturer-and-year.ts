// #region type-results
type GetMakesForManufacturerAndYearResults = {
  MakeId: number
  MakeName: string
  MfrId: number
  MfrName: string
}
// #endregion type-results

// #region example-response
// Using GetMakeForManufacturer('honda')
const exampleResponse = {
  Count: 3,
  Message: 'Response returned successfully',
  Results: [
    {
      MakeId: 482,
      MakeName: 'VOLKSWAGEN',
      MfrId: 1148,
      MfrName: 'VOLKSWAGEN AG',
    },
    {
      MakeId: 482,
      MakeName: 'VOLKSWAGEN',
      MfrId: 16478,
      MfrName: 'VOLKSWAGEN DE MEXICO SA DE CV',
    },
    {
      MakeId: 482,
      MakeName: 'VOLKSWAGEN',
      MfrId: 1147,
      MfrName: 'VOLKSWAGEN GROUP OF AMERICA, INC.',
    },
  ],
  SearchCriteria: 'Manufacturer : volks, Year: 2020',
}
// #endregion example-response

export type { GetMakesForManufacturerAndYearResults }
export { exampleResponse }
