import { ReactNode } from "react";

export interface CustomInput {
    label: string;
    value: any;
    onChange: any;
    name: string;
    id: string;
    type?: "number" | "text" | "email" = "text";
    placeholder?: string = "";
    isInvalid?: boolean;
    onInvalidMessage?: string;
    children?: ReactNode;
}

export interface CustomSelect extends CustomInput {
    options: { value: any; text: string }[];
}
