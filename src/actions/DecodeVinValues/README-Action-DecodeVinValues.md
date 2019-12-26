# ApiWrapper.DecodeVinValues

## NHTSA.dot.gov/vehicles API Action

-----

See module **[actions.DecodeVinValues](module-actions_DecodeVinValues.html)** for usage information

-----

> vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/5UXWX7C5*BA?format=xml&modelyear=2011

The Decode VIN Flat Format API will decode the VIN and the decoded output will be made available in a flat file
format. Model Year in the request allows for the decoding to specifically be done in the current, or older
(pre-1980), model year ranges. It is recommended to always send in the model year. This API also supports partial
VIN decoding (VINs that are less than 17 characters). In this case, the VIN will be decoded partially with the
available characters. In case of partial VINs, a "*" could be used to indicate the unavailable characters.

-----

| Possible Output Formats | Default for this package  |  
| ----------------------- | :-----------------------: |
| json                    |    X                      |
| csv                     |                           |
| xml                     |                           |

-----

### Credit to

**[https://vpic.nhtsa.dot.gov/api/](https://vpic.nhtsa.dot.gov/api/)**
