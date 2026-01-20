import { Outlet } from 'react-router-dom';
import AuthHeader from '../components/auth-header';
import './Layout.scss';

export const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <AuthHeader />
      <Outlet />
    </div>
  );
};
