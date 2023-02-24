// #region type-results
type GetMakeForManufacturerResults = {
  Make_ID: number
  Make_Name: string
  Mfr_Name: string
}
// #endregion type-results

// #region example-response
// Using GetMakeForManufacturer('honda')
const exampleResponse = {
  Count: 15,
  Message: 'Results returned successfully',
  Results: [
    {
      Make_ID: 474,
      Make_Name: 'HONDA',
      Mfr_Name: 'HONDA MOTOR CO., LTD',
    },
    {
      Make_ID: 474,
      Make_Name: 'HONDA',
      Mfr_Name: 'AMERICAN HONDA MOTOR CO., INC.',
    },
    {
      Make_ID: 474,
      Make_Name: 'HONDA',
      Mfr_Name: 'HONDA OF CANADA MFG., INC.',
    },
    {
      Make_ID: 474,
      Make_Name: 'HONDA',
      Mfr_Name: 'HONDA OF THE U.K. MFG., LTD.',
    },
    {
      Make_ID: 474,
      Make_Name: 'HONDA',
      Mfr_Name: 'HONDA DE MEXICO',
    },
    {
      Make_ID: 474,
      Make_Name: 'HONDA',
      Mfr_Name: 'THAI HONDA CO., LTD.',
    },
    {
      Make_ID: 474,
      Make_Name: 'HONDA',
      Mfr_Name: 'HONDA VIETNAM CO., LTD.',
    },
    {
      Make_ID: 474,
      Make_Name: 'HONDA',
      Mfr_Name: 'MOTO HONDA DA AMAZONIA LTDA.',
    },
    {
      Make_ID: 474,
      Make_Name: 'HONDA',
      Mfr_Name: 'SUNDIRO HONDA MOTORCYCLE CO., LTD.',
    },
    {
      Make_ID: 474,
      Make_Name: 'HONDA',
      Mfr_Name: 'MONTESA HONDA SA',
    },
    {
      Make_ID: 475,
      Make_Name: 'ACURA',
      Mfr_Name: 'HONDA MOTOR CO., LTD',
    },
    {
      Make_ID: 475,
      Make_Name: 'ACURA',
      Mfr_Name: 'AMERICAN HONDA MOTOR CO., INC.',
    },
    {
      Make_ID: 475,
      Make_Name: 'ACURA',
      Mfr_Name: 'HONDA OF CANADA MFG., INC.',
    },
    {
      Make_ID: 542,
      Make_Name: 'ISUZU',
      Mfr_Name: 'HONDA MOTOR CO., LTD',
    },
    {
      Make_ID: 7351,
      Make_Name: 'SUNDIRO  HONDA MOTORCYCLE CO. LTD',
      Mfr_Name: 'SUNDIRO HONDA MOTORCYCLE CO., LTD.',
    },
  ],
  SearchCriteria: 'Manufacturer:honda',
}
// #endregion example-response

export type { GetMakeForManufacturerResults }
export { exampleResponse }
