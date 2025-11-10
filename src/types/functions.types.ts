import type { Dispatch, SetStateAction } from 'react';
import type { NavigateFunction } from 'react-router-dom';
import type { AlertType } from './context.types';

export type registerUserProps = {
  userDetails: {
    email: string;
    password: string;
  };
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  navigate: NavigateFunction;
  addAlert: (message: string, type?: AlertType | undefined, timeout?: number | undefined) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export type loginUserProps = {
  userDetails: {
    email: string;
    password: string;
  };
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  navigate: NavigateFunction;
  addAlert: (message: string, type?: AlertType | undefined, timeout?: number | undefined) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export type logoutUserProps = {
  navigate: NavigateFunction;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  addAlert: (message: string, type?: AlertType | undefined, timeout?: number | undefined) => void;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export type checkSessionProps = {
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
};
