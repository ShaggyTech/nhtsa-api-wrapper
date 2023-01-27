import type { RequireAtLeastOne } from '../types';
export declare const validateArgument: ({ name, value, caller, required, types, }: {
    name: string;
    value: unknown;
    caller: string;
} & RequireAtLeastOne<{
    required?: boolean | undefined;
    types?: string[] | undefined;
}, "required" | "types">) => void;
export declare const argHandler: ({ name, value, required, types, caller, }: {
    name: string;
    value: unknown;
    required?: boolean | undefined;
    types?: string[] | undefined;
    caller?: string | undefined;
}) => string;
//# sourceMappingURL=argHandler.d.ts.map