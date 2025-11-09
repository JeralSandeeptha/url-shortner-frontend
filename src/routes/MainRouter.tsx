import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home-page/HomePage';
import LoginPage from '../pages/login-page/LoginPage';
import RegisterPage from '../pages/register-page/RegisterPage';
import ForgotPasswordPage from '../pages/forgot-password-page/ForgotPasswordPage';
import NotFoundPage from '../pages/not-found-page/NotFoundPage';
import TermsAndConditionsPage from '../pages/terms-and-conditions-page/TermsAndConditionsPage';
import PricingPage from '../pages/pricing-page/PricingPage';
import DashboardPage from '../pages/dashboard-page/DashboardPage';
import OverviewPage from '../pages/overview-page/OverviewPage';
import LinksPage from '../pages/links-page/LinksPage';
import MicrositePage from '../pages/microsite-page/MicrositePage';
import CampaignsPage from '../pages/campaigns-page/CampaignsPage';
import CustomLinkPage from '../pages/custom-link-page/CustomLinkPage';
import SettingsPage from '../pages/settings-page/SettingsPage';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="" element={<OverviewPage />} />
          <Route path="links" element={<LinksPage />} />
          <Route path="microsite" element={<MicrositePage />} />
          <Route path="campaigns" element={<CampaignsPage />} />
          <Route path="custom-link" element={<CustomLinkPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
