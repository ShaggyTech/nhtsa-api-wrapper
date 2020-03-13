'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-99dfa5de.js');
require('cross-fetch');
require('./isValidVin.js');

/**
 * @module api/actions/GetModelsForMakeId
 * @category Actions
 * @description GetModelsForMakeId NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetModelsForMakeId](module-api_actions_GetModelsForMakeId.GetModelsForMakeId.html)
 * >
 * > **Types**
 * > - Type: [GetModelsForMakeIdResponse](#GetModelsForMakeIdResponse)
 * > - Type: [GetModelsForMakeIdResults](#GetModelsForMakeIdResults)
 *
 */
/**
 * Implemented by [NHTSA](module-api_NHTSA-NHTSA.html).
 *
 * Extends [api/Fetch.Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @param {FetchConfig} [userConfig] - User configuration options to construct the class with.
 */
class GetModelsForMakeId extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This returns the Models in the vPIC dataset for a specified Make
     * whose Id is equal to the `makeId` in the vPIC Dataset.
     *
     * @async
     * @param {number} makeID - Vehicle make ID (number).
     * @returns {(Promise<GetModelsForMakeIdResponse | Error>)} Api Response object.
     */
    GetModelsForMakeId(makeID) {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetModelsForMakeId';
            /* Runtime typechecking */
            const typeofMakeId = Fetch.getTypeof(makeID);
            if (typeofMakeId !== 'number') {
                return Promise.reject(new Error(`${action}, "makeId" argument is required and must be of type number, got: ` +
                    `<${typeofMakeId}> ${makeID}`));
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString({}).catch((err) => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${makeID}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch((err) => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.GetModelsForMakeId = GetModelsForMakeId;
//# sourceMappingURL=GetModelsForMakeId.js.map
