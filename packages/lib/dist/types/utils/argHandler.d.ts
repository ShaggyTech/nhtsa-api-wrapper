interface Args {
    endpoint: string;
    argName: string;
    required?: boolean;
    types: string[];
    value: unknown;
}
export declare const argHandler: ({ endpoint, argName, required, types, value, }: Args) => string;
export {};
//# sourceMappingURL=argHandler.d.ts.map