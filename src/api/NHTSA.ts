import { Fetch, NhtsaConfig } from './Fetch';

export class NHTSA extends Fetch {
  constructor(userConfig?: NhtsaConfig) {
    super(userConfig);
  }

  public async DecodeVin(
    vin: string,
    params?: {
      modelYear?: string | number;
    }
  ): Promise<any> {
    // Handle no params
    if (typeof params !== 'object') params = {};

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
        response.requestUrl = url;
        response.queryString = queryString;
        response.action = action;
        return response;
      })
      .catch(err => Promise.reject(new Error(`DecodeVin API Error: ${err}`)));
  }
}

export const Client = new NHTSA();
