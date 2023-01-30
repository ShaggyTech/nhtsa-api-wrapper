import type { AtLeastOne } from '../types';
export declare type IArgToValidate = {
    name: string;
    value: unknown;
} & AtLeastOne<{
    types?: string[];
    required?: boolean;
}>;
export declare const catchInvalidArguments: ({ args, mode, }: {
    args: IArgToValidate[];
    mode?: "default" | "atLeast" | undefined;
}) => void;
export declare const validateArgument: ({ name, value, required, types, }: IArgToValidate & AtLeastOne<{
    types?: string[] | undefined;
    required?: boolean | undefined;
}, "types" | "required">) => void;
//# sourceMappingURL=argHandler.d.ts.map