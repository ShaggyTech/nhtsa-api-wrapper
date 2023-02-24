// #region type-results
type GetModelsForMakeResults = {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}
// #endregion type-results

// #region example-response
// Using GetMakesForVehicleType('truck') - truncated for brevity
const exampleResponse = {
  Count: 49,
  Message: 'Response returned successfully',
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
      Model_ID: 3149,
      Model_Name: 'RS6',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 3150,
      Model_Name: 'allroad',
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
      Model_ID: 3675,
      Model_Name: 'RS4',
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
      Model_ID: 8056,
      Model_Name: '90',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 8057,
      Model_Name: '100',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 8058,
      Model_Name: 'V8',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 8059,
      Model_Name: 'Cabriolet',
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
      Model_ID: 14336,
      Model_Name: '5000',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 14337,
      Model_Name: '4000',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 14342,
      Model_Name: '80',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 14343,
      Model_Name: '200',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 14348,
      Model_Name: 'Coupe',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 16783,
      Model_Name: 'RS3',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 25317,
      Model_Name: 'Q8',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 25874,
      Model_Name: 'e-tron',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 27028,
      Model_Name: 'A6 allroad',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 27029,
      Model_Name: 'Q5 e',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 27122,
      Model_Name: 'A8 e',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 27401,
      Model_Name: 'SQ7',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 27402,
      Model_Name: 'SQ8',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 27403,
      Model_Name: 'RS Q8',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 27819,
      Model_Name: 'e-tron Sportback',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 28998,
      Model_Name: 'RS e-tron GT',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 29351,
      Model_Name: 'Q4',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 29708,
      Model_Name: 'A8 L',
    },
    {
      Make_ID: 582,
      Make_Name: 'AUDI',
      Model_ID: 29994,
      Model_Name: 'e-tron GT',
    },
  ],
  SearchCriteria: 'Make:audi',
}
// #endregion example-response

export type { GetModelsForMakeResults }
export { exampleResponse }
