import { Outlet } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div className="test dashboard">
      {/* <SideNavigation /> */}
      <Outlet />
    </div>
  );
};

export default DashboardPage;
