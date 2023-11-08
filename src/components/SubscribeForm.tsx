"use client";
import { useForm } from "@/hooks/useForm";

export const SubscribeForm = () => {
    const { values, handleInputChange, reset } = useForm({
        name: "",
        age: 0,
        gender: "",
        email: "",
    });

    const { name, age, gender, email } = values;

    return (
        <div className="form">
            <center>Inscribirse</center>
            <form>
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    placeholder="Escribe tu nombre"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleInputChange}
                />
                <label htmlFor="age">Edad</label>
                <input
                    type="number"
                    placeholder="Escribe tu edad"
                    name="age"
                    id="age"
                    value={age}
                    onChange={handleInputChange}
                />
                <label htmlFor="gender">Género</label>
                <select
                    name="gender"
                    id="gender"
                    value={gender}
                    onChange={handleInputChange}
                >
                    <option value="f">Femenino</option>
                    <option value="m">Masculino</option>
                </select>
                <br />
                <label htmlFor="email">Correo Electronico</label>
                <input
                    type="email"
                    placeholder="ejemplo@ejemplo.com"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};
