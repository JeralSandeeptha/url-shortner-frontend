import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './store/providers/AuthProvider.tsx';
import { AlertProvider } from './store/providers/AlertProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <AlertProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </AlertProvider>
);
