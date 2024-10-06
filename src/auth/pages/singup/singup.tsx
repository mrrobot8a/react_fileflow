import InputField from "../../../componentsGlobal/inputs/InputField";
// import './loginPage.css';
import './singup.css';
import DefaultLayout from "../../components/layout/defaultLayout";
import logo from '../../../assets/LogoAlcaldia.png';
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";
import { AuthResponse, AuthResponseError } from "../../helper/types";
import { CustomAlertV2 } from "../../../componentsGlobal/alerts/alerts";
import { BASEAPIURL } from "../../../environment/dev";
import { signupUserApi } from "../../service/authService";



export const SingUpScreen = () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');

    const [error, setError] = useState('');

    const [isSend, setisSend] = useState(false);

    //
    const auth = useAuth();
    const goto = useNavigate();

    if (auth.isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validateEmail(email) || validatePassword(password) || validateNameAndLastName(name) || validateNameAndLastName(lastname)) {
            return;
        }

        setisSend(true);


        try {

            const result = await signupUserApi({ email, password, firstName: name, lastName: lastname });

            if (result.error) {
                console.error('Error:', result);
                CustomAlertV2({
                    toast: true,
                    position: "top",
                    icon: "error",
                    title: "¡Error!",
                    text: result.error,
                    showConfirmButton: false,
                    timer: 2500,
                    background: "#f8f9fa", // Fondo de la alerta
                    color: "#333", // Color del texto
                    iconColor: "#dc3545", // Color del icono
                    // customClass: {
                    //     title: 'alert-title', // Clase para el título
                    //     // Clase para el contenido
                    //     popup: 'alert-popup', // Clase para el popup
                    // },
                });
               
            }


            if (result.success) {

                // Aquí podrías manejar el caso de éxito
                console.log('Registro exitoso:', result);
                CustomAlertV2({
                    toast: true,
                    position: "top",
                    icon: "success",
                    title: "¡Éxito!",
                    text: "Tu trabajo ha sido guardado exitosamente.",
                    showConfirmButton: false,
                    timer: 2500,
                    background: "#f8f9fa", // Fondo de la alerta
                    color: "#333", // Color del texto
                    iconColor: "#28a745", // Color del icono                    
                });
                goto('/login');

            }



        } catch (error) {
            console.log('Error de conexión:', error);
            CustomAlertV2({
                toast: true,
                position: "top",
                icon: "error",
                title: "¡Error!",
                text: "Tu trabajo no ha sido guardado.",
                showConfirmButton: false,
                timer: 7500,
                background: "#f8f9fa", // Fondo de la alerta
                color: "#333", // Color del texto
                iconColor: "#dc3545", // Color del icono
                // customClass: {
                //     title: 'alert-title', // Clase para el título
                //     // Clase para el contenido
                //     popup: 'alert-popup', // Clase para el popup
                // },
            });
           
        }

        setisSend(false);
    }


    // validaciones  para los input
    const validateEmail = (email: string) => {
        const pattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
        return !new RegExp(pattern).test(email);
    }

    const validatePassword = (password: string) => {
        return password.length < 4;
    }

    const validateNameAndLastName = (name: string) => {
        const pattner = "^[a-zA-Z ]+$"
        return !new RegExp(pattner).test(name);
    }



    return (
        <>
            <DefaultLayout >
                <div className="login-containerr">
                    <div className="login-container__header">
                        <h2 className="form-title">Log in with</h2>
                        <div className="box-Image">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="login-form">
                        <InputField error={validateNameAndLastName(name) ? 'correo invalido' : ''} type="text" placeholder="name" icon="person" onChange={(e) => setName(e.target.value)} value={name} />
                        <InputField error={validateNameAndLastName(lastname) ? 'correo invalido' : ''} type="text" placeholder="lastName" icon="person" onChange={(e) => setLastname(e.target.value)} value={lastname} />
                        <InputField error={validateEmail(email) ? 'correo invalido' : ''} type="email" placeholder="Email address" icon="mail" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <InputField error={validatePassword(password) ? 'correo invalido' : ''} type="password" placeholder="Password" icon="lock" onChange={(e) => setPassword(e.target.value)} value={password} />
                        <button disabled={isSend} type="submit" className="login-button">Sing up</button>
                    </form>

                    <p className="signup-prompt">
                        Already have an account? <Link to="/" className="signup-link">Sign in</Link>
                    </p>
                </div>
            </DefaultLayout>
        </>
    )
}