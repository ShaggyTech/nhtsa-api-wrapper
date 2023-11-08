import { type DefaultTheme } from 'vitepress'

type SidebarItem = DefaultTheme.SidebarItem

const vpicEndpointLinks = [
  { text: 'DecodeVin', link: '/guide/vpic/endpoints/decode-vin' },
  {
    text: 'DecodeVinExtended',
    link: '/guide/vpic/endpoints/decode-vin-extended',
  },
  { text: 'DecodeVinValues', link: '/guide/vpic/endpoints/decode-vin-values' },
  {
    text: 'DecodeVinValuesBatch',
    link: '/guide/vpic/endpoints/decode-vin-values-batch',
  },
  {
    text: 'DecodeVinValuesExtended',
    link: '/guide/vpic/endpoints/decode-vin-values-extended',
  },
  { text: 'DecodeWMI', link: '/guide/vpic/endpoints/decode-wmi' },
  { text: 'GetAllMakes', link: '/guide/vpic/endpoints/get-all-makes' },
  {
    text: 'GetAllManufacturers',
    link: '/guide/vpic/endpoints/get-all-manufacturers',
  },
  {
    text: 'GetCanadianVehicleSpecifications',
    link: '/guide/vpic/endpoints/get-canadian-vehicle-specifications',
  },
  {
    text: 'GetEquipmentPlantCodes',
    link: '/guide/vpic/endpoints/get-equipment-plant-codes',
  },
  {
    text: 'GetMakeForManufacturer',
    link: '/guide/vpic/endpoints/get-make-for-manufacturer',
  },
  {
    text: 'GetMakesForManufacturerAndYear',
    link: '/guide/vpic/endpoints/get-makes-for-manufacturer-and-year',
  },
  {
    text: 'GetMakesForVehicleType',
    link: '/guide/vpic/endpoints/get-makes-for-vehicle-type',
  },
  {
    text: 'GetManufacturerDetails',
    link: '/guide/vpic/endpoints/get-manufacturer-details',
  },
  {
    text: 'GetModelsForMake',
    link: '/guide/vpic/endpoints/get-models-for-make',
  },
  {
    text: 'GetModelsForMakeId',
    link: '/guide/vpic/endpoints/get-models-for-make-id',
  },
  {
    text: 'GetModelsForMakeIdYear',
    link: '/guide/vpic/endpoints/get-models-for-make-id-year',
  },
  {
    text: 'GetModelsForMakeYear',
    link: '/guide/vpic/endpoints/get-models-for-make-year',
  },
  { text: 'GetParts', link: '/guide/vpic/endpoints/get-parts' },
  {
    text: 'GetVehicleTypesForMake',
    link: '/guide/vpic/endpoints/get-vehicle-types-for-make',
  },
  {
    text: 'GetVehicleTypesForMakeId',
    link: '/guide/vpic/endpoints/get-vehicle-types-for-make-id',
  },
  {
    text: 'GetVehicleVariableList',
    link: '/guide/vpic/endpoints/get-vehicle-variable-list',
  },
  {
    text: 'GetVehicleVariableValuesList',
    link: '/guide/vpic/endpoints/get-vehicle-variable-values-list',
  },
  {
    text: 'GetWMIsForManufacturer',
    link: '/guide/vpic/endpoints/get-wmis-for-manufacturer',
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
    text: 'Types',
    link: '/typedoc/types',
  },
]

export type LinkGroup = 'guide' | 'typedocs'

const groupLinks: Record<LinkGroup, SidebarItem[]> = {
  guide: [
    { text: 'Introduction', link: '/guide/' },
    { text: 'Install', link: '/guide/install' },
    { text: 'Getting Started', link: '/guide/getting-started' },
    { text: 'Typescript', link: '/guide/typescript' },
    {
      text: 'VPIC',
      items: [
        { text: 'Overview', link: '/guide/vpic/' },
        {
          text: 'VPIC Response',
          link: '/guide/vpic/vpic-api-response',
        },
        {
          text: 'VPIC Functions',
          items: vpicEndpointLinks,
          collapsed: true,
        },
      ],
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
    {
      text: 'Misc',
      items: [
        {
          text: 'Bring Your Own Fetch (BYOF)',
          link: '/guide/bring-your-own-fetch',
        },
        {
          text: 'Support for Node Versions < 18',
          link: '/guide/native-fetch',
        },
      ],
    },
  ],
  typedocs: [{ text: 'Index', link: '/typedoc/' }, ...typedocLinks],
}

const linkGroups: Record<LinkGroup, SidebarItem> = {
  guide: {
    text: 'Guide',
    items: groupLinks.guide,
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
