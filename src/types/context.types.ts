import type { Dispatch } from 'react';
import type Keycloak from 'keycloak-js';

export type AuthContextType = {
  keycloak: Keycloak | null;
  authenticated: boolean;
  setAuthenticated: Dispatch<React.SetStateAction<boolean>>;
};
