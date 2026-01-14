import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout } from '../layouts/AuthLayout';
import { MainLayout } from '../layouts/MainLayout';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import AdminPage from '../pages/admin/AdminPage';
import RegisterPage from '../pages/register';

import { ProtectedRoute } from './protected.route';
import { PublicRoute } from './public.route';
import { RoleGuard } from './role.guard';
export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: '/login', element: <LoginPage /> },
          { path: '/register', element: <RegisterPage /> },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [{ path: '/', element: <HomePage /> }],
      },
      {
        element: <RoleGuard allow={['admin']} />,
        children: [
          // Admin only routes go here
          { path: '/admin', element: <AdminPage /> },
        ],
      },
    ],
  },
]);
