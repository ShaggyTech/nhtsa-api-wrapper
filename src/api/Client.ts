/**
 * @module api/Client
 * @category API
 * @description Module exporting an instance of NHSTA class (package level export).
 *
 * > **Module Exports**:
 * > - Class Instance: [new NHTSA()](module-api_NHTSA-NHTSA.html) - A class instance containing all API Actions.
 */

import { NHTSA } from './NHTSA';

export const Client = new NHTSA();
