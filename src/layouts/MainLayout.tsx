import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Main Layout</h1>
      <Outlet />
    </div>
  );
};
