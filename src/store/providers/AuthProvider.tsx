import React, { useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';
import { sessionCheck } from '../../api/user-services/session-check/sessionCheck';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const verifySession = () => {
    sessionCheck({
      setAuthenticated: setAuthenticated,
    });
  };

  useEffect(() => {
    verifySession();
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
