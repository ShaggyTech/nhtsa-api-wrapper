# VPIC API Response

This section describes the responses returned by the VPIC API.

[[toc]]

---

## Response Format

::: warning ATTENTION
This package only supports JSON API response format
:::

The VPIC API will return data in either `JSON`, `XML`, or `CSV` format.

The VPIC requires that format is specified via the request URL, either using the `format=` string in
a query parameter or in the request `body` for POST requests.

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
  Results: Array<T>
  SearchCriteria: string | null
}
```

```json [Example Response]
// Truncated example using DecodeVinValues('5UXWX7C5*BA')
{
  "Count": 136,
  "Message": "Results returned successfully ...",
  "Results": [
    {
      "Make": "BMW",
      "Model": "X5",
      "ModelYear": "2011",
      "PlantCountry": "GERMANY",
      ...etc
    },
  ],
  "SearchCriteria": "VIN(s): 5UXWX7C5*BA",
}
```

:::

::: tip See Also: [Type - NhtsaApiResponse](typedoc/modules/api_types#nhtsaresponse)
:::

### Count

The `Count` property is a `number` that represents the number of results in the `Results` array.

It could be the number of objects returned or the number of keys in a single object. It depends on
the endpoint you're using.

If it's `0` then there's no data in the `Results` array and you should check the `Message` property.

### Message

The `Message` property is a `string` that contains a message from the API. It's usually used to
indicate if there was an error or incomplete data returned, otherwise it's indicates success.

Example messages:

::: code-group

```typescript [Message: Success]
Message: 'Results returned successfully. NOTE: Any missing decoded values should be interpreted as NHTSA does not have data on the specific variable. Missing value should NOT be interpreted as an indication that a feature or technology is unavailable for a vehicle.'
```

```typescript [Message: No Data]
Message: 'ERROR: Invalid Year Submitted – Pre-1981 Year Decode Attempt'
```

:::

### Results

`Results` is an array of objects that contain the actual data returned by the API. The
number of objects and structure of each depends on the endpoint you're using.

The `Results` are typed according to the endpoint you're using. All return types are the same
name as the endpoint function with the word "Results" appended to the end, i.e. `DecodeVin` endpoint
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

And the `NhtsaApiResponse<T>` will look like this:

```ts [NhtsaApiResponse]
// `DecodeVinResults` takes the place of generic `<T>` in `NhtsaApiResponse<T>`

type NhtsaApiResponse<DecodeVinResults> = {
  Count: number
  Message: string
  SearchCriteria: string
  Results: Array<DecodeVinResults>
}
```

::: tip :bulb: TIP
Check out the [Api Reference](/api/) section for specific details on each
endpoint's `Results` array types.

Here's [DecodeVinResults](../api/endpoints/decode-vin#type-decodevinresults) that was mentioned in the above
example.
:::

### SearchCriteria

The `SearchCriteria` property is a `string` that contains the search criteria used when requesting
data from the API. It's used to indicate what the user searched for, VIN, WMI, Model, etc.

Example:

```typescript
SearchCriteria: 'VIN:WA1A4AFY2J2008189'
```
