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
    text: '/api',
    collapsed: true,
    items: [
      { text: 'Index', link: '/typedoc/api' },
      {
        text: 'useNHTSA',
        link: '/typedoc/api/useNHTSA',
      },
      {
        text: '/endpoints/',
        collapsed: true,
        items: [
          { text: 'Index', link: '/typedoc/api/endpoints' },
          {
            text: 'DecodeVin',
            link: '/typedoc/api/endpoints/DecodeVin',
          },
          {
            text: 'DecodeVinExtended',
            link: '/typedoc/api/endpoints/DecodeVinExtended',
          },
          {
            text: 'DecodeVinValues',
            link: '/typedoc/api/endpoints/DecodeVinValues',
          },
          {
            text: 'DecodeVinValuesBatch',
            link: '/typedoc/api/endpoints/DecodeVinValuesBatch',
          },
          {
            text: 'DecodeVinValuesExtended',
            link: '/typedoc/api/endpoints/DecodeVinValuesExtended',
          },
          {
            text: 'DecodeWMI',
            link: '/typedoc/api/endpoints/DecodeWMI',
          },
          {
            text: 'GetAllMakes',
            link: '/typedoc/api/endpoints/GetAllMakes',
          },
          {
            text: 'GetAllManufacturers',
            link: '/typedoc/api/endpoints/GetAllManufacturers',
          },
          {
            text: 'GetCanadianVehicleSpecifications',
            link: '/typedoc/api/endpoints/GetCanadianVehicleSpecifications',
          },
          {
            text: 'GetEquipmentPlantCodes',
            link: '/typedoc/api/endpoints/GetEquipmentPlantCodes',
          },
          {
            text: 'GetMakeForManufacturer',
            link: '/typedoc/api/endpoints/GetMakeForManufacturer',
          },
          {
            text: 'GetMakesForManufacturerAndYear',
            link: '/typedoc/api/endpoints/GetMakesForManufacturerAndYear',
          },
          {
            text: 'GetMakesForVehicleType',
            link: '/typedoc/api/endpoints/GetMakesForVehicleType',
          },
          {
            text: 'GetManufacturerDetails',
            link: '/typedoc/api/endpoints/GetManufacturerDetails',
          },
          {
            text: 'GetModelsForMake',
            link: '/typedoc/api/endpoints/GetModelsForMake',
          },
          {
            text: 'GetModelsForMakeId',
            link: '/typedoc/api/endpoints/GetModelsForMakeId',
          },
          {
            text: 'GetModelsForMakeIdYear',
            link: '/typedoc/api/endpoints/GetModelsForMakeIdYear',
          },
          {
            text: 'GetModelsForMakeYear',
            link: '/typedoc/api/endpoints/GetModelsForMakeYear',
          },
          {
            text: 'GetParts',
            link: '/typedoc/api/endpoints/GetParts',
          },
          {
            text: 'GetVehicleTypesForMake',
            link: '/typedoc/api/endpoints/GetVehicleTypesForMake',
          },
          {
            text: 'GetVehicleTypesForMakeId',
            link: '/typedoc/api/endpoints/GetVehicleTypesForMakeId',
          },
          {
            text: 'GetVehicleVariableList',
            link: '/typedoc/api/endpoints/GetVehicleVariableList',
          },
          {
            text: 'GetVehicleVariableValuesList',
            link: '/typedoc/api/endpoints/GetVehicleVariableValuesList',
          },
          {
            text: 'GetWMIsForManufacturer',
            link: '/typedoc/api/endpoints/GetWMIsForManufacturer',
          },
        ],
      },
    ],
  },
  {
    text: '/utils',
    collapsed: true,
    items: [
      { text: 'Index', link: '/typedoc/utils' },
      {
        text: 'argHandler',
        link: '/typedoc/utils/argHandler',
      },
      {
        text: 'errorHandler',
        link: '/typedoc/utils/errorHandler',
      },
      {
        text: 'getTypeof',
        link: '/typedoc/utils/getTypeof',
      },
      {
        text: 'isValidVin',
        link: '/typedoc/utils/isValidVin',
      },
      {
        text: 'queryString',
        link: '/typedoc/utils/queryString',
      },
    ],
  },
  {
    text: 'Types Index',
    link: '/typedoc/types',
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
