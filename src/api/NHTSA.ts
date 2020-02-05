/* Parent Class */
import { Fetch } from './Fetch';

/* API Actions */
import {
  DecodeVin,
  DecodeVinValues,
  DecodeVinExtended,
  DecodeVinValuesExtended,
  GetMakesForVehicleType,
  GetVehicleTypesForMake
} from './actions';

/* Types */
import { FetchConfig, FetchResponse } from './index';

class NHTSA extends Fetch
  implements
    DecodeVin,
    DecodeVinValues,
    DecodeVinExtended,
    DecodeVinValuesExtended,
    GetMakesForVehicleType,
    GetVehicleTypesForMake {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  DecodeVin = DecodeVin.prototype.DecodeVin;
  DecodeVinValues = DecodeVinValues.prototype.DecodeVinValues;
  DecodeVinExtended = DecodeVinExtended.prototype.DecodeVinExtended;
  DecodeVinValuesExtended =
    DecodeVinValuesExtended.prototype.DecodeVinValuesExtended;

  GetMakesForVehicleType =
    GetMakesForVehicleType.prototype.GetMakesForVehicleType;

  GetVehicleTypesForMake =
    GetVehicleTypesForMake.prototype.GetVehicleTypesForMake;

  // Decode World Manufacturer Identifier (WMI)
  public async DecodeWMI(WMI: string): Promise<FetchResponse | Error> {
    const action = 'DecodeWMI';
    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString({}).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${action}/${WMI}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }

  // Get WMIs for specific manufacturers
  public async GetWMIsForManufacturer(
    manufacturer: string
  ): Promise<FetchResponse | Error> {
    const action = 'GetWMIsForManufacturer';
    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString({}).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${action}/${manufacturer}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }

  // Get all makes in the vPIC Dataset
  public async GetAllMakes(): Promise<FetchResponse | Error> {
    const action = 'GetAllMakes';
    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString({}).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${action}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }

  // This provides a list of ORGs with letter date in the given range of the dates and with specified Type of ORG.
  // Up to 1000 results will be returned at a time.
  public async GetParts(
    params: {
      type?: string | number;
      fromDate?: string;
      toDate?: string;
      page?: string | number;
    } = {}
  ): Promise<FetchResponse | Error> {
    const action = 'GetParts';
    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString(params).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${action}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }

  // This provides a list of all the Manufacturers available in vPIC Dataset.
  public async GetAllManufacturers(
    params: {
      manufacturerType?: string;
      page?: string | number;
    } = {}
  ): Promise<FetchResponse | Error> {
    const action = 'GetAllManufacturers';
    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString(params).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${action}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }

  // This provides the details for a specific manufacturer that is requested.
  public async GetManufacturerDetails(
    manufacturer: string | number
  ): Promise<FetchResponse | Error> {
    const action = 'GetManufacturerDetails';
    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString({}).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${action}/${manufacturer}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }

  // This returns all the Makes in the vPIC dataset for a specified manufacturer that is requested.
  public async GetMakeForManufacturer(
    manufacturer: string | number
  ): Promise<FetchResponse | Error> {
    const action = 'GetMakeForManufacturer';
    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString({}).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${action}/${manufacturer}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }

  // This returns all the Makes in the vPIC dataset for a specified manufacturer
  // and whose Year From and Year To range cover the specified year
  public async GetMakesForManufacturerAndYear(
    manufacturer: string | number,
    params: {
      year: string | number;
    }
  ): Promise<FetchResponse | Error> {
    const action = 'GetMakesForManufacturerAndYear';

    if (!manufacturer) {
      return Promise.reject(
        new Error(
          `${action}, please provide a valid manufacturer arg, either a number or string, got: ${params}`
        )
      );
    }

    if (!params?.year) {
      return Promise.reject(
        new Error(
          `${action}, please provide a valid year parameter, got params: ${params}`
        )
      );
    }
    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString(params).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${action}/${manufacturer}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}

export { NHTSA };

export const Client = new NHTSA();
