import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LoginScreen } from '../auth/pages/login/loginPage';
import { SingUpScreen } from '../auth/pages/singup/singup';
import ProtectedRoute from './componets/ProtectedRoute';
import { DashboardScreen } from '../dashboard/pages/dashboard';
import { LoginScreenV2 } from '../auth/pages/login/loginV2/LoginPage_v2';
import BarberShop from '../auth/pages/landing/landing';
import AddEmployes from '../auth/pages/admin/addemployes';
import Schedule from '../auth/pages/admin/schedule';

// Definición de rutas
const router = createBrowserRouter([  
    {
        path: '/cronograma',   
        element: <Schedule />,
    },
    {
        path: '/add',   
        element: <AddEmployes />,
    },
    {
        path: '/index',   
        element: <BarberShop />,
    },
    {
        path: '/',   
        element: <LoginScreenV2 />,
    },
    {
        path: '/signup',  
        element: <SingUpScreen />,
    },
    {
        path: '/',
        element: <ProtectedRoute />,
        children: [{
            path: 'dashboard',
            element: <DashboardScreen />,
            
        }]
    }
    // Puedes agregar más rutas aquí según sea necesario

]);

export default router;
