import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const DashboardPage = () => {
  return (
    <div className="lg:pl-72">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default DashboardPage;
