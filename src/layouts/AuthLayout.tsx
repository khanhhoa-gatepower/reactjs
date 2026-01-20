import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
    return <div className="auth-layout">
        <h1 className="text-red-500">Auth Layout</h1>
        <Outlet />
    </div>;
}