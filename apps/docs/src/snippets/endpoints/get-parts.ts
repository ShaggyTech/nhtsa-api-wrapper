// #region type-results
type GetPartsResults = {
  CoverLetterURL: string
  LetterDate: string
  ManufacturerId: number
  ManufacturerName: string
  ModelYearFrom: number | null
  ModelYearTo: number | null
  Name: string
  Type: string
  URL: string
}
// #endregion type-results

// #region example-response
// Using GetParts({ type: 575, fromDate: '1/1/2015, toDate: `5/5/2015', manufacturer: hon })
const exampleResponse = {
  Count: 6,
  Message: 'Results returned successfully',
  Results: [
    {
      CoverLetterURL: '',
      LetterDate: '4/30/2015',
      ManufacturerId: 987,
      ManufacturerName: 'HONDA MOTOR CO., LTD',
      ModelYearFrom: null,
      ModelYearTo: null,
      Name: 'ORG10655',
      Type: '565',
      URL: 'http://vpic.nhtsa.dot.gov/mid/home/displayfile/cf88fcd6-97e5-4b9a-bc6c-53f87eaf4ab3',
    },
    {
      CoverLetterURL: '',
      LetterDate: '3/11/2015',
      ManufacturerId: 988,
      ManufacturerName: 'AMERICAN HONDA MOTOR CO., INC.',
      ModelYearFrom: null,
      ModelYearTo: null,
      Name: 'ORG10720',
      Type: '565',
      URL: 'http://vpic.nhtsa.dot.gov/mid/home/displayfile/0d1c7d12-b3d9-4a53-9d2c-56ab2b5ac235',
    },
    {
      CoverLetterURL: '',
      LetterDate: '3/11/2015',
      ManufacturerId: 988,
      ManufacturerName: 'AMERICAN HONDA MOTOR CO., INC.',
      ModelYearFrom: null,
      ModelYearTo: null,
      Name: 'ORG10721',
      Type: '565',
      URL: 'http://vpic.nhtsa.dot.gov/mid/home/displayfile/3fee1b5a-c834-4074-8f03-6e1b73516ee0',
    },
    {
      CoverLetterURL: '',
      LetterDate: '3/4/2015',
      ManufacturerId: 14236,
      ManufacturerName: 'CHONGQING SHINERAY MOTORCYCLE CO., LTD.',
      ModelYearFrom: null,
      ModelYearTo: null,
      Name: 'ORG11082',
      Type: '565',
      URL: 'http://vpic.nhtsa.dot.gov/mid/home/displayfile/f9a0be8f-e887-4491-acb1-f7bcdea9a26f',
    },
    {
      CoverLetterURL: '',
      LetterDate: '2/26/2015',
      ManufacturerId: 988,
      ManufacturerName: 'AMERICAN HONDA MOTOR CO., INC.',
      ModelYearFrom: null,
      ModelYearTo: null,
      Name: 'ORG10727',
      Type: '565',
      URL: 'http://vpic.nhtsa.dot.gov/mid/home/displayfile/71f28292-1daf-4c6e-8cf1-6a9785489ad9',
    },
    {
      CoverLetterURL: '',
      LetterDate: '1/28/2015',
      ManufacturerId: 987,
      ManufacturerName: 'HONDA MOTOR CO., LTD',
      ModelYearFrom: null,
      ModelYearTo: null,
      Name: 'ORG10651',
      Type: '565',
      URL: 'http://vpic.nhtsa.dot.gov/mid/home/displayfile/e591547b-0c65-4d7c-9803-00202c70868f',
    },
  ],
  SearchCriteria:
    'Type: 565 | From Date: 1/1/2015 | To Date: 5/5/2015 | manufacturer: hon',
}
// #endregion example-response

export type { GetPartsResults }
export { exampleResponse }
