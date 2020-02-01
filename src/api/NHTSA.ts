import { Fetch, FetchConfig, FetchResponse } from './Fetch';

/**
 * @constructor
 */
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
}

export { NHTSA };

export const Client = new NHTSA();
