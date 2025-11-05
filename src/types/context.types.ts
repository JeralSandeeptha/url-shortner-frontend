import type { Dispatch } from 'react';
import type Keycloak from 'keycloak-js';

export type AuthContextType = {
  keycloak: Keycloak | null;
  authenticated: boolean;
  setAuthenticated: Dispatch<React.SetStateAction<boolean>>;
};

export type AlertType = "success" | "error" | "info" | "warning";

export interface Alert {
  id: string;
  message: string;
  type: AlertType;
}

export type AlertContextProps = {
  alerts: Alert[];
  addAlert: (message: string, type?: AlertType, timeout?: number) => void;
  removeAlert: (id: string) => void;
}
