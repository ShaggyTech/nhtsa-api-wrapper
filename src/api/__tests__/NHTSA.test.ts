import { NHTSA } from '../NHTSA';
import { DEFAULT_CONFIG } from '../Fetch';

import mockData from '../../__mocks__/mockData';

describe('the NHTSA Class', () => {
  test('it exists', () => {
    expect(NHTSA).toBeDefined();
  });

  test('it instantiates', () => {
    const client = new NHTSA();
    expect(client).toBeDefined();

    // Class Properties
    expect(client.apiResponseFormat).toBe('json');
    expect(client.baseUrl).toBe('https://vpic.nhtsa.dot.gov/api/vehicles');
    expect(client.options).toStrictEqual(DEFAULT_CONFIG.options);

    // Parent Class Methods
    expect(client.get).toBeDefined();
    expect(client.buildQueryString).toBeDefined();
  });

  test('it instantiates with user provided config', () => {
    const userConfig = {
      apiResponseFormat: 'xml',
      baseUrl: 'https://www.shaggytech.com',
      options: {
        body: 'test body',
      },
    };

    const client = new NHTSA(userConfig);
    expect(client).toBeDefined();

    // Class Properties
    expect(client.apiResponseFormat).toBe('json');
    expect(client.baseUrl).toBe('https://www.shaggytech.com');
    expect(client.options).toStrictEqual({
      ...userConfig.options,
    });

    // Parent Class Methods
    expect(client.get).toBeDefined();
    expect(client.buildQueryString).toBeDefined();
  });
});

/******************************************************************************************
 * More complete individual tests for all of the below can be found in ./src/actions/__tests__
 ******************************************************************************************/

describe('NHTSA.DecodeVin()', () => {
  test('it decodes a VIN', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client
      .DecodeVin('3VWD07AJ5EM388202', {
        modelYear: 2001,
      })
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.DecodeVin).toBeDefined();
    expect(client.DecodeVin).toBeInstanceOf(Function);
  });
});

describe('NHTSA.DecodeVinValues()', () => {
  test('it decodes a VIN', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client
      .DecodeVinValues('3VWD07AJ5EM388202', {
        modelYear: 2001,
      })
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.DecodeVinValues).toBeDefined();
    expect(client.DecodeVinValues).toBeInstanceOf(Function);
  });
});

describe('NHTSA.DecodeVinExtended()', () => {
  test('it decodes a VIN', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client
      .DecodeVinExtended('3VWD07AJ5EM388202', {
        modelYear: 2001,
      })
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.DecodeVinExtended).toBeDefined();
    expect(client.DecodeVinExtended).toBeInstanceOf(Function);
  });
});

describe('NHTSA.DecodeVinValuesExtended()', () => {
  test('it decodes a VIN', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client
      .DecodeVinValuesExtended('3VWD07AJ5EM388202', {
        modelYear: 2001,
      })
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.DecodeVinValuesExtended).toBeDefined();
    expect(client.DecodeVinValuesExtended).toBeInstanceOf(Function);
  });
});

describe('DecodeWMI()', () => {
  test('it decodes a WMI', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client.DecodeWMI('3VW').catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.DecodeWMI).toBeDefined();
    expect(client.DecodeWMI).toBeInstanceOf(Function);
  });
});

describe('GetWMIsForManufacturer()', () => {
  test('it gets a manufacturers WMIs', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client
      .GetWMIsForManufacturer('audi')
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.GetWMIsForManufacturer).toBeDefined();
    expect(client.GetWMIsForManufacturer).toBeInstanceOf(Function);
  });
});

describe('GetAllMakes()', () => {
  test('it gets all makes from the database', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client.GetAllMakes().catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.GetAllMakes).toBeDefined();
    expect(client.GetAllMakes).toBeInstanceOf(Function);
  });
});

describe('GetParts()', () => {
  test('it gets parts with given params', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client
      .GetParts({
        type: 156,
        fromDate: '11/10/2010',
        toDate: '11/20/2019',
        page: 2,
      })
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.GetParts).toBeDefined();
    expect(client.GetParts).toBeInstanceOf(Function);
  });
});

describe('GetAllManufacturers()', () => {
  test('it gets all manufacturers', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client
      .GetAllManufacturers({
        manufacturerType: 'Intermediate',
        page: 2,
      })
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.GetAllManufacturers).toBeDefined();
    expect(client.GetAllManufacturers).toBeInstanceOf(Function);
  });
});

describe('GetManufacturerDetails()', () => {
  test('it gets manufacturer details w/ manufacturer as a string', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client
      .GetManufacturerDetails('audi')
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.GetManufacturerDetails).toBeDefined();
    expect(client.GetManufacturerDetails).toBeInstanceOf(Function);
  });
});

describe('GetMakeForManufacturer()', () => {
  test('it gets manufacturer makes w/ manufacturer as a string', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client
      .GetMakeForManufacturer('audi')
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.GetMakeForManufacturer).toBeDefined();
    expect(client.GetMakeForManufacturer).toBeInstanceOf(Function);
  });
});

describe('GetMakesForManufacturerAndYear()', () => {
  test('it gets manufacturer makes w/ manufacturer as a number', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client
      .GetMakesForManufacturerAndYear(121, {
        year: 2009,
      })
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.GetMakesForManufacturerAndYear).toBeDefined();
    expect(client.GetMakesForManufacturerAndYear).toBeInstanceOf(Function);
  });
});

describe('GetVehicleTypesForMakeId()', () => {
  test('it gets vehicle types with a valid makeId', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client
      .GetVehicleTypesForMakeId(381)
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.GetVehicleTypesForMakeId).toBeDefined();
    expect(client.GetVehicleTypesForMakeId).toBeInstanceOf(Function);
  });
});

describe('GetEquipmentPlantCodes()', () => {
  test('it gets equipment plant codes', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client
      .GetEquipmentPlantCodes({
        year: 2019,
        equipmentType: 1,
        reportType: 'All',
      })
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.GetEquipmentPlantCodes).toBeDefined();
    expect(client.GetEquipmentPlantCodes).toBeInstanceOf(Function);
  });
});

describe('GetModelsForMake()', () => {
  test('it gets models for a valid makeName', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client.GetModelsForMake('audi').catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.GetModelsForMake).toBeDefined();
    expect(client.GetModelsForMake).toBeInstanceOf(Function);
  });
});

describe('GetModelsForMakeId()', () => {
  test('it gets vehicle models with a valid makeId', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client.GetModelsForMakeId(381).catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.GetModelsForMakeId).toBeDefined();
    expect(client.GetModelsForMakeId).toBeInstanceOf(Function);
  });
});

describe('GetModelsForMakeYear()', () => {
  test('it gets models with modelYear and vehicleType params', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client
      .GetModelsForMakeYear({
        make: 'Audi',
        modelYear: 2016,
        vehicleType: 'auto',
      })
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.GetModelsForMakeYear).toBeDefined();
    expect(client.GetModelsForMakeYear).toBeInstanceOf(Function);
  });
});

describe('GetModelsForMakeIdYear()', () => {
  test('it gets models with modelYear and vehicleType params', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client
      .GetModelsForMakeIdYear({
        makeId: 991,
        modelYear: 2016,
        vehicleType: 'moto',
      })
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.GetModelsForMakeIdYear).toBeDefined();
    expect(client.GetModelsForMakeIdYear).toBeInstanceOf(Function);
  });
});

describe('GetVehicleVariableList()', () => {
  test('it gets all vehicle related variables from the database', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client.GetVehicleVariableList().catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.GetVehicleVariableList).toBeDefined();
    expect(client.GetVehicleVariableList).toBeInstanceOf(Function);
  });
});

describe('GetVehicleVariableValuesList()', () => {
  test('it gets vehicle variable values with a variable Name', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client
      .GetVehicleVariableValuesList('battery type')
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.GetVehicleVariableValuesList).toBeDefined();
    expect(client.GetVehicleVariableValuesList).toBeInstanceOf(Function);
  });
});

describe('GetCanadianVehicleSpecifications()', () => {
  test('it gets canadian specs with year, make, model, and units params', async () => {
    fetchMock.mockResponse(JSON.stringify({ ...mockData }));
    const client = new NHTSA();
    const response = await client
      .GetCanadianVehicleSpecifications({
        year: 2011,
        make: 'audi',
        model: 'A4',
        units: 'US',
      })
      .catch((err) => err);

    expect(response.Results).toStrictEqual(mockData.Results);
    expect(client.GetCanadianVehicleSpecifications).toBeDefined();
    expect(client.GetCanadianVehicleSpecifications).toBeInstanceOf(Function);
  });
});
