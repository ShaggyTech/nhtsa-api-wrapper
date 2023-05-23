import { type DefaultTheme } from 'vitepress'

type SidebarItem = DefaultTheme.SidebarItem

const vpicEndpointLinks = [
  { text: 'DecodeVin', link: '/api/endpoints/decode-vin' },
  { text: 'DecodeVinExtended', link: '/api/endpoints/decode-vin-extended' },
  { text: 'DecodeVinValues', link: '/api/endpoints/decode-vin-values' },
  {
    text: 'DecodeVinValuesBatch',
    link: '/api/endpoints/decode-vin-values-batch',
  },
  {
    text: 'DecodeVinValuesExtended',
    link: '/api/endpoints/decode-vin-values-extended',
  },
  { text: 'DecodeWMI', link: '/api/endpoints/decode-wmi' },
  { text: 'GetAllMakes', link: '/api/endpoints/get-all-makes' },
  { text: 'GetAllManufacturers', link: '/api/endpoints/get-all-manufacturers' },
  {
    text: 'GetCanadianVehicleSpecifications',
    link: '/api/endpoints/get-canadian-vehicle-specifications',
  },
  {
    text: 'GetEquipmentPlantCodes',
    link: '/api/endpoints/get-equipment-plant-codes',
  },
  {
    text: 'GetMakeForManufacturer',
    link: '/api/endpoints/get-make-for-manufacturer',
  },
  {
    text: 'GetMakesForManufacturerAndYear',
    link: '/api/endpoints/get-makes-for-manufacturer-and-year',
  },
  {
    text: 'GetMakesForVehicleType',
    link: '/api/endpoints/get-makes-for-vehicle-type',
  },
  {
    text: 'GetManufacturerDetails',
    link: '/api/endpoints/get-manufacturer-details',
  },
  { text: 'GetModelsForMake', link: '/api/endpoints/get-models-for-make' },
  { text: 'GetModelsForMakeId', link: '/api/endpoints/get-models-for-make-id' },
  {
    text: 'GetModelsForMakeIdYear',
    link: '/api/endpoints/get-models-for-make-id-year',
  },
  {
    text: 'GetModelsForMakeYear',
    link: '/api/endpoints/get-models-for-make-year',
  },
  { text: 'GetParts', link: '/api/endpoints/get-parts' },
  {
    text: 'GetVehicleTypesForMake',
    link: '/api/endpoints/get-vehicle-types-for-make',
  },
  {
    text: 'GetVehicleTypesForMakeId',
    link: '/api/endpoints/get-vehicle-types-for-make-id',
  },
  {
    text: 'GetVehicleVariableList',
    link: '/api/endpoints/get-vehicle-variable-list',
  },
  {
    text: 'GetVehicleVariableValuesList',
    link: '/api/endpoints/get-vehicle-variable-values-list',
  },
  {
    text: 'GetWMIsForManufacturer',
    link: '/api/endpoints/get-wmis-for-manufacturer',
  },
]

const typedocLinks = [
  {
    text: 'Types',
    link: '/typedoc/modules/types',
  },
  {
    text: 'api/',
    link: '/typedoc/modules/api',
  },
  {
    text: 'api/types',
    link: '/typedoc/modules/api_types',
  },
  {
    text: 'api/useNHTSA',
    link: '/typedoc/modules/api_useNHTSA',
  },
  {
    text: 'api/endpoints/',
    link: '/typedoc/modules/api_endpoints',
  },
  {
    text: 'api/endpoints/DecodeVin',
    link: '/typedoc/modules/api_endpoints_DecodeVin',
  },
  {
    text: 'api/endpoints/DecodeVinExtended',
    link: '/typedoc/modules/api_endpoints_DecodeVinExtended',
  },
  {
    text: 'api/endpoints/DecodeVinValues',
    link: '/typedoc/modules/api_endpoints_DecodeVinValues',
  },
  {
    text: 'api/endpoints/DecodeVinValuesBatch',
    link: '/typedoc/modules/api_endpoints_DecodeVinValuesBatch',
  },
  {
    text: 'api/endpoints/DecodeVinValuesExtended',
    link: '/typedoc/modules/api_endpoints_DecodeVinValuesExtended',
  },
  {
    text: 'api/endpoints/DecodeWMI',
    link: '/typedoc/modules/api_endpoints_DecodeWMI',
  },
  {
    text: 'api/endpoints/GetAllMakes',
    link: '/typedoc/modules/api_endpoints_GetAllMakes',
  },
  {
    text: 'api/endpoints/GetAllManufacturers',
    link: '/typedoc/modules/api_endpoints_GetAllManufacturers',
  },
  {
    text: 'api/endpoints/GetCanadianVehicleSpecifications',
    link: '/typedoc/modules/api_endpoints_GetCanadianVehicleSpecifications',
  },
  {
    text: 'api/endpoints/GetEquipmentPlantCodes',
    link: '/typedoc/modules/api_endpoints_GetEquipmentPlantCodes',
  },
  {
    text: 'api/endpoints/GetMakeForManufacturer',
    link: '/typedoc/modules/api_endpoints_GetMakeForManufacturer',
  },
  {
    text: 'api/endpoints/GetMakesForManufacturerAndYear',
    link: '/typedoc/modules/api_endpoints_GetMakesForManufacturerAndYear',
  },
  {
    text: 'api/endpoints/GetMakesForVehicleType',
    link: '/typedoc/modules/api_endpoints_GetMakesForVehicleType',
  },
  {
    text: 'api/endpoints/GetManufacturerDetails',
    link: '/typedoc/modules/api_endpoints_GetManufacturerDetails',
  },
  {
    text: 'api/endpoints/GetModelsForMake',
    link: '/typedoc/modules/api_endpoints_GetModelsForMake',
  },
  {
    text: 'api/endpoints/GetModelsForMakeId',
    link: '/typedoc/modules/api_endpoints_GetModelsForMakeId',
  },
  {
    text: 'api/endpoints/GetModelsForMakeIdYear',
    link: '/typedoc/modules/api_endpoints_GetModelsForMakeIdYear',
  },
  {
    text: 'api/endpoints/GetModelsForMakeYear',
    link: '/typedoc/modules/api_endpoints_GetModelsForMakeYear',
  },
  {
    text: 'api/endpoints/GetParts',
    link: '/typedoc/modules/api_endpoints_GetParts',
  },
  {
    text: 'api/endpoints/GetVehicleTypesForMake',
    link: '/typedoc/modules/api_endpoints_GetVehicleTypesForMake',
  },
  {
    text: 'api/endpoints/GetVehicleTypesForMakeId',
    link: '/typedoc/modules/api_endpoints_GetVehicleTypesForMakeId',
  },
  {
    text: 'api/endpoints/GetVehicleVariableList',
    link: '/typedoc/modules/api_endpoints_GetVehicleVariableList',
  },
  {
    text: 'api/endpoints/GetVehicleVariableValuesList',
    link: '/typedoc/modules/api_endpoints_GetVehicleVariableValuesList',
  },
  {
    text: 'api/endpoints/GetWMIsForManufacturer',
    link: '/typedoc/modules/api_endpoints_GetWMIsForManufacturer',
  },
  {
    text: 'utils/',
    link: '/typedoc/modules/utils',
  },
  {
    text: 'utils/isValidVin',
    link: '/typedoc/modules/utils_isValidVin',
  },
]

export type LinkGroup = 'guide' | 'api' | 'typedocs'

const groupLinks: Record<LinkGroup, SidebarItem[]> = {
  guide: [
    { text: 'Overview', link: '/guide/' },
    { text: 'Why This Package', link: '/guide/why-this-package' },
    { text: 'Typescript Support', link: '/guide/typescript' },
    {
      text: 'Install and Use',
      collapsed: false,
      items: [
        { text: 'Install', link: '/guide/install' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Decoding a VIN', link: '/guide/vin-decoding' },
        {
          text: 'Offline VIN Validation',
          link: '/guide/offline-vin-validation',
        },
      ],
    },
    {
      text: 'Utility Functions',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/utils/' },
        { text: 'isValidVin', link: '/utils/is-valid-vin' },
        { text: 'useNHTSA', link: '/utils/use-nhtsa' },
      ],
    },
    {
      text: 'Native Fetch',
      collapsed: false,
      items: [
        {
          text: 'Support for Node Versions < 18',
          link: '/guide/native-fetch',
        },
        {
          text: 'Bring Your Own Fetch (BYOF)',
          link: '/guide/bring-your-own-fetch',
        },
      ],
    },
  ],
  api: [
    { text: 'Overview', link: '/api/' },
    {
      text: 'VPIC Response',
      link: '/api/vpic-api-response',
    },
    {
      text: 'VPIC Functions',
      items: vpicEndpointLinks,
      collapsed: false,
    },
  ],
  typedocs: [{ text: 'Index', link: '/typedoc/' }, ...typedocLinks],
}

const linkGroups: Record<LinkGroup, SidebarItem> = {
  guide: {
    text: 'Guide',
    items: groupLinks.guide,
  },
  api: {
    text: 'API',
    items: groupLinks.api,
  },
  typedocs: {
    text: 'Typedocs',
    items: groupLinks.typedocs,
  },
}

const sidebarLinks = (activeLinkGroups: LinkGroup[] = []) => {
  return Object.entries(linkGroups).map(([key, data]) => ({
    ...data,
    collapsed: !activeLinkGroups.includes(key as LinkGroup),
  }))
}

export { sidebarLinks }
