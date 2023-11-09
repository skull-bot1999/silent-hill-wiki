"use client";
import { isEmail } from "@/helpers/isEmail";
import { useForm } from "@/hooks/useForm";
import { Input } from "./Input";
import { Select } from "./Select";

export const SubscribeForm = () => {
    const validations = ({ name, age, gender, email }: Record<string, any>) => {
        return {
            name: name.trim() !== "",
            age: age > 0 && age < 120,
            gender: gender !== "",
            email: isEmail(email),
        };
    };

    const { values, handleInputChange, reset, isFormValid, isFieldValid } =
        useForm({
            initialValues: {
                name: "",
                age: 0,
                gender: "",
                email: "",
            },
            validations,
        });

    const { name, age, gender, email } = values;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log(values);
        }
    };

    return (
        <div className="form card mt-5">
            <h3>Inscribirse</h3>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Nombre"
                    type="text"
                    placeholder="Escribe tu nombre"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleInputChange}
                    isInvalid={!isFieldValid("name")}
                    onInvalidMessage="Debe escribir el nombre"
                />

                <Input
                    label="Edad"
                    type="number"
                    placeholder="Escribe tu edad"
                    name="age"
                    id="age"
                    value={age}
                    onChange={handleInputChange}
                    isInvalid={!isFieldValid("age")}
                    onInvalidMessage="Ingrese una edad válida"
                />

                <Select
                    label="Género"
                    name="gender"
                    id="gender"
                    value={gender}
                    onChange={handleInputChange}
                    options={[
                        { value: "", text: "Seleccione" },
                        { value: "f", text: "Femenino" },
                        { value: "m", text: "Masculino" },
                    ]}
                    isInvalid={!isFieldValid("gender")}
                    onInvalidMessage="Ingrese una opción válida"
                />

                <Input
                    label="Correo Electronico"
                    type="email"
                    placeholder="ejemplo@ejemplo.com"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleInputChange}
                    isInvalid={!isFieldValid("email")}
                    onInvalidMessage="Ingrese un email válido"
                />

                <button type="submit" className="w-full">
                    Enviar
                </button>
            </form>
        </div>
    );
};
