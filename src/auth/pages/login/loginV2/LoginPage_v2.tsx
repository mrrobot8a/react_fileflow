import { useState } from "react";
import './loginPage_vs2.css';

export const LoginScreenV2 = () => {
  const [moveRight, setMoveRight] = useState(false);

  const handleMove = () => {
    setMoveRight(!moveRight); // Alterna entre izquierda (login) y derecha (registro)
  };

  const containerClass =
    "container__screen " + (moveRight ? "right-panel-active" : "");

  return (
    <div className="container">
      <div className={containerClass}>
        <LoginForm />
        <RegistrationForm />
        <div className={`box ${!moveRight ? 'move-right' : 'move-left'}`}>
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              className="ghost"
              id="signIn"
              onClick={() => { }}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button
              className="ghost "
              id="signUp"
              onClick={() => { }}
            >
              Sign Up
            </button>
          </div>

        </div>


      </div>
      <button onClick={handleMove}>
        {moveRight ? 'Mostrar Login' : 'Mostrar Registro'}
      </button>
    </div>
  );
};

const LoginForm = () => {
  return (
    <form className="form form-container">
      <h2>Iniciar Sesión</h2>
      <input type="email" placeholder="Correo Electrónico" />
      <input type="password" placeholder="Contraseña" />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

const RegistrationForm = () => {
  return (
    <form className="form_singup form-container">
      <h2>Registro</h2>
      <input type="text" placeholder="Nombre Completo" />
      <input type="email" placeholder="Correo Electrónico" />
      <input type="password" placeholder="Contraseña" />
      <button type="submit">Registrarse</button>
    </form>
  );
};
