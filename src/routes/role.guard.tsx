import { Navigate, Outlet } from "react-router-dom";
// import { useAuthStore } from "@/features/auth/auth.store";

type Props = {
  allow: Array<"admin" | "user">;
};

export const RoleGuard = ({ allow }: Props) => {
//   const role = useAuthStore((s) => s.user?.role);
    const role = "user"
  if (!role) {
    return <Navigate to="/login" replace />;
  }

  if (!allow.includes(role)) {
    return <Navigate to="/403" replace />;
  }

  return <Outlet />;
};
