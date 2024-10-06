import SocialLogin from "../../../componentsGlobal/SocialLogin";
import InputField from "../../../componentsGlobal/inputs/InputField";
import './loginPage.css';
import DefaultLayout from "../../components/layout/defaultLayout";
import logo from '../../../assets/LogoAlcaldia.png';
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";
import { CustomAlertV2 } from "../../../componentsGlobal/alerts/alerts";
import { loginUserApi } from "../../service/authService";
import Loading from "../../../componentsGlobal/loading/Loading";

export const LoginScreen = () => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [isSend, setisSend] = useState(false);

  const auth = useAuth();

  const goto = useNavigate();

  // Mostrar un indicador de carga mientras el estado de autenticación está siendo verificado
  if (auth.loading) {
    return <Loading />; // Mostrar el componente de carga
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setisSend(true); // Inicia el estado de envío

    try {

      const data = await loginUserApi(email, password); // Llamar a la función de registro de usuario
      console.log(data);

      if (data.error) {
        CustomAlertV2({
          toast: true,
          position: "top",
          icon: "error",
          title: "¡Error!",
          text: data.error,
          showConfirmButton: false,
          timer: 2500,
          background: "#f8f9fa",
          color: "#333",
          iconColor: "#dc3545",
        });

        return;

      }

      if (data) {

        CustomAlertV2({
          toast: true,
          position: "top",
          icon: "success",
          title: "¡Éxito!",
          text: data.message,
          showConfirmButton: false,
          timer: 2500,
          background: "#f8f9fa",
          color: "#333",
          iconColor: "#28a745",
        });

        auth.saveUser(data); // Guardar el usuario en el contexto de autenticación
        goto('/dashboard'); // Redirigir a la página de inicio del usuario
        return;

      }



    } catch (error) {
      console.error('Error de conexión:', error);
      CustomAlertV2({
        toast: true,
        position: "top",
        icon: "error",
        title: "¡Error!",
        text: "Ocurrio un error.",
        showConfirmButton: false,
        timer: 2500,
        background: "#f8f9fa",
        color: "#333",
        iconColor: "#dc3545",
      });

    } finally {
      setisSend(false); // Asegúrate de restablecer el estado de envío al final
    }
  };





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
          <SocialLogin />

          <p className="separator"><span>or</span></p>

          <form onSubmit={handleSubmit} className="login-form">
            <InputField type="email" placeholder="Email address" icon="mail" onChange={(e) => setEmail(e.target.value)} value={email} />
            <InputField type="password" placeholder="Password" icon="lock" onChange={(e) => setPassword(e.target.value)} value={password} />

            <a href="#" className="forgot-password-link">Forgot password?</a>
            <button disabled={isSend} type="submit" className="login-button">Log In</button>
          </form>

          <p className="signup-prompt">
            Don&apos;t have an account? <Link to="/signup" className="signup-link">Sign up</Link>
          </p>
        </div>
      </DefaultLayout>
    </>
  )
}

