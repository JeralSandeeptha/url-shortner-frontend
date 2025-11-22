import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './store/providers/AuthProvider.tsx';
import { AlertProvider } from './store/providers/AlertProvider.tsx';
import { LoadingProvider } from './store/providers/LoadingProvider.tsx';
import { UserProvider } from './store/providers/UserProvider.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <AlertProvider>
    <LoadingProvider>
      <BrowserRouter>
        <AuthProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </AuthProvider>
      </BrowserRouter>
    </LoadingProvider>
  </AlertProvider>
);
