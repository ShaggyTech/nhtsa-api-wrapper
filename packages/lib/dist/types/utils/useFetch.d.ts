import type { NhtsaResponse } from '../api/types';
export declare const useFetch: () => {
    get: <T>(url: string, options?: RequestInit) => Promise<NhtsaResponse<T>>;
    post: <T_1>(url: string, options?: RequestInit) => Promise<NhtsaResponse<T_1>>;
};
//# sourceMappingURL=useFetch.d.ts.map