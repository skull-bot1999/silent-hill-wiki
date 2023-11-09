import { useState } from "react";

export const useForm = ({
    initialValues = {},
    initialhiddenValues = [],
    validations,
    validateOnChange = false,
    validateOnBlur = true,
}: {
    initialValues?: Record<string, any>;
    initialhiddenValues?: string[];
    validations?: (values: Record<string, any>) => Record<string, any>;
    validateOnChange?: boolean;
    validateOnBlur?: boolean;
}): {
    values: any;
    hiddenValues: string[];
    handleToggleVisibility: any;
    handleInputChange: any;
    handleInputBlur: any;
    isFieldValid: (field: string) => boolean;
    reset: any;
    isFormValid: () => boolean;
} => {
    const [values, setValues] = useState<any>(initialValues);
    const [touched, setTouched] = useState<string[]>([]);
    const [hiddenValues, setHiddenValues] =
        useState<Array<string>>(initialhiddenValues);

    const reset = () => {
        setValues(initialValues);
        setHiddenValues([]);
    };

    const handleInputChange = ({ target }: any) => {
        if (validateOnChange && !touched.includes(target.name))
            setTouched([...touched, target.name]);
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    const handleInputBlur = ({ target }: any) => {
        if (validateOnBlur && !touched.includes(target.name))
            setTouched([...touched, target.name]);
    };

    const isFieldValid = (field: string, isSubmitting: boolean = false) => {
        if (validations) {
            let validation = validations(values)[field];
            let isValid: boolean = validation !== undefined ? validation : true;

            return touched.includes(field) || isSubmitting ? isValid : true;
        } else {
            return true;
        }
    };

    const isFormValid = () => {
        let result = true;
        const fields = Object.keys(values);
        setTouched(fields);
        for (let index = 0; index < fields.length; index++) {
            if (!isFieldValid(fields[index], true)) {
                result = false;
                break;
            }
        }

        return result;
    };

    const handleToggleVisibility = ({ target }: any) => {
        if (hiddenValues.includes(target.name))
            setHiddenValues(
                [...hiddenValues].filter(
                    (fieldName) => fieldName !== target.name
                )
            );
        else setHiddenValues([...hiddenValues, target.name]);
    };

    return {
        values,
        hiddenValues,
        handleToggleVisibility,
        handleInputChange,
        reset,
        isFieldValid,
        handleInputBlur,
        isFormValid,
    };
};
