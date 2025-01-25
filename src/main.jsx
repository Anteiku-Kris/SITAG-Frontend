import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import './index.css';

import { Dashboard } from './features/dashboard/dashboard.jsx';
import { Login } from './features/auth/Login.jsx';
import { Register } from './features/auth/Register.jsx';
import { AuthLayout } from './features/auth/AuthLayout.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />



        {/* Ruta que agrego para redirigir al usuario al home en caso de que se equivoque */}
        <Route path='*' element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);