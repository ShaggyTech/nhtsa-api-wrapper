## [2.0.2](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v2.0.1...v2.0.2) (2021-06-17)

### Bug Fixes

- **api:** `GetWMIsForManufacturer` endpoint changes, see VPIC release notes at [https://vpic.nhtsa.dot.gov/api/Home/Index/ReleaseNotes](https://vpic.nhtsa.dot.gov/api/Home/Index/ReleaseNotes). Now accepts string or number for `manufacturer` and optional parameter `vehicleType` as string or number ([5cf9a12](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/5cf9a12519f6b5bd890d3838398748e78489120a))

### Performance Improvements

- **fetch:** switch to isomporphic-unfetch for a bundle reduction of 13.15kb ([f9ba7b7](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/f9ba7b7951cb84fb1d81f862a25adebb44a2e982))

## [2.0.1](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v2.0.0...v2.0.1) (2021-06-16)

### Bug Fixes

Package browser/bundle.min.js and browser/iife.js now properly handling API http calls. Using cross-fetch/polyfill instead of ponyfill. Tests now use jest-fetch-mock [https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/08babd7](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/08babd777522faded252674dd4c446e52d169ab2)

# [2.0.0](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v1.1.12...v2.0.0) (2021-06-10)

- Overall package size reduction of 50% from targeting esm and removing `browser:` option in babel config, now using @babel/runtime
### Bug Fixes

- isValidVin ([615c993](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/615c9933b9f83bc108282d743d6cffbbd36fd210))

## [1.1.12](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v1.1.11...v1.1.12) (2021-06-07)

### Bug Fixes

- upgrade cross-fetch from 3.0.6 to 3.1.0 ([3d9329b](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/3d9329b287de6350625f9a2d72901b4c50dc54c4))
- upgrade cross-fetch from 3.0.6 to 3.1.2 ([f6596ba](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/f6596bafacc9e6f669aa81463cf3cda2299a7616))
- upgrade cross-fetch from 3.0.6 to 3.1.2 ([021162a](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/021162acc3a63cd1bf79f4552846553ccaeafd15))

## [1.1.11](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v1.1.10...v1.1.11) (2020-12-19)

### Bug Fixes

- **release:** build and push dist folder in attempt to fix last release ([0eb74ac](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/0eb74acc4dfc732d4f6aaabf524077c3586436b8))

## [1.1.10](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v1.1.9...v1.1.10) (2020-12-19)

### Bug Fixes

- **release:** removed dist folder from .gitignore, may be need for release ([c85a11c](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/c85a11cedd008d1eedcb3316ccd740a85b83c83d))

## [1.1.9](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v1.1.8...v1.1.9) (2020-12-19)

### Bug Fixes

- **rollup:** fix Browser/Universal bundle terser options, remove all comments ([29899a3](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/29899a32f20ada23ac69aa246117d08edf432609))

## [1.1.8](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v1.1.7...v1.1.8) (2020-12-19)

### Bug Fixes

- **eslint/prettier:** code style refactor after recent dep updates ([6358d87](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/6358d87bd13b25f794f6d7c66b093ba9efd9ea84))

## [1.1.7](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v1.1.6...v1.1.7) (2020-12-18)

### Bug Fixes

- **ci/cd:** fix semantic-release job, add NPM_TOKEN to secrets ([737f059](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/737f059a33a5b1fa2de71b10cb0cc73c2edb89ae))

## [1.1.6](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v1.1.5...v1.1.6) (2020-09-21)

### Bug Fixes

- package.json & yarn.lock to reduce vulnerabilities ([83b252e](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/83b252e4b5c3f2c3b31621e14a8629585c6ec0b1))

## [1.1.5](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v1.1.4...v1.1.5) (2020-09-05)

### Bug Fixes

- **prettier:** fix prettier/eslint errors that appeared after updates ([f64a28a](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/f64a28aa173fcaa4d7d7b6d07d5f3845d0fb667c))

## [1.1.4](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v1.1.3...v1.1.4) (2020-04-26)

### Bug Fixes

- **package.json:** fix engines field in package.json ([3b9522b](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/3b9522bc7019975bcba5914e4d83543a9279449e))
- **typescript:** export API Action types via ActionTypes in index.d.ts ([6b7a781](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/6b7a781ecef612bff1d89f47357c52477d186f78))
- **typescript:** remove Error type from all Promise like method returns ([9d44334](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/9d443348113cad66d281a9d12cfa317c85762728))

### Reverts

- **travis:** revert previous changes to docs deployment script ([015f8b6](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/015f8b6ad3d401e3716e18605a2047e5587a045c))

## [1.1.3](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v1.1.2...v1.1.3) (2020-03-17)

### Bug Fixes

- **package.json:** fix engines field in package.json ([#41](https://github.com/ShaggyTech/nhtsa-api-wrapper/issues/41)) ([92670b9](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/92670b90ae3b29057a23ca9c0e7156412d0fc36d))

## [1.1.2](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v1.1.1...v1.1.2) (2020-03-13)

## [1.1.1](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v1.1.0...v1.1.1) (2020-03-11)

# [1.1.0](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v1.0.1...v1.1.0) (2020-03-09)

### Features

- **api actions:** decodeVINValuesBatch NHTSA API Action ([27de80c](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/27de80c03bee68ea9d6cb20972cf85b34b39fb45))

## [1.0.1](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v1.0.0...v1.0.1) (2020-03-08)

### Bug Fixes

- **travis:** fix for docs folder contents not working with git add ([2a0a89b](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/2a0a89bfbcef9d5662d9c9c4f6cb34b12912a4a3))
- **travis:** fix for docs folder contents not working with git add ([#13](https://github.com/ShaggyTech/nhtsa-api-wrapper/issues/13)) ([72ac86a](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/72ac86a338473b1df2bbd891364358562b3b5986))

# [1.0.0](https://github.com/ShaggyTech/nhtsa-api-wrapper/compare/v0.1.17...v1.0.0) (2020-03-07)

### Continuous Integration

- bREAKING CHANGE ([be4a411](https://github.com/ShaggyTech/nhtsa-api-wrapper/commit/be4a411035a4f14af01b4613a7fde0e1698c3efb))

### BREAKING CHANGES

- v1.0.0
- Releasing version 1.0.0
