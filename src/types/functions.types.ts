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
};
