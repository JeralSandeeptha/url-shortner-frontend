import React, { useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';
import { sessionCheck } from '../../api/user-services/session-check/sessionCheck';
import { useAlert } from '../../hooks/useAlert';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useLoading } from '../../hooks/useLoading';
import { useNavigate } from 'react-router-dom';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const { addAlert } = useAlert();
  const { setIsLoading } = useLoading();
  const { clearLocalStorageItem } = useLocalStorage();
  const navigate = useNavigate();

  const verifySession = () => {
    sessionCheck({
      setAuthenticated: setAuthenticated,
      addAlert: addAlert,
      clearLocalStorageItem: clearLocalStorageItem,
      navigate: navigate,
      setIsLoading: setIsLoading,
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
