export * from './api/types';
export * from './utils/types';
/**
 * Require at least one of a set of properties in an object
 * https://stackoverflow.com/a/49725198
 */
export declare type RequireAtLeastOne<T, R extends keyof T = keyof T> = Omit<T, R> & {
    [P in R]: Required<Pick<T, P>> & Partial<Omit<T, P>>;
}[R];
/**
 * Require only one of a set of properties in an object
 * https://stackoverflow.com/a/49725198
 */
export declare type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Omit<T, Keys> & {
    [K in keyof Required<T>]: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
}[Keys];
export {};
