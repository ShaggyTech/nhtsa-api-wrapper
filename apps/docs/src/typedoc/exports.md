**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](modules.md) / exports

# exports

## Contents

- [Exported NHTSA API Functions](exports.md#exported-nhtsa-api-functions)
  - [DecodeVin](exports.md#decodevin)
  - [DecodeVinExtended](exports.md#decodevinextended)
  - [DecodeVinValues](exports.md#decodevinvalues)
  - [DecodeVinValuesBatch](exports.md#decodevinvaluesbatch)
  - [DecodeVinValuesExtended](exports.md#decodevinvaluesextended)
  - [DecodeWMI](exports.md#decodewmi)
  - [GetAllMakes](exports.md#getallmakes)
  - [GetAllManufacturers](exports.md#getallmanufacturers)
  - [GetCanadianVehicleSpecifications](exports.md#getcanadianvehiclespecifications)
  - [GetEquipmentPlantCodes](exports.md#getequipmentplantcodes)
  - [GetMakeForManufacturer](exports.md#getmakeformanufacturer)
  - [GetMakesForManufacturerAndYear](exports.md#getmakesformanufacturerandyear)
  - [GetMakesForVehicleType](exports.md#getmakesforvehicletype)
  - [GetManufacturerDetails](exports.md#getmanufacturerdetails)
  - [GetModelsForMake](exports.md#getmodelsformake)
  - [GetModelsForMakeId](exports.md#getmodelsformakeid)
  - [GetModelsForMakeIdYear](exports.md#getmodelsformakeidyear)
  - [GetModelsForMakeYear](exports.md#getmodelsformakeyear)
  - [GetParts](exports.md#getparts)
  - [GetVehicleTypesForMake](exports.md#getvehicletypesformake)
  - [GetVehicleTypesForMakeId](exports.md#getvehicletypesformakeid)
  - [GetVehicleVariableList](exports.md#getvehiclevariablelist)
  - [GetVehicleVariableValuesList](exports.md#getvehiclevariablevalueslist)
  - [GetWMIsForManufacturer](exports.md#getwmisformanufacturer)
  - [safetyRatings](exports.md#safetyratings)
  - [useNHTSA](exports.md#usenhtsa)
- [Exported Types](exports.md#exported-types)
  - [ApiTypes](exports.md#apitypes)
  - [AtLeastOne](exports.md#atleastone)
  - [CreateUrlOptions](exports.md#createurloptions)
  - [DecodeVinExtendedResults](exports.md#decodevinextendedresults)
  - [DecodeVinExtendedVariable](exports.md#decodevinextendedvariable)
  - [DecodeVinResults](exports.md#decodevinresults)
  - [DecodeVinValuesBatchResults](exports.md#decodevinvaluesbatchresults)
  - [DecodeVinValuesExtendedResults](exports.md#decodevinvaluesextendedresults)
  - [DecodeVinValuesResults](exports.md#decodevinvaluesresults)
  - [DecodeVinVariable](exports.md#decodevinvariable)
  - [DecodeWMIResults](exports.md#decodewmiresults)
  - [GetAllMakesResults](exports.md#getallmakesresults)
  - [GetAllManufacturersResults](exports.md#getallmanufacturersresults)
  - [GetCanadianVehicleSpecificationsResults](exports.md#getcanadianvehiclespecificationsresults)
  - [GetEquipmentPlantCodesParams](exports.md#getequipmentplantcodesparams)
  - [GetEquipmentPlantCodesResults](exports.md#getequipmentplantcodesresults)
  - [GetMakeForManufacturerResults](exports.md#getmakeformanufacturerresults)
  - [GetMakesForManufacturerAndYearResults](exports.md#getmakesformanufacturerandyearresults)
  - [GetMakesForVehicleTypeResults](exports.md#getmakesforvehicletyperesults)
  - [GetManufacturerDetailsResults](exports.md#getmanufacturerdetailsresults)
  - [GetModelsForMakeIdResults](exports.md#getmodelsformakeidresults)
  - [GetModelsForMakeIdYearResults](exports.md#getmodelsformakeidyearresults)
  - [GetModelsForMakeResults](exports.md#getmodelsformakeresults)
  - [GetModelsForMakeYearResults](exports.md#getmodelsformakeyearresults)
  - [GetPartsResults](exports.md#getpartsresults)
  - [GetVehicleTypesForMakeIdResults](exports.md#getvehicletypesformakeidresults)
  - [GetVehicleTypesForMakeResults](exports.md#getvehicletypesformakeresults)
  - [GetVehicleVariableListResults](exports.md#getvehiclevariablelistresults)
  - [GetVehicleVariableValuesListResults](exports.md#getvehiclevariablevalueslistresults)
  - [GetWMIsForManufacturerResults](exports.md#getwmisformanufacturerresults)
  - [IArgToValidate](exports.md#iargtovalidate)
  - [Impossible](exports.md#impossible)
  - [NhtsaResponse](exports.md#nhtsaresponse)
  - [NoExtraProperties](exports.md#noextraproperties)
  - [QueryStringParams](exports.md#querystringparams)
  - [QueryStringParamsEncoded](exports.md#querystringparamsencoded)
  - [QueryStringTypes](exports.md#querystringtypes)
  - [RequireOnlyOne](exports.md#requireonlyone)
  - [SafetyRatingsOptions](exports.md#safetyratingsoptions)
  - [SafetyRatingsOptionsBase](exports.md#safetyratingsoptionsbase)
  - [SafetyRatingsOptionsEmpty](exports.md#safetyratingsoptionsempty)
  - [SafetyRatingsOptionsMake](exports.md#safetyratingsoptionsmake)
  - [SafetyRatingsOptionsModel](exports.md#safetyratingsoptionsmodel)
  - [SafetyRatingsOptionsModelYear](exports.md#safetyratingsoptionsmodelyear)
  - [SafetyRatingsOptionsVehicleId](exports.md#safetyratingsoptionsvehicleid)
  - [SafetyRatingsResponseByOptions](exports.md#safetyratingsresponsebyoptions)
  - [SafetyRatingsResponseByVariant](exports.md#safetyratingsresponsebyvariant)
  - [SafetyRatingsResultsByOptions](exports.md#safetyratingsresultsbyoptions)
  - [SafetyRatingsResultsByVariant](exports.md#safetyratingsresultsbyvariant)
  - [SafetyRatingsResultsData](exports.md#safetyratingsresultsdata)
  - [SafetyRatingsResultsVariants](exports.md#safetyratingsresultsvariants)
- [Exported Utility Functions](exports.md#exported-utility-functions)
  - [createQueryString](exports.md#createquerystring)
  - [encodeQueryStringParams](exports.md#encodequerystringparams)
  - [isValidVin](exports.md#isvalidvin)

## Exported NHTSA API Functions

### DecodeVin

Re-exports [DecodeVin](api/vpic/endpoints/DecodeVin.md#decodevin)

### DecodeVinExtended

Re-exports [DecodeVinExtended](api/vpic/endpoints/DecodeVinExtended.md#decodevinextended)

### DecodeVinValues

Re-exports [DecodeVinValues](api/vpic/endpoints/DecodeVinValues.md#decodevinvalues)

### DecodeVinValuesBatch

Re-exports [DecodeVinValuesBatch](api/vpic/endpoints/DecodeVinValuesBatch.md#decodevinvaluesbatch)

### DecodeVinValuesExtended

Re-exports [DecodeVinValuesExtended](api/vpic/endpoints/DecodeVinValuesExtended.md#decodevinvaluesextended)

### DecodeWMI

Re-exports [DecodeWMI](api/vpic/endpoints/DecodeWMI.md#decodewmi)

### GetAllMakes

Re-exports [GetAllMakes](api/vpic/endpoints/GetAllMakes.md#getallmakes)

### GetAllManufacturers

Re-exports [GetAllManufacturers](api/vpic/endpoints/GetAllManufacturers.md#getallmanufacturers)

### GetCanadianVehicleSpecifications

Re-exports [GetCanadianVehicleSpecifications](api/vpic/endpoints/GetCanadianVehicleSpecifications.md#getcanadianvehiclespecifications)

### GetEquipmentPlantCodes

Re-exports [GetEquipmentPlantCodes](api/vpic/endpoints/GetEquipmentPlantCodes.md#getequipmentplantcodes)

### GetMakeForManufacturer

Re-exports [GetMakeForManufacturer](api/vpic/endpoints/GetMakeForManufacturer.md#getmakeformanufacturer)

### GetMakesForManufacturerAndYear

Re-exports [GetMakesForManufacturerAndYear](api/vpic/endpoints/GetMakesForManufacturerAndYear.md#getmakesformanufacturerandyear)

### GetMakesForVehicleType

Re-exports [GetMakesForVehicleType](api/vpic/endpoints/GetMakesForVehicleType.md#getmakesforvehicletype)

### GetManufacturerDetails

Re-exports [GetManufacturerDetails](api/vpic/endpoints/GetManufacturerDetails.md#getmanufacturerdetails)

### GetModelsForMake

Re-exports [GetModelsForMake](api/vpic/endpoints/GetModelsForMake.md#getmodelsformake)

### GetModelsForMakeId

Re-exports [GetModelsForMakeId](api/vpic/endpoints/GetModelsForMakeId.md#getmodelsformakeid)

### GetModelsForMakeIdYear

Re-exports [GetModelsForMakeIdYear](api/vpic/endpoints/GetModelsForMakeIdYear.md#getmodelsformakeidyear)

### GetModelsForMakeYear

Re-exports [GetModelsForMakeYear](api/vpic/endpoints/GetModelsForMakeYear.md#getmodelsformakeyear)

### GetParts

Re-exports [GetParts](api/vpic/endpoints/GetParts.md#getparts)

### GetVehicleTypesForMake

Re-exports [GetVehicleTypesForMake](api/vpic/endpoints/GetVehicleTypesForMake.md#getvehicletypesformake)

### GetVehicleTypesForMakeId

Re-exports [GetVehicleTypesForMakeId](api/vpic/endpoints/GetVehicleTypesForMakeId.md#getvehicletypesformakeid)

### GetVehicleVariableList

Re-exports [GetVehicleVariableList](api/vpic/endpoints/GetVehicleVariableList.md#getvehiclevariablelist)

### GetVehicleVariableValuesList

Re-exports [GetVehicleVariableValuesList](api/vpic/endpoints/GetVehicleVariableValuesList.md#getvehiclevariablevalueslist)

### GetWMIsForManufacturer

Re-exports [GetWMIsForManufacturer](api/vpic/endpoints/GetWMIsForManufacturer.md#getwmisformanufacturer)

### safetyRatings

Re-exports [safetyRatings](api/safetyRatings.md#safetyratings)

### useNHTSA

Re-exports [useNHTSA](api/useNHTSA.md#usenhtsa)

## Exported Types

### ApiTypes

Re-exports [ApiTypes](api/types.md#apitypes)

### AtLeastOne

Re-exports [AtLeastOne](utils/types.md#atleastonet-r)

### CreateUrlOptions

Re-exports [CreateUrlOptions](api/useNHTSA.md#createurloptions)

### DecodeVinExtendedResults

Re-exports [DecodeVinExtendedResults](api/vpic/endpoints/DecodeVinExtended.md#decodevinextendedresults)

### DecodeVinExtendedVariable

Re-exports [DecodeVinExtendedVariable](api/vpic/endpoints/DecodeVinExtended.md#decodevinextendedvariable)

### DecodeVinResults

Re-exports [DecodeVinResults](api/vpic/endpoints/DecodeVin.md#decodevinresults)

### DecodeVinValuesBatchResults

Re-exports [DecodeVinValuesBatchResults](api/vpic/endpoints/DecodeVinValuesBatch.md#decodevinvaluesbatchresults)

### DecodeVinValuesExtendedResults

Re-exports [DecodeVinValuesExtendedResults](api/vpic/endpoints/DecodeVinValuesExtended.md#decodevinvaluesextendedresults)

### DecodeVinValuesResults

Re-exports [DecodeVinValuesResults](api/vpic/endpoints/DecodeVinValues.md#decodevinvaluesresults)

### DecodeVinVariable

Re-exports [DecodeVinVariable](api/vpic/endpoints/DecodeVin.md#decodevinvariable)

### DecodeWMIResults

Re-exports [DecodeWMIResults](api/vpic/endpoints/DecodeWMI.md#decodewmiresults)

### GetAllMakesResults

Re-exports [GetAllMakesResults](api/vpic/endpoints/GetAllMakes.md#getallmakesresults)

### GetAllManufacturersResults

Re-exports [GetAllManufacturersResults](api/vpic/endpoints/GetAllManufacturers.md#getallmanufacturersresults)

### GetCanadianVehicleSpecificationsResults

Re-exports [GetCanadianVehicleSpecificationsResults](api/vpic/endpoints/GetCanadianVehicleSpecifications.md#getcanadianvehiclespecificationsresults)

### GetEquipmentPlantCodesParams

Re-exports [GetEquipmentPlantCodesParams](api/vpic/endpoints/GetEquipmentPlantCodes.md#getequipmentplantcodesparams)

### GetEquipmentPlantCodesResults

Re-exports [GetEquipmentPlantCodesResults](api/vpic/endpoints/GetEquipmentPlantCodes.md#getequipmentplantcodesresults)

### GetMakeForManufacturerResults

Re-exports [GetMakeForManufacturerResults](api/vpic/endpoints/GetMakeForManufacturer.md#getmakeformanufacturerresults)

### GetMakesForManufacturerAndYearResults

Re-exports [GetMakesForManufacturerAndYearResults](api/vpic/endpoints/GetMakesForManufacturerAndYear.md#getmakesformanufacturerandyearresults)

### GetMakesForVehicleTypeResults

Re-exports [GetMakesForVehicleTypeResults](api/vpic/endpoints/GetMakesForVehicleType.md#getmakesforvehicletyperesults)

### GetManufacturerDetailsResults

Re-exports [GetManufacturerDetailsResults](api/vpic/endpoints/GetManufacturerDetails.md#getmanufacturerdetailsresults)

### GetModelsForMakeIdResults

Re-exports [GetModelsForMakeIdResults](api/vpic/endpoints/GetModelsForMakeId.md#getmodelsformakeidresults)

### GetModelsForMakeIdYearResults

Re-exports [GetModelsForMakeIdYearResults](api/vpic/endpoints/GetModelsForMakeIdYear.md#getmodelsformakeidyearresults)

### GetModelsForMakeResults

Re-exports [GetModelsForMakeResults](api/vpic/endpoints/GetModelsForMake.md#getmodelsformakeresults)

### GetModelsForMakeYearResults

Re-exports [GetModelsForMakeYearResults](api/vpic/endpoints/GetModelsForMakeYear.md#getmodelsformakeyearresults)

### GetPartsResults

Re-exports [GetPartsResults](api/vpic/endpoints/GetParts.md#getpartsresults)

### GetVehicleTypesForMakeIdResults

Re-exports [GetVehicleTypesForMakeIdResults](api/vpic/endpoints/GetVehicleTypesForMakeId.md#getvehicletypesformakeidresults)

### GetVehicleTypesForMakeResults

Re-exports [GetVehicleTypesForMakeResults](api/vpic/endpoints/GetVehicleTypesForMake.md#getvehicletypesformakeresults)

### GetVehicleVariableListResults

Re-exports [GetVehicleVariableListResults](api/vpic/endpoints/GetVehicleVariableList.md#getvehiclevariablelistresults)

### GetVehicleVariableValuesListResults

Re-exports [GetVehicleVariableValuesListResults](api/vpic/endpoints/GetVehicleVariableValuesList.md#getvehiclevariablevalueslistresults)

### GetWMIsForManufacturerResults

Re-exports [GetWMIsForManufacturerResults](api/vpic/endpoints/GetWMIsForManufacturer.md#getwmisformanufacturerresults)

### IArgToValidate

Re-exports [IArgToValidate](utils/argHandler.md#iargtovalidate)

### Impossible

Re-exports [Impossible](utils/types.md#impossiblek)

### NhtsaResponse

Re-exports [NhtsaResponse](api/types.md#nhtsaresponseresultstype-apitype)

### NoExtraProperties

Re-exports [NoExtraProperties](utils/types.md#noextrapropertiest-u)

### QueryStringParams

Re-exports [QueryStringParams](utils/queryString.md#querystringparams)

### QueryStringParamsEncoded

Re-exports [QueryStringParamsEncoded](utils/queryString.md#querystringparamsencodedt)

### QueryStringTypes

Re-exports [QueryStringTypes](utils/queryString.md#querystringtypes)

### RequireOnlyOne

Re-exports [RequireOnlyOne](utils/types.md#requireonlyonet-keys)

### SafetyRatingsOptions

Re-exports [SafetyRatingsOptions](api/safetyRatings.md#safetyratingsoptions)

### SafetyRatingsOptionsBase

Re-exports [SafetyRatingsOptionsBase](api/safetyRatings.md#safetyratingsoptionsbase)

### SafetyRatingsOptionsEmpty

Re-exports [SafetyRatingsOptionsEmpty](api/safetyRatings.md#safetyratingsoptionsempty)

### SafetyRatingsOptionsMake

Re-exports [SafetyRatingsOptionsMake](api/safetyRatings.md#safetyratingsoptionsmake)

### SafetyRatingsOptionsModel

Re-exports [SafetyRatingsOptionsModel](api/safetyRatings.md#safetyratingsoptionsmodel)

### SafetyRatingsOptionsModelYear

Re-exports [SafetyRatingsOptionsModelYear](api/safetyRatings.md#safetyratingsoptionsmodelyear)

### SafetyRatingsOptionsVehicleId

Re-exports [SafetyRatingsOptionsVehicleId](api/safetyRatings.md#safetyratingsoptionsvehicleid)

### SafetyRatingsResponseByOptions

Re-exports [SafetyRatingsResponseByOptions](api/safetyRatings.md#safetyratingsresponsebyoptionsoptions)

### SafetyRatingsResponseByVariant

Re-exports [SafetyRatingsResponseByVariant](api/safetyRatings.md#safetyratingsresponsebyvariantvariant)

### SafetyRatingsResultsByOptions

Re-exports [SafetyRatingsResultsByOptions](api/safetyRatings.md#safetyratingsresultsbyoptionsoptions)

### SafetyRatingsResultsByVariant

Re-exports [SafetyRatingsResultsByVariant](api/safetyRatings.md#safetyratingsresultsbyvariantvariant)

### SafetyRatingsResultsData

Re-exports [SafetyRatingsResultsData](api/safetyRatings.md#safetyratingsresultsdata)

### SafetyRatingsResultsVariants

Re-exports [SafetyRatingsResultsVariants](api/safetyRatings.md#safetyratingsresultsvariants)

## Exported Utility Functions

### createQueryString

Re-exports [createQueryString](utils/queryString.md#createquerystring)

### encodeQueryStringParams

Re-exports [encodeQueryStringParams](utils/queryString.md#encodequerystringparams)

### isValidVin

Re-exports [isValidVin](utils/isValidVin.md#isvalidvin)
