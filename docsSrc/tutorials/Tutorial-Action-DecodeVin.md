# ApiWrapper.DecodeVin

## NHTSA.dot.gov/vehicles API Action

-----

See module **[actions.DecodeVin](module-actions_DecodeVin.html)** for usage information

-----

> vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/5UXWX7C5*BA?format=xml&modelyear=2011

The Decode VIN API will decode the VIN and the decoded output will be made available in the format of Key-value
pairs. The IDs (VariableID and ValueID) represent the unique ID associated with the Variable/Value. In case of text
variables, the ValueID is not applicable. Model Year in the request allows for the decoding to specifically be done
in the current, or older (pre-1980), model year ranges. It is recommended to always send in the model year. This API
also supports partial VIN decoding (VINs that are less than 17 characters). In this case, the VIN will be decoded
partially with the available characters. In case of partial VINs, a "*" could be used to indicate the unavailable
characters. The 9th digit is not necessary

-----

| Possible Output Formats | Default  |  
| ----------------------- | :------: |
| json                    |    X     |
| csv                     |          |
| xml                     |          |

-----

### Credit to

**[https://vpic.nhtsa.dot.gov/api/](https://vpic.nhtsa.dot.gov/api/)**
