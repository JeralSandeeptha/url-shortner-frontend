import { Route, Routes } from 'react-router-dom';
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
import ProtectedRoute from '../components/protected-route/ProtectedRoute';
import PublicRoute from '../components/public-route/PublicRoute';
import LinkRedirectorPage from '../pages/redirection-page/LinkRedirectorPage';
import LinkPage from '../pages/link-page/LinkPage';
import CreateLinkPage from '../pages/create-link-page/CreateLinkPage';
import ForbiddenPage from '../pages/forbidden-page/ForbiddenPage';

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/:shortId" element={<LinkRedirectorPage />} />
        <Route path="/url/forbidden" element={<ForbiddenPage />} />
        <Route
          path="/"
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PublicRoute>
              <ForgotPasswordPage />
            </PublicRoute>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <PublicRoute>
              <TermsAndConditionsPage />
            </PublicRoute>
          }
        />
        <Route
          path="/pricing"
          element={
            <PublicRoute>
              <PricingPage />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<OverviewPage />} />
          <Route path="links" element={<LinksPage />} />
          <Route path="links/create-link" element={<CreateLinkPage />} />
          <Route path="links/:linkId" element={<LinkPage />} />
          <Route path="microsite" element={<MicrositePage />} />
          <Route path="campaigns" element={<CampaignsPage />} />
          <Route path="custom-link" element={<CustomLinkPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default MainRouter;
