import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home-page/HomePage';
import LoginPage from '../pages/login-page/LoginPage';
import RegisterPage from '../pages/register-page/RegisterPage';
import ForgotPasswordPage from '../pages/forgot-password-page/ForgotPasswordPage';
import NotFoundPage from '../pages/not-found-page/NotFoundPage';
import TermsAndConditionsPage from '../pages/terms-and-conditions-page/TermsAndConditionsPage';
import PricingPage from '../pages/pricing-page/PricingPage';

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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
