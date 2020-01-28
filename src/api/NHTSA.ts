import { Fetch, NhtsaConfig } from './Fetch';

/**
 * @constructor
 */
class NHTSA extends Fetch {
  constructor(userConfig?: NhtsaConfig) {
    super(userConfig);
  }

  public async DecodeVin(
    vin: string,
    params: {
      modelYear?: string | number;
    } = {}
  ): Promise<object | Error> {
    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString(params).catch(err =>
      Promise.reject(
        new Error(`DecodeVin, Error building query string: ${err}`)
      )
    );

    const action = 'DecodeVin';

    const url = `${this.baseUrl}/${action}/${vin}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch(err =>
        Promise.reject(new Error(`DecodeVin, Fetch.get() error: ${err}`))
      );
  }
}

export { NHTSA };

export const Client = new NHTSA();
