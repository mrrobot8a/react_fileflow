// components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../../auth/helper/auth';
import { useState } from 'react';
import { useAuth } from '../../auth/provider/AuthProvider';

export default function ProtectedRoute() {
     // acceder al estado de autenticación contexto para obtener el objeto de autenticación
     // y verificar si el usuario está autenticado o no
    const isAuthe = useAuth();

    return isAuthe.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
