---
outline: deep
---

# VPIC API Response

This section describes the responses returned by the VPIC API.

[[toc]]

---

## Response Format

The VPIC API will return data in either `JSON`, `XML`, or `CSV` format.

The VPIC requires that format is specified via the request URL, either using the `format=` string in
a query parameter or in the request `body` for POST requests.

::: warning This package only supports JSON format
:::

## Response Codes

The VPIC API returns the following HTTP response codes:

- `200` - Success
- `400` - Bad Request
- `404` - Not Found
- ... etc.

This package will throw an error if the response code is not `200` or the response cannot be parsed
as JSON via `response.json()`. You'll need to handle these errors yourself.

It's possible for the response to be `200` but not contain any data in `Response.Results`. This
package will _not_ throw an error in this case. You'll likely want to check `Response.Count` and
`Response.Message` to see if the response contains any data.

## Response Structure

The response from the VPIC API is a JSON object with the following structure:

::: code-group

```ts [Interface NhtsaApiResponse]
type NhtsaApiResponse<T> = {
  Count: number
  Message: string
  SearchCriteria: string
  Results: Array<T>
}
```

```json [Example Response]
{
  "Count": 136,
  "Message": "Results returned successfully ...",
  "SearchCriteria": "VIN(s): 5UXWX7C5*BA",
  "Results": [
    {
      ...
      "Make": "BMW",
      "Model": "X5",
      "ModelYear": "2011",
      "PlantCountry": "GERMANY",
      ...
    }
  ]
}
```

:::

### Count

The `Count` property is a `number` that represents the number of results in the `Results` array.
If it's `0` then there's no data in the `Results` array and you should check the `Message` property.

### Message

The `Message` property is a `string` that contains a message from the API. It's usually used to
indicate if there was an error or incomplete data returned, otherwise it's indicates success.

### SearchCriteria

The `SearchCriteria` property is a `string` that contains the search criteria used when requesting
data from the API. It's used to indicate what the user searched for, VIN, WMI, Model, etc.

### Results

`Results` is an array of objects that contain the actual data returned by the API. The
number of objects and structure of each depends on the endpoint you're using.

The `Results` array is typed according to the endpoint you're using. All return types are the same
name as the endpoint function with the word `Results` appended to the end, i.e. `DecodeVin` endpoint
returns an array of `DecodeVinResults` objects.

For example if you use the `DecodeVin` endpoint, the `Results` array will contain multiple objects
with the following structure:

```ts [DecodeVinResults]
type DecodeVinResults = {
  Variable: string
  Value: string
  ValueId: number
  VariableId: number
}
```

And the `NhtsaApiResponse<T>` will look like this, `DecodeVinResults` takes the place of generic
`<T>` type in this example:

```ts [NhtsaApiResponse]
type NhtsaApiResponse<DecodeVinResults> = {
  Count: number
  Message: string
  SearchCriteria: string
  Results: Array<DecodeVinResults>
}
```

Check out the [TODO - API Reference](/guide/api-reference) page for specific details on each
endpoint's `Results` array types.
