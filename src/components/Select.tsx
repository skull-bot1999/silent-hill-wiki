import React from "react";
import { CustomSelect } from "./inputTypes";
import { InputContainer } from "./InputContainer";

export const Select = ({
    name,
    id,
    value,
    onChange,
    label,
    options,
    isInvalid,
    onInvalidMessage,
}: CustomSelect) => {
    return (
        <InputContainer
            label={label}
            showError={isInvalid}
            errorMessage={onInvalidMessage}
        >
            <select name={name} id={id} value={value} onChange={onChange}>
                {options.map((option: any) => (
                    <option value={option.value}>{option.text}</option>
                ))}
            </select>
        </InputContainer>
    );
};
