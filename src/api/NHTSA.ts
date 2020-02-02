/* Parent Class */
import { Fetch } from './Fetch';

/* Types */
import { FetchConfig, FetchResponse } from './index';

class NHTSA extends Fetch {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  // Key-value format
  public async DecodeVin(
    vin: string,
    params: {
      modelYear?: string | number;
    } = {}
  ): Promise<FetchResponse | Error> {
    const action = 'DecodeVin';
    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString(params).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${action}/${vin}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }

  // Flat-file format
  public async DecodeVinValues(
    vin: string,
    params: {
      modelYear?: string | number;
    } = {}
  ): Promise<FetchResponse | Error> {
    const action = 'DecodeVinValues';
    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString(params).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${action}/${vin}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }

  // Key-value extended format (additional NCSA specific fields)
  public async DecodeVinExtended(
    vin: string,
    params: {
      modelYear?: string | number;
    } = {}
  ): Promise<FetchResponse | Error> {
    const action = 'DecodeVinExtended';
    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString(params).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${action}/${vin}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }

  // Flat-file extended format (additional NCSA specific fields)
  public async DecodeVinValuesExtended(
    vin: string,
    params: {
      modelYear?: string | number;
    } = {}
  ): Promise<FetchResponse | Error> {
    const action = 'DecodeVinValuesExtended';
    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString(params).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${action}/${vin}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }

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
}

export { NHTSA };

export const Client = new NHTSA();
