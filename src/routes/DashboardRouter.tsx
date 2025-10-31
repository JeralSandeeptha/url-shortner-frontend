import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/dashboard-page/DashboardPage';
import OverviewPage from '../pages/overview-page/OverviewPage';
import LinksPage from '../pages/links-page/LinksPage';
import MicrositePage from '../pages/microsite-page/MicrositePage';
import SettingsPage from '../pages/settings-page/SettingsPage';
import CustomLinkPage from '../pages/custom-link-page/CustomLinkPage';
import CampaignsPage from '../pages/campaigns-page/CampaignsPage';
import NotFoundPage from '../pages/not-found-page/NotFoundPage';

const DashboardRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          <Route path="" element={<OverviewPage />} />
          <Route path="dashboard/links" element={<LinksPage />} />
          <Route path="dashboard/microsite" element={<MicrositePage />} />
          <Route path="dashboard/campaigns" element={<CampaignsPage />} />
          <Route path="dashboard/custom-link" element={<CustomLinkPage />} />
          <Route path="dashboard/settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default DashboardRouter;
