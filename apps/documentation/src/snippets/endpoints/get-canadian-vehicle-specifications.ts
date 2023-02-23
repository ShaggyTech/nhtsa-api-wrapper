// #region type-results
type GetCanadianVehicleSpecificationsResults = {
  Specs: Array<{
    Name:
      | 'Make'
      | 'Model'
      | 'MYR'
      | 'OL'
      | 'OW'
      | 'OH'
      | 'WB'
      | 'CW'
      | 'A'
      | 'B'
      | 'C'
      | 'D'
      | 'E'
      | 'F'
      | 'G'
      | 'TWF'
      | 'TWR'
      | 'WD'
    Value: string
  }>
}
// #endregion type-results

// #region example-response
// Using GetCanadianVehicleSpecifications({ year: 2011, make: Acura })
const exampleResponse = {
  Count: 9,
  Message: 'Results returned successfully',
  Results: [
    {
      Specs: [
        {
          Name: 'Make',
          Value: 'ACURA',
        },
        {
          Name: 'Model',
          Value: 'CSX 4DR SEDAN FWD /TECH PACKAGE',
        },
        {
          Name: 'MYR',
          Value: '6',
        },
        {
          Name: 'OL',
          Value: '454',
        },
        {
          Name: 'OW',
          Value: '175',
        },
        {
          Name: 'OH',
          Value: '144',
        },
        {
          Name: 'WB',
          Value: '270',
        },
        {
          Name: 'CW',
          Value: '1300',
        },
        {
          Name: 'A',
          Value: '94',
        },
        {
          Name: 'B',
          Value: '45',
        },
        {
          Name: 'C',
          Value: '36',
        },
        {
          Name: 'D',
          Value: '76',
        },
        {
          Name: 'E',
          Value: '110',
        },
        {
          Name: 'F',
          Value: '92',
        },
        {
          Name: 'G',
          Value: '93',
        },
        {
          Name: 'TWF',
          Value: '150',
        },
        {
          Name: 'TWR',
          Value: '151',
        },
        {
          Name: 'WD',
          Value: '61/39',
        },
      ],
    },
    {
      Specs: [
        {
          Name: 'Make',
          Value: 'ACURA',
        },
        {
          Name: 'Model',
          Value: 'MDX 4DR SUV AWD /TECH/ELITE',
        },
        {
          Name: 'MYR',
          Value: '10',
        },
        {
          Name: 'OL',
          Value: '485',
        },
        {
          Name: 'OW',
          Value: '199',
        },
        {
          Name: 'OH',
          Value: '173',
        },
        {
          Name: 'WB',
          Value: '275',
        },
        {
          Name: 'CW',
          Value: '2064',
        },
        {
          Name: 'A',
          Value: '117',
        },
        {
          Name: 'B',
          Value: '183',
        },
        {
          Name: 'C',
          Value: '42',
        },
        {
          Name: 'D',
          Value: '85',
        },
        {
          Name: 'E',
          Value: '126',
        },
        {
          Name: 'F',
          Value: '100',
        },
        {
          Name: 'G',
          Value: '110',
        },
        {
          Name: 'TWF',
          Value: '172',
        },
        {
          Name: 'TWR',
          Value: '172',
        },
        {
          Name: 'WD',
          Value: '56/44',
        },
      ],
    },
    {
      Specs: [
        {
          Name: 'Make',
          Value: 'ACURA',
        },
        {
          Name: 'Model',
          Value: 'RDX 4DR SUV AWD /TECH PACKAGE',
        },
        {
          Name: 'MYR',
          Value: '10',
        },
        {
          Name: 'OL',
          Value: '462',
        },
        {
          Name: 'OW',
          Value: '187',
        },
        {
          Name: 'OH',
          Value: '166',
        },
        {
          Name: 'WB',
          Value: '265',
        },
        {
          Name: 'CW',
          Value: '1790',
        },
        {
          Name: 'A',
          Value: '125',
        },
        {
          Name: 'B',
          Value: '152',
        },
        {
          Name: 'C',
          Value: '38',
        },
        {
          Name: 'D',
          Value: '84',
        },
        {
          Name: 'E',
          Value: '124',
        },
        {
          Name: 'F',
          Value: '98',
        },
        {
          Name: 'G',
          Value: '99',
        },
        {
          Name: 'TWF',
          Value: '158',
        },
        {
          Name: 'TWR',
          Value: '159',
        },
        {
          Name: 'WD',
          Value: '57/43',
        },
      ],
    },
    {
      Specs: [
        {
          Name: 'Make',
          Value: 'ACURA',
        },
        {
          Name: 'Model',
          Value: 'RL 4DR SEDAN AWD /ELITE',
        },
        {
          Name: 'MYR',
          Value: '9',
        },
        {
          Name: 'OL',
          Value: '497',
        },
        {
          Name: 'OW',
          Value: '185',
        },
        {
          Name: 'OH',
          Value: '146',
        },
        {
          Name: 'WB',
          Value: '280',
        },
        {
          Name: 'CW',
          Value: '1864',
        },
        {
          Name: 'A',
          Value: '125',
        },
        {
          Name: 'B',
          Value: '73',
        },
        {
          Name: 'C',
          Value: '37',
        },
        {
          Name: 'D',
          Value: '80',
        },
        {
          Name: 'E',
          Value: '116',
        },
        {
          Name: 'F',
          Value: '104',
        },
        {
          Name: 'G',
          Value: '111',
        },
        {
          Name: 'TWF',
          Value: '157',
        },
        {
          Name: 'TWR',
          Value: '157',
        },
        {
          Name: 'WD',
          Value: '58/42',
        },
      ],
    },
    {
      Specs: [
        {
          Name: 'Make',
          Value: 'ACURA',
        },
        {
          Name: 'Model',
          Value: 'TL 4 DR SEDAN FWD/TECHNOLOGY',
        },
        {
          Name: 'MYR',
          Value: '9',
        },
        {
          Name: 'OL',
          Value: '497',
        },
        {
          Name: 'OW',
          Value: '188',
        },
        {
          Name: 'OH',
          Value: '145',
        },
        {
          Name: 'WB',
          Value: '278',
        },
        {
          Name: 'CW',
          Value: '1682',
        },
        {
          Name: 'A',
          Value: '134',
        },
        {
          Name: 'B',
          Value: '62',
        },
        {
          Name: 'C',
          Value: '34',
        },
        {
          Name: 'D',
          Value: '81',
        },
        {
          Name: 'E',
          Value: '117',
        },
        {
          Name: 'F',
          Value: '105',
        },
        {
          Name: 'G',
          Value: '115',
        },
        {
          Name: 'TWF',
          Value: '160',
        },
        {
          Name: 'TWR',
          Value: '161',
        },
        {
          Name: 'WD',
          Value: '61/39',
        },
      ],
    },
    {
      Specs: [
        {
          Name: 'Make',
          Value: 'ACURA',
        },
        {
          Name: 'Model',
          Value: 'TL 4 DR SEDAN SH-AWD/SH-AWD TECHNOLOGY',
        },
        {
          Name: 'MYR',
          Value: '9',
        },
        {
          Name: 'OL',
          Value: '497',
        },
        {
          Name: 'OW',
          Value: '188',
        },
        {
          Name: 'OH',
          Value: '145',
        },
        {
          Name: 'WB',
          Value: '278',
        },
        {
          Name: 'CW',
          Value: '1801',
        },
        {
          Name: 'A',
          Value: '134',
        },
        {
          Name: 'B',
          Value: '62',
        },
        {
          Name: 'C',
          Value: '34',
        },
        {
          Name: 'D',
          Value: '81',
        },
        {
          Name: 'E',
          Value: '117',
        },
        {
          Name: 'F',
          Value: '105',
        },
        {
          Name: 'G',
          Value: '115',
        },
        {
          Name: 'TWF',
          Value: '160',
        },
        {
          Name: 'TWR',
          Value: '161',
        },
        {
          Name: 'WD',
          Value: '59/41',
        },
      ],
    },
    {
      Specs: [
        {
          Name: 'Make',
          Value: 'ACURA',
        },
        {
          Name: 'Model',
          Value: 'TSX 4DR SEDAN FWD TECH PACKAGE/PREMIUM',
        },
        {
          Name: 'MYR',
          Value: '9',
        },
        {
          Name: 'OL',
          Value: '473',
        },
        {
          Name: 'OW',
          Value: '184',
        },
        {
          Name: 'OH',
          Value: '144',
        },
        {
          Name: 'WB',
          Value: '271',
        },
        {
          Name: 'CW',
          Value: '1545',
        },
        {
          Name: 'A',
          Value: '121',
        },
        {
          Name: 'B',
          Value: '44',
        },
        {
          Name: 'C',
          Value: '35',
        },
        {
          Name: 'D',
          Value: '79',
        },
        {
          Name: 'E',
          Value: '115',
        },
        {
          Name: 'F',
          Value: '97',
        },
        {
          Name: 'G',
          Value: '104',
        },
        {
          Name: 'TWF',
          Value: '158',
        },
        {
          Name: 'TWR',
          Value: '158',
        },
        {
          Name: 'WD',
          Value: '60/40',
        },
      ],
    },
    {
      Specs: [
        {
          Name: 'Make',
          Value: 'ACURA',
        },
        {
          Name: 'Model',
          Value: 'TSX 4DR SEDAN FWD V6',
        },
        {
          Name: 'MYR',
          Value: '9',
        },
        {
          Name: 'OL',
          Value: '473',
        },
        {
          Name: 'OW',
          Value: '184',
        },
        {
          Name: 'OH',
          Value: '144',
        },
        {
          Name: 'WB',
          Value: '271',
        },
        {
          Name: 'CW',
          Value: '1672',
        },
        {
          Name: 'A',
          Value: '121',
        },
        {
          Name: 'B',
          Value: '44',
        },
        {
          Name: 'C',
          Value: '35',
        },
        {
          Name: 'D',
          Value: '79',
        },
        {
          Name: 'E',
          Value: '115',
        },
        {
          Name: 'F',
          Value: '97',
        },
        {
          Name: 'G',
          Value: '104',
        },
        {
          Name: 'TWF',
          Value: '158',
        },
        {
          Name: 'TWR',
          Value: '158',
        },
        {
          Name: 'WD',
          Value: '60/40',
        },
      ],
    },
    {
      Specs: [
        {
          Name: 'Make',
          Value: 'ACURA',
        },
        {
          Name: 'Model',
          Value: 'ZDX 4DR SUV AWD / TECH ELITE',
        },
        {
          Name: 'MYR',
          Value: '10',
        },
        {
          Name: 'OL',
          Value: '488',
        },
        {
          Name: 'OW',
          Value: '199',
        },
        {
          Name: 'OH',
          Value: '160',
        },
        {
          Name: 'WB',
          Value: '275',
        },
        {
          Name: 'CW',
          Value: '2064',
        },
        {
          Name: 'A',
          Value: '133',
        },
        {
          Name: 'B',
          Value: '109',
        },
        {
          Name: 'C',
          Value: '33',
        },
        {
          Name: 'D',
          Value: '88',
        },
        {
          Name: 'E',
          Value: '120',
        },
        {
          Name: 'F',
          Value: '109',
        },
        {
          Name: 'G',
          Value: '104',
        },
        {
          Name: 'TWF',
          Value: '172',
        },
        {
          Name: 'TWR',
          Value: '171',
        },
        {
          Name: 'WD',
          Value: '58/42',
        },
      ],
    },
  ],
  SearchCriteria: 'Year: 2011; Make: Acura; Units: Metric',
}
// #endregion example-response

export type { GetCanadianVehicleSpecificationsResults }
export { exampleResponse }
