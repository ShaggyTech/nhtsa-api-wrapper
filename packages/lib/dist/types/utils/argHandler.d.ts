export declare type IArgToValidate = {
    name: string;
    value: unknown;
    types?: string[];
    required?: boolean;
};
export declare const catchInvalidArguments: ({ args, mode, }: {
    args: IArgToValidate[];
    mode?: "default" | "atLeast" | undefined;
}) => void;
export declare const validateArgument: ({ name, value, required, types, mode, }: IArgToValidate & {
    mode?: "boolean" | "error" | undefined;
}) => boolean;
//# sourceMappingURL=argHandler.d.ts.map