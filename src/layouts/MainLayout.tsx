import { Outlet } from 'react-router-dom';
import MainHeader from '../components/main-header';
import NavBar from '../components/nav-bar';

export const MainLayout = () => {
  return (
    <div className="font-inter">
      <MainHeader />
      <div className="flex">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};
