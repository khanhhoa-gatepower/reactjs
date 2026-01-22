import { Outlet } from 'react-router-dom';
import MainHeader from '../components/main-header';

export const MainLayout = () => {
  return (
    <div className="font-inter">
      <MainHeader />
      <Outlet />
    </div>
  );
};
