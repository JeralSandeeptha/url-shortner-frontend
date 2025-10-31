import React, { useEffect, useState } from 'react';
import keycloak from '../../config/keycloak';
import AuthContext from '../contexts/AuthContext';
import logger from '../../utils/logger';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (!keycloak.authenticated && !keycloak.didInitialize) {
      keycloak
        .init({ onLoad: 'check-sso' })
        .then((auth) => {
          setAuthenticated(auth);
          keycloak.didInitialize = true; // ✅ fully typed now
        })
        .catch((err) => logger.error('Keycloak init failed:', err));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ keycloak, authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
