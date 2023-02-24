import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('@shaggytools/nhtsa-api-wrapper/package.json')

export default defineConfig({
  lang: 'en-US',
  title: '@shaggytools/nhtsa-api-wrapper',
  description: 'Documentation website for @shaggytools/nhtsa-api-wrapper',

  appearance: 'dark',
  lastUpdated: true,
  cleanUrls: true,

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  base: '/nhtsa-api-wrapper/',

  markdown: {
    theme: 'one-dark-pro',
  },

  themeConfig: {
    outline: 'deep',
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/api/': sidebarGuide(),
      '/typedoc/': sidebarGuide(),
    },

    editLink: {
      pattern:
        'https://github.com/shaggytech/nhtsa-api-wrapper/edit/main/apps/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/shaggytech/nhtsa-api-wrapper',
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2017-present Brandon Eichler',
    },
  },
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    { text: 'API Reference', link: '/api/', activeMatch: '/api/' },
    { text: 'Typedocs', link: '/typedoc/', activeMatch: '/typedoc/' },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/shaggytech/nhtsa-api-wrapper/blob/main/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/shaggytech/nhtsa-api-wrapper/blob/main/.github/contributing.md',
        },
      ],
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Guide',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/guide/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        {
          text: 'BYOF - Bring Your Own Fetch',
          link: '/guide/bring-your-own-fetch',
        },
        {
          text: 'Support for Node Versions < 18',
          link: '/guide/native-fetch',
        },
        { text: 'Typescript Support', link: '/guide/typescript' },
      ],
    },
    {
      text: 'API Reference',
      items: [
        {
          text: 'Introduction',
          link: '/api/',
        },
        {
          text: 'VPIC API Response',
          link: '/api/vpic-api-response',
        },
        {
          text: 'VPIC API Endpoints',
          collapsed: false,
          items: [
            { text: 'DecodeVin', link: '/api/decode-vin' },
            { text: 'DecodeVinExtended', link: '/api/decode-vin-extended' },
            { text: 'DecodeVinValues', link: '/api/decode-vin-values' },
            {
              text: 'DecodeVinValuesBatch',
              link: '/api/decode-vin-values-batch',
            },
            {
              text: 'DecodeVinValuesExtended',
              link: '/api/decode-vin-values-extended',
            },
            { text: 'DecodeWMI', link: '/api/decode-wmi' },
            { text: 'GetAllMakes', link: '/api/get-all-makes' },
            { text: 'GetAllManufacturers', link: '/api/get-all-manufacturers' },
            {
              text: 'GetCanadianVehicleSpecifications',
              link: '/api/get-canadian-vehicle-specifications',
            },
            {
              text: 'GetEquipmentPlantCodes',
              link: '/api/get-equipment-plant-codes',
            },
            {
              text: 'GetMakeForManufacturer',
              link: '/api/get-make-for-manufacturer',
            },
            {
              text: 'GetMakesForManufacturerAndYear',
              link: '/api/get-makes-for-manufacturer-and-year',
            },
            {
              text: 'GetMakesForVehicleType',
              link: '/api/get-makes-for-vehicle-type',
            },
            {
              text: 'GetManufacturerDetails',
              link: '/api/get-manufacturer-details',
            },
            { text: 'GetModelsForMake', link: '/api/get-models-for-make' },
            { text: 'GetModelsForMakeId', link: '/api/get-models-for-make-id' },
            {
              text: 'GetModelsForMakeIdYear',
              link: '/api/get-models-for-make-id-year',
            },
            {
              text: 'GetModelsForMakeYear',
              link: '/api/get-models-for-make-year',
            },
            { text: 'GetParts', link: '/api/get-parts' },
            {
              text: 'GetVehicleTypesForMake',
              link: '/api/get-vehicle-types-for-make',
            },
            {
              text: 'GetVehicleTypesForMakeId',
              link: '/api/get-vehicle-types-for-make-id',
            },
            {
              text: 'GetVehicleVariableList',
              link: '/api/get-vehicle-variable-list',
            },
            {
              text: 'GetVehicleVariableValuesList',
              link: '/api/get-vehicle-variable-values-list',
            },
            {
              text: 'GetWMIsForManufacturer',
              link: '/api/get-wmis-for-manufacturer',
            },
          ],
        },
      ],
    },
    {
      text: 'Package Reference',
      link: '/typedoc/',
    },
    // {
    //   text: 'Theme',
    //   collapsed: false,
    //   items: [
    //     { text: 'Introduction', link: '/guide/theme-introduction' },
    //     { text: 'Nav', link: '/guide/theme-nav' },
    //     { text: 'Sidebar', link: '/guide/theme-sidebar' },
    //     { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
    //     { text: 'Edit Link', link: '/guide/theme-edit-link' },
    //     { text: 'Last Updated', link: '/guide/theme-last-updated' },
    //     { text: 'Layout', link: '/guide/theme-layout' },
    //     { text: 'Home Page', link: '/guide/theme-home-page' },
    //     { text: 'Team Page', link: '/guide/theme-team-page' },
    //     { text: 'Badge', link: '/guide/theme-badge' },
    //     { text: 'Footer', link: '/guide/theme-footer' },
    //     { text: 'Search', link: '/guide/theme-search' },
    //     { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' },
    //   ],
    // },
    // {
    //   text: 'Migrations',
    //   collapsed: false,
    //   items: [
    //     {
    //       text: 'Migration from VuePress',
    //       link: '/guide/migration-from-vuepress',
    //     },
    //     {
    //       text: 'Migration from VitePress 0.x',
    //       link: '/guide/migration-from-vitepress-0',
    //     },
    //   ],
    // },
  ]
}

function sidebarApi() {
  return [
    {
      text: 'API Reference',
      items: [
        {
          text: 'Introduction',
          link: '/api/',
        },
        {
          text: 'VPIC API Response',
          link: '/api/vpic-api-response',
        },
        {
          text: 'VPIC API Endpoints',
          collapsed: false,
          items: [
            { text: 'DecodeVin', link: '/api/decode-vin' },
            { text: 'DecodeVinExtended', link: '/api/decode-vin-extended' },
            { text: 'DecodeVinValues', link: '/api/decode-vin-values' },
            {
              text: 'DecodeVinValuesBatch',
              link: '/api/decode-vin-values-batch',
            },
            // { text: 'DecodeVinValuesExtended', link: '/api/decode-vin-values-extended' },
            // { text: 'DecodeWMI', link: '/api/decode-wmi' },
            // { text: 'GetAllMakes', link: '/api/get-all-makes' },
            // { text: 'GetAllManufacturers', link: '/api/get-all-manufacturers' },
            // { text: 'GetCanadianVehicleSpecifications', link: '/api/get-canadian-vehicle-specifications' },
            // { text: 'GetEquipmentPlantCodes', link: '/api/get-equipment-plant-codes' },
            // { text: 'GetMakeForManufacturer', link: '/api/get-make-for-manufacturer' },
            // { text: 'GetMakesForManufacturerAndYear', link: '/api/get-makes-for-manufacturer-and-year' },
            // { text: 'GetMakesForVehicleType', link: '/api/get-makes-for-vehicle-type' },
            // { text: 'GetManufacturerDetails', link: '/api/get-manufacturer-details' },
            // { text: 'GetModelsForMake', link: '/api/get-models-for-make' },
            // { text: 'GetModelsForMakeId', link: '/api/get-models-for-make-id' },
            // { text: 'GetModelsForMakeIdYear', link: '/api/get-models-for-make-id-year' },
            // { text: 'GetModelsForMakeYear', link: '/api/get-models-for-make-year' },
            // { text: 'GetParts', link: '/api/get-parts' },
            // { text: 'GetVehicleTypesForMake', link: '/api/get-vehicle-types-for-make' },
            // { text: 'GetVehicleTypesForMakeId', link: '/api/get-vehicle-types-for-make-id' },
            // { text: 'GetVehicleVariableList', link: '/api/get-vehicle-variable-list' },
            // { text: 'GetVehicleVariableValuesList', link: '/api/get-vehicle-variable-values-list' },
            // { text: 'GetWMIsForManufacturer', link: '/api/get-wmis-for-manufacturer' },
          ],
        },
      ],
    },
  ]
}
