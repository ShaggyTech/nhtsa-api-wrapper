# /vpic

## `/vpic` exports the following:

- `/vpic/endpoints` contains all 24 helper functions, one for each endpoint
  (DecodeVin, GetAllMakes, etc).

- `/vpic/types` contains all the types used by the NHTSA API.
  - Each endpoint response type is the endpoint name appended by `Results`,
    such as: `<EndpointName>Results`
  - For example, endpoint `DecodeVin` would return a response object containg a Results key
    that is an array of objects of type `DecodeVinResults`.
  - See the documentation of each endpoint for more details.
