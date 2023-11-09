import { ReactNode } from "react";

export const InputContainer = ({
    label,
    showError,
    errorMessage,
    children,
}: {
    label: string;
    showError?: boolean;
    errorMessage?: string;
    children: ReactNode;
}) => {
    return (
        <div className="input-form">
            <label htmlFor="gender">{label}</label>
            {children}
            <label className="error">{showError && errorMessage}</label>
        </div>
    );
};
