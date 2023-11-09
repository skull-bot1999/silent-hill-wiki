import React from "react";
import { InputContainer } from "./InputContainer";
import { CustomInput } from "./inputTypes";

export const Input = ({
    label,
    value,
    type,
    placeholder,
    onChange,
    name,
    id,
    isInvalid,
    onInvalidMessage,
}: CustomInput) => {
    return (
        <InputContainer
            label={label}
            showError={isInvalid}
            errorMessage={onInvalidMessage}
        >
            <input
                autoComplete="off"
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
            />
        </InputContainer>
    );
};
