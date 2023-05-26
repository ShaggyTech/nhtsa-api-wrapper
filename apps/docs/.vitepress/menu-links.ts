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
    text: 'Modules',
    collapsed: true,
    items: [
      {
        text: '/api',
        collapsed: true,
        items: [
          { text: 'Index', link: '/typedoc/modules/api' },
          {
            text: 'useNHTSA',
            link: '/typedoc/modules/api_useNHTSA',
          },
          {
            text: '/endpoints/',
            collapsed: true,
            items: [
              { text: 'Index', link: '/typedoc/modules/api_endpoints' },
              {
                text: 'DecodeVin',
                link: '/typedoc/modules/api_endpoints_DecodeVin',
              },
              {
                text: 'DecodeVinExtended',
                link: '/typedoc/modules/api_endpoints_DecodeVinExtended',
              },
              {
                text: 'DecodeVinValues',
                link: '/typedoc/modules/api_endpoints_DecodeVinValues',
              },
              {
                text: 'DecodeVinValuesBatch',
                link: '/typedoc/modules/api_endpoints_DecodeVinValuesBatch',
              },
              {
                text: 'DecodeVinValuesExtended',
                link: '/typedoc/modules/api_endpoints_DecodeVinValuesExtended',
              },
              {
                text: 'DecodeWMI',
                link: '/typedoc/modules/api_endpoints_DecodeWMI',
              },
              {
                text: 'GetAllMakes',
                link: '/typedoc/modules/api_endpoints_GetAllMakes',
              },
              {
                text: 'GetAllManufacturers',
                link: '/typedoc/modules/api_endpoints_GetAllManufacturers',
              },
              {
                text: 'GetCanadianVehicleSpecifications',
                link: '/typedoc/modules/api_endpoints_GetCanadianVehicleSpecifications',
              },
              {
                text: 'GetEquipmentPlantCodes',
                link: '/typedoc/modules/api_endpoints_GetEquipmentPlantCodes',
              },
              {
                text: 'GetMakeForManufacturer',
                link: '/typedoc/modules/api_endpoints_GetMakeForManufacturer',
              },
              {
                text: 'GetMakesForManufacturerAndYear',
                link: '/typedoc/modules/api_endpoints_GetMakesForManufacturerAndYear',
              },
              {
                text: 'GetMakesForVehicleType',
                link: '/typedoc/modules/api_endpoints_GetMakesForVehicleType',
              },
              {
                text: 'GetManufacturerDetails',
                link: '/typedoc/modules/api_endpoints_GetManufacturerDetails',
              },
              {
                text: 'GetModelsForMake',
                link: '/typedoc/modules/api_endpoints_GetModelsForMake',
              },
              {
                text: 'GetModelsForMakeId',
                link: '/typedoc/modules/api_endpoints_GetModelsForMakeId',
              },
              {
                text: 'GetModelsForMakeIdYear',
                link: '/typedoc/modules/api_endpoints_GetModelsForMakeIdYear',
              },
              {
                text: 'GetModelsForMakeYear',
                link: '/typedoc/modules/api_endpoints_GetModelsForMakeYear',
              },
              {
                text: 'GetParts',
                link: '/typedoc/modules/api_endpoints_GetParts',
              },
              {
                text: 'GetVehicleTypesForMake',
                link: '/typedoc/modules/api_endpoints_GetVehicleTypesForMake',
              },
              {
                text: 'GetVehicleTypesForMakeId',
                link: '/typedoc/modules/api_endpoints_GetVehicleTypesForMakeId',
              },
              {
                text: 'GetVehicleVariableList',
                link: '/typedoc/modules/api_endpoints_GetVehicleVariableList',
              },
              {
                text: 'GetVehicleVariableValuesList',
                link: '/typedoc/modules/api_endpoints_GetVehicleVariableValuesList',
              },
              {
                text: 'GetWMIsForManufacturer',
                link: '/typedoc/modules/api_endpoints_GetWMIsForManufacturer',
              },
            ],
          },
        ],
      },
      {
        text: '/utils',
        collapsed: true,
        items: [
          { text: 'Index', link: '/typedoc/modules/utils' },
          {
            text: 'argHandler',
            link: '/typedoc/modules/utils_argHandler',
          },
          {
            text: 'errorHandler',
            link: '/typedoc/modules/utils_errorHandler',
          },
          {
            text: 'getTypeof',
            link: '/typedoc/modules/utils_getTypeof',
          },
          {
            text: 'isValidVin',
            link: '/typedoc/modules/utils_isValidVin',
          },
          {
            text: 'queryString',
            link: '/typedoc/modules/utils_queryString',
          },
        ],
      },
    ],
  },
  {
    text: 'Types',
    collapsed: true,
    items: [
      { text: 'Index', link: '/typedoc/modules/types' },
      { text: '/api/types', link: '/typedoc/modules/api_types' },
      {
        text: '/api/endpoints/types',
        link: '/typedoc/modules/api_endpoints_types',
      },
      {
        text: '/utils/types',
        link: '/typedoc/modules/utils_types',
      },
    ],
  },
]

export type LinkGroup = 'guide' | 'api' | 'typedocs'

const groupLinks: Record<LinkGroup, SidebarItem[]> = {
  guide: [
    { text: 'Introduction', link: '/guide/' },
    { text: 'Install', link: '/guide/install' },
    { text: 'Getting Started', link: '/guide/getting-started' },
    { text: 'Typescript', link: '/guide/typescript' },
    {
      text: 'Bring Your Own Fetch (BYOF)',
      link: '/guide/bring-your-own-fetch',
    },
    {
      text: 'Support for Node Versions < 18',
      link: '/guide/native-fetch',
    },
    {
      text: 'Examples',
      items: [
        { text: 'VIN Decoding', link: '/guide/vin-decoding' },
        {
          text: 'VIN Validation (offline)',
          link: '/guide/offline-vin-validation',
        },
      ],
    },
    {
      text: 'Utility Functions',
      items: [
        { text: 'Overview', link: '/utils/' },
        { text: 'isValidVin', link: '/utils/is-valid-vin' },
        { text: 'useNHTSA', link: '/utils/use-nhtsa' },
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
