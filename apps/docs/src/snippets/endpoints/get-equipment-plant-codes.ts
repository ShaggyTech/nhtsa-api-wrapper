// #region type-params
type GetEquipmentPlantCodesParams = {
  year: string | number
  equipmentType: '1' | '3' | '13' | '16' | 1 | 3 | 13 | 16
  reportType:
    | 'New'
    | 'Updated'
    | 'Closed'
    | 'All'
    | 'new'
    | 'updated'
    | 'closed'
    | 'all'
}
// #endregion type-params

// #region type-results
type GetEquipmentPlantCodesResults = {
  Address: string | null
  City: string | null
  Country: string
  DOTCode: string
  Name: string
  OldDotCode: string
  PostalCode: string | null
  StateProvince: string | null
  Status: string | null
}
// #endregion type-results

// #region example-response
// Using GetEquipmentPlantCodes({ equipmentType: 1, reportType: new, year: 2015})
// Truncated response with 943 results
const exampleResponse = {
  Count: 943,
  Message: 'Results returned successfully',
  Results: [
    {
      Address: '2950 International Blvd.',
      City: 'Clarksville',
      Country: 'UNITED STATES (USA)',
      DOTCode: '00T',
      Name: 'Hankook Tire Manufacturing Tennessee, LP',
      OldDotCode: '',
      PostalCode: '37040',
      StateProvince: 'TN',
      Status: '',
    },
    {
      Address:
        'No. 52 Street 536, Bau Tran Hamlet, Nhuan Duc Commune, Cu Chi District ',
      City: 'Ho Chi Minh',
      Country: 'Vietnam',
      DOTCode: '030',
      Name: 'SHIH FA RUBBER INDUSTRIES (VN) CO., LTD.',
      OldDotCode: '',
      PostalCode: null,
      StateProvince: null,
      Status: '',
    },
    {
      Address: 'NO. 23, HAILAR EAST ROAD',
      City: 'HUHHOT',
      Country: 'CHINA',
      DOTCode: '18V',
      Name: 'CHINA HUHHOT RUBBER PLANT',
      OldDotCode: '8V',
      PostalCode: null,
      StateProvince: 'INNER MONGOLIA',
      Status: '',
    },
    {
      Address: 'NO. 9 EAST BEISAN ROAD',
      City: 'SHENYANG',
      Country: 'CHINA',
      DOTCode: '17H',
      Name: 'SHENYANG SUNSHINE TYRE CO., LTD.',
      OldDotCode: '7H',
      PostalCode: '110025',
      StateProvince: 'LIAONING PROVINCE',
      Status: '',
    },
    {
      Address: 'HONGSHANZUI ECONOMIC DEV. ZONE',
      City: 'PINGQUAN',
      Country: 'CHINA',
      DOTCode: '181',
      Name: 'CHENGDE XIANGYAN TYRE CORP. LTD.',
      OldDotCode: '81',
      PostalCode: '067500',
      StateProvince: 'HEBEI',
      Status: '',
    },
    {
      Address: 'QIANLIU VILLAGE XIADIAN TOWN',
      City: 'CHANGYI CITY',
      Country: 'CHINA',
      DOTCode: '1TN',
      Name: 'WEIFANG LUYI RUBBER PRODUCTS CO., LTD.',
      OldDotCode: 'TN',
      PostalCode: '261311',
      StateProvince: 'SHANDONG',
      Status: '',
    },
    {
      Address: 'DOWANG TOWN',
      City: 'GUANGRAO COUNTY',
      Country: 'CHINA',
      DOTCode: '183',
      Name: 'SHANDONG HENGFENG RUBBER & PLASTIC CO., LTD.',
      OldDotCode: '83',
      PostalCode: '257335',
      StateProvince: 'SHANDONG',
      Status: '',
    },
    {
      Address: 'NO.1 HUIXIN ROAD',
      City: 'GAOTANG',
      Country: 'CHINA',
      DOTCode: '184',
      Name: 'SHIFENG JUXING TIRE CO., LTD.',
      OldDotCode: '84',
      PostalCode: '252800',
      StateProvince: 'SHANDONG PROVINCE',
      Status: '',
    },
    {
      Address: 'NO.668 LAMEI ROAD,JIESHI TOWN,BANAN DISTRICT',
      City: 'CHONGQING',
      Country: 'CHINA',
      DOTCode: '185',
      Name: 'CHONGQING WEIXING RUBBER INDUSTRY CO., LTD.',
      OldDotCode: '85',
      PostalCode: '401346',
      StateProvince: 'CHONGQING',
      Status: '',
    },
    {
      Address: 'DAWANG',
      City: 'GUANGRAO',
      Country: 'CHINA',
      DOTCode: '187',
      Name: 'SHANDONG HONGSHENG RUBBER CO., LTD.',
      OldDotCode: '87',
      PostalCode: '257335',
      StateProvince: 'SHANDONG',
      Status: '',
    },
    {
      Address: 'BARRIO URB(BIBAO SAN SEBASTIA), S/N.C.P.',
      City: 'BILBAO',
      Country: 'SPAIN',
      DOTCode: '15C',
      Name: 'BRIDGESTONE HISPANIA S.A./BILBAO',
      OldDotCode: '5C',
      PostalCode: '48970',
      StateProvince: 'BASAURI/VIZCAYA',
      Status: '',
    },
    {
      Address: 'BARRIO URB(BIBAO SAN SEBASTIA), S/N.C.P.',
      City: 'BILBAO',
      Country: 'SPAIN',
      DOTCode: '1VT',
      Name: 'BRIDGESTONE HISPANIA S.A./BILBAO',
      OldDotCode: 'VT',
      PostalCode: '48970',
      StateProvince: 'BASAURI/VIZCAYA',
      Status: '',
    },
    // ... truncated for brevity
  ],
  SearchCriteria: 'Year:2015 | Equipment Type:1 | Report Type: new',
}
// #endregion example-response

export type { GetEquipmentPlantCodesParams, GetEquipmentPlantCodesResults }

export { exampleResponse }
