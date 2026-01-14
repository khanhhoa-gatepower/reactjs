import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/auth.store";

export const PublicRoute = () => {
  const {accessToken, hasHydrated} = useAuthStore.getState();
  if(!hasHydrated){
    return null;
  }
  if (accessToken) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
