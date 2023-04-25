# Api Reference

---

This section of the documentation describes the functions exported by this package, as well as the
response format returned by the NHTSA API. Also includes details of the NHTSA API endpoints and
what they return.

## VPIC API Response

- [VPIC API Response](../api/vpic-api-response.md)

## VPIC API Endpoints

- [DecodeVin](../api/endpoints/decode-vin.md)
- [DecodeVinExtended](../api/endpoints/decode-vin-extended.md)
- [DecodeVinValues](../api/endpoints/decode-vin-values.md)
- [DecodeVinValuesBatch](../api/endpoints/decode-vin-values-batch.md)
- [DecodeVinValuesExtended](../api/endpoints/decode-vin-values-extended.md)
- [DecodeWMI](../api/endpoints/decode-wmi.md)
- [GetAllMakes](../api/endpoints/get-all-makes.md)
- [GetAllManufacturers](../api/endpoints/get-all-manufacturers.md)
- [GetCanadianVehicleSpecifications](../api/endpoints/get-canadian-vehicle-specifications.md)
- [GetEquipmentPlantCodes](../api/endpoints/get-equipment-plant-codes.md)
- [GetMakeForManufacturer](../api/endpoints/get-make-for-manufacturer.md)
- [GetMakesForManufacturerAndYear](../api/endpoints/get-makes-for-manufacturer-and-year.md)
- [GetMakesForVehicleType](../api/endpoints/get-makes-for-vehicle-type.md)
- [GetManufacturerDetails](../api/endpoints/get-manufacturer-details.md)
- [GetModelsForMake](../api/endpoints/get-models-for-make.md)
- [GetModelsForMakeId](../api/endpoints/get-models-for-make-id.md)
- [GetModelsForMakeIdYear](../api/endpoints/get-models-for-make-id-year.md)
- [GetModelsForMakeYear](../api/endpoints/get-models-for-make-year.md)
- [GetParts](../api/endpoints/get-parts.md)
- [GetVehicleTypesForMake](../api/endpoints/get-vehicle-types-for-make.md)
- [GetVehicleTypesForMakeId](../api/endpoints/get-vehicle-types-for-make-id.md)
- [GetVehicleVariableList](../api/endpoints/get-vehicle-variable-list.md)
- [GetVehicleVariableValuesList](../api/endpoints/get-vehicle-variable-values-list.md)
- [GetWMIsForManufacturer](../api/endpoints/get-wmis-for-manufacturer.md)

## All Exported VPIC API Functions

```javascript
import {
  DecodeVin,
  DecodeVinExtended,
  DecodeVinValues,
  DecodeVinValuesBatch,
  DecodeVinValuesExtended,
  DecodeWMI,
  GetAllMakes,
  GetAllManufacturers,
  GetCanadianVehicleSpecifications,
  GetEquipmentPlantCodes,
  GetMakeForManufacturer,
  GetMakesForManufacturerAndYear,
  GetMakesForVehicleType,
  GetManufacturerDetails,
  GetModelsForMake,
  GetModelsForMakeId,
  GetModelsForMakeIdYear,
  GetModelsForMakeYear,
  GetParts,
  GetVehicleTypesForMake,
  GetVehicleTypesForMakeId,
  GetVehicleVariableList,
  GetVehicleVariableValuesList,
  GetWMIsForManufacturer,
} from '@shaggytools/nhtsa-api-wrapper'
```
