import SocialLogin from "../../../componentsGlobal/SocialLogin";
import InputField from "../../../componentsGlobal/inputs/InputField";
import './loginPage.css';
import DefaultLayout from "../../components/layout/defaultLayout";
import logo from '../../../assets/LogoAlcaldia.png';
import { useState } from "react";
import LoginForm from "../../../componentsGlobal/formCustom/formCustom";

// Definir el objeto JSON para el formulario
const formFields = [
  {
    "name": "email",
    "type": "email",
    "placeholder": "Email address",
    "icon": "mail",
    "validation": {
      "required": true,
      "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
      "message": "Please enter a valid email address."
    }
  },
  {
    "name": "password",
    "type": "password",
    "placeholder": "Password",
    "icon": "lock",
    "validation": {
      "required": true,
      "minLength": 4,
      "message": "Password must be at least 6 characters long."
    }
  }
]

export const LoginScreenV2Custom = () => {

  const handleLogin = (formData: { [key: string]: string }) => {
    console.log(formData); 
    // Aquí puedes manejar la lógica de autenticación o envío de datos
  };

  return (
    <>
      <DefaultLayout>
        <div className="login-containerr">
          <div className="login-container__header">
            <h2 className="form-title">Log in with</h2>
            <div className="box-Image">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <SocialLogin />

          <p className="separator"><span>or</span></p>

          {/* Pasar el JSON como prop al formulario */}
          <LoginForm fields={formFields} onSubmit={handleLogin} />

          <p className="signup-prompt">
            Don&apos;t have an account? <a href="#" className="signup-link">Sign up</a>
          </p>
        </div>
      </DefaultLayout>
    </>
  );
};