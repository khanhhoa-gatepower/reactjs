import { Navigate, Outlet } from 'react-router-dom';

import { useAuthStore } from '../stores/auth.store';

export const ProtectedRoute = () => {
  const { accessToken, hasHydrated } = useAuthStore.getState();
  if (!hasHydrated) {
    return null;
  }
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
