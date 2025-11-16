import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './store/providers/AuthProvider.tsx';
import { AlertProvider } from './store/providers/AlertProvider.tsx';
import { LoadingProvider } from './store/providers/LoadingProvider.tsx';
import { UserProvider } from './store/providers/UserProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <AlertProvider>
    <LoadingProvider>
      <AuthProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AuthProvider>
    </LoadingProvider>
  </AlertProvider>
);
