# Typescript Support

[[toc]]

---

This package is designed for full typescript support and bundles it's own types. Types can be found
in the `@shaggytools/nhtsa-api-wrapper/dist/types`. In most cases you shouldn't need to.

We've tried to be as accurate as possible typing the API responses based on testing real responses
from the NHTSA API. Please report any discrepancies you may find and they will be fixed.

Check out the [API Reference](/api/) page for more details on each
endpoint helper function and their return types.

## Using Typescript

This package was designed with typescript support in mind and therefore should work out of the box
with most modern code editors.

If for some reason you're not getting any type hints or code completion, or receive errors about not
finding types for this package, you may need to add the following to your `tsconfig.json` file:

::: code-group

```json [tsconfig.json]
{
  "compilerOptions": {
    "types": ["@shaggytools/nhtsa-api-wrapper"]
  }
}
```

:::

## Exported Types

All exported types can be found in the `@shaggytools/nhtsa-api-wrapper/dist/types` directory.

You shouldn't need to import them directly from `/dist/types`, the package root exports all of them
directly.

Here's an example of how to import specific types from this package:

```ts
import type {
  DecodeVinResults,
  GetAllMakesResults
} from '@shaggytools/nhtsa-api-wrapper'
```

## NHTSA API Response Types

The NHTSA VPIC API response is an object with the following structure:

::: code-group

```ts [Interface NhtsaApiResponse]
type NhtsaApiResponse<T> = {
  Count: number
  Message: string
  Results: Array<T>
  SearchCriteria: string
}
```

:::

::: code-group

```json [Example Response]
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
    }
  ]
  "SearchCriteria": "VIN(s): 5UXWX7C5*BA",
}
```

:::

See [VPIC Response Structure](/api/vpic-api-response#response-structure) for more details
on the response returned by the VPIC API.

## Note for Beginners

If you're new to Typescript, you may be wondering what 'full typescript support' means.

Having Typescript support means most modern code editors should let you know if you're missing any
required args or parameters for each endpoint function. The responses will also be typed to match
actual response JSON structure from the VPIC Vehicles API.

Even if you aren't using Typescript, you can still take advantage of the type hints and code
completion automatically provided by your code editor, VSCode for example.

When you're using one of the endpoint functions, `GetAllMakes` for example, your code editor will
allow you to hover over the function name and see the arguments the function accepts and what type
they are expected to be. The "type structure" of the function will be visible to you in case you
forget what the function expects. It will also show what the function returns.

You'll see `Promise<NhtsaApiResponse<GetAllMakesResults> | string>` is the return type in the case
of `GetAllMakes`. This means that the function returns a `Promise` that resolves to either a
`NhtsaApiResponse` object or a `string`. All of the endpoint functions return a similar type using
their own `Results` array type.

### Benefits of Typescript

We'll show some examples of how Typescript can help you avoid common mistakes and make you a more
efficient developer.

For this example lets say you saved the return from the `DecodeVin` to a variable named
`data`.

```ts
const data = await DecodeVin('1G1YY22G965105609')
```

The `data` variable is of type `NhtsaApiResponse<DecodeVinResults>`:

::: code-group

```ts [NhtsaApiResponse]
type NhtsaApiResponse<DecodeVinResults> = {
  Count: number
  Message: string
  Results: Array<DecodeVinResults>
  SearchCriteria: string
}
```

:::

and `DecodeVinResults` is an array of objects with the following structure:

::: code-group

```ts [DecodeVinResults]
type DecodeVinResults = {
  Variable: string
  Value: string
  ValueId: number
  VariableId: number
}
```

:::

If you were trying to access the first object in the array, you would see that `Results[0].Variable`
is a `string`, and `Results[0].ValueId` is a `number`.

Using VSCode you could "peek" at all available keys in `Results[0]`. Either by typing the beginning
like `Results[0].` and then pressing `Ctrl + i`, or by hovering over and waiting for the popup to
appear. This is what is known as "intellisense" or "code completion".

If you were to attempt accessing `Results[0].Other` you would see that it does not exist in type
`DecodeVinResults`. Your code editor would let you know that you're trying to access a property
that doesn't exist. In this way you can avoid common mistakes like typos and accessing properties
that don't exist.

Similarly, if you saved the `Results[0].ValueId` value to a variable, your code editor will know
that it's of type `number` and warn you if you try to use in ways that numbers can't be used, such
as `Results[0].ValueId.toUpperCase()` or similar. You would be warned that `toUpperCase` does not
exist on type `number`.

<br>

These are just some of the benefits of having Typescript support. The key takeaway is that it will
help you avoid common mistakes and make you a more efficient developer. It can be adopted into an
existing project gradually until you're more comfortable with using the full power of Typescript.
