import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import router from './router/routes.tsx';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './auth/provider/AuthProvider.tsx';
import 'normalize.css';



createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  // </StrictMode>,
)
