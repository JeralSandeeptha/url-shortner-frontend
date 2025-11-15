import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const DashboardPage = () => {
  return (
    <div className="min-h-screen antialiased text-neutral-100 bg-black lg:pl-72">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default DashboardPage;
