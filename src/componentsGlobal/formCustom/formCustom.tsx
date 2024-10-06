import { useState } from "react";
import InputField from '../inputs/InputField'; // Asegúrate de ajustar la ruta
import './loginPage.css'; // Asegúrate de ajustar la ruta

import './loginPage.css'; // Ajusta la ruta si es necesario

interface FormField {
    name: string;
    type: string;
    placeholder: string;
    icon: string;
    validation?: {
        required?: boolean;
        pattern?: string;
        minLength?: number;
        message?: string;
    };
}

const LoginForm = ({ fields, onSubmit }: { fields: FormField[], onSubmit: (formData: { [key: string]: string }) => void }) => {
    // se crea un solo estado para los datos del formulario y otro para los errores
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [errors, setErrors] = useState<{ [key: string]: string }>({}); // Para almacenar mensajes de error

    //crea la funcion onchange para los inputs
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Validar el campo actual
        validateField(name, value);
    };

    const validateField = (name: string, value: string) => {
        const field = fields.find(field => field.name === name);
        if (field?.validation) {
            const { required, pattern, minLength, message } = field.validation;
            let errorMessage = '';

            if (required && !value) {
                errorMessage = `${name} is required.`;
            } else if (minLength && value.length < minLength) {
                errorMessage = message || `Minimum length is ${minLength}.`;
            } else if (pattern && !new RegExp(pattern).test(value)) {
                errorMessage = message || 'Invalid format.';
            }

            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: errorMessage,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};

        // Validar todos los campos antes de enviar
        fields.forEach(field => {
            if (field.validation) {
                const value = formData[field.name] || '';
                validateField(field.name, value);
                if (errors[field.name]) {
                    newErrors[field.name] = errors[field.name];
                }
            }
        });

        if (Object.keys(newErrors).length === 0) {
            onSubmit(formData);
        } else {
            setErrors(newErrors); // Mostrar errores si hay
        }
    };

    return (
        <form action="#" className="login-form" onSubmit={handleSubmit}>
            {fields.map((field) => (
                <div key={field.name}>
                    <InputField
                        type={field.type}
                        placeholder={field.placeholder}
                        icon={field.icon}
                        onChange={handleInputChange}
                        name={field.name}
                        value={formData[field.name] || ''} // Asignar valor del estado al campo
                    />
                    {errors[field.name] && <span className="error-message">{errors[field.name]}</span>}
                </div>
            ))}

            <a href="#" className="forgot-password-link">Forgot password?</a>
            <button type="submit" className="login-button">Log In</button>
        </form>
    );
};

export default LoginForm;

