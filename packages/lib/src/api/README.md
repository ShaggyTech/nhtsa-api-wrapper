# /api

## `/api` exports the following:

- [useNHTSA](#useNHTSA) - a composable function that returns an object containing methods for making
  HTTP requests to the NHTSA API. The returned functions are documented in the
  [Package Documentation](https://www.shaggytech.com/nhtsa-api-wrapper)

- `/api/endpoints` contains all 24 helper functions, one for each endpoint
  (DecodeVin, GetAllMakes, etc).

- `/api/types` contains all the types used by the NHTSA API.
  - each endpoint response type is the endpoint name appended by `Results`,
  - `<EndpointName>Results`, such as `DecodeVinResults`
  - see documentation of each endpoint for more details.
