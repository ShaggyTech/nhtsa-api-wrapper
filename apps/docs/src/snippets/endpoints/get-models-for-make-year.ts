// #region type-results
type GetModelsForMakeYearResults = {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}
// #endregion type-results

// #region example-response
// Using GetModelsForMakeYear({ make: 'Audi', modelYear: 2018 })
const exampleResponse = {
  Count: 24,
  Message: 'Results returned successfully',
  Results: [
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 3145,
      Model_Name: 'TT',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 3146,
      Model_Name: 'A4',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 3147,
      Model_Name: 'S4',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 3148,
      Model_Name: 'A6',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 3151,
      Model_Name: 'A8',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 3676,
      Model_Name: 'A3',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 3677,
      Model_Name: 'S6',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 3678,
      Model_Name: 'S8',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 3679,
      Model_Name: 'Q7',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 3787,
      Model_Name: 'A5',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 3788,
      Model_Name: 'S5',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 3789,
      Model_Name: 'R8',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 3861,
      Model_Name: 'TTS',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 3862,
      Model_Name: 'Q5',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 4014,
      Model_Name: 'RS5',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 4015,
      Model_Name: 'A7',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 4016,
      Model_Name: 'TT RS',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 4051,
      Model_Name: 'Q3',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 4052,
      Model_Name: 'SQ5',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 8173,
      Model_Name: 'S3',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 8258,
      Model_Name: 'S7',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 8685,
      Model_Name: 'RS7',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 13759,
      Model_Name: 'A4 allroad',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 16783,
      Model_Name: 'RS3',
    },
  ],
  SearchCriteria: 'Make:audi | ModelYear:2018',
}
// #endregion example-response

export type { GetModelsForMakeYearResults }
export { exampleResponse }
