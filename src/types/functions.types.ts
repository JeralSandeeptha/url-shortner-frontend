import type { Dispatch, SetStateAction } from 'react';
import type { NavigateFunction } from 'react-router-dom';
import type { AlertType } from './context.types';
import type { UserDetails } from './interface.types';

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
  setLocalStorageItem: (itemName: string, itemData: unknown) => void;
  setUser: Dispatch<SetStateAction<string>>;
};

export type logoutUserProps = {
  navigate: NavigateFunction;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  addAlert: (message: string, type?: AlertType | undefined, timeout?: number | undefined) => void;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
  clearLocalStorageItem: (itemName: string) => void;
};

export type checkSessionProps = {
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export type getSingleUserProps = {
  userId: string;
  setUserDetails: Dispatch<SetStateAction<UserDetails | undefined>>; 
};

export type updateUserPreferencesProps = {
  userId: string;
  user: UserDetails | undefined;
  addAlert: (message: string, type?: AlertType | undefined, timeout?: number | undefined) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export type updateSecurityProps = {
  userId: string;
  user: UserDetails | undefined;
  addAlert: (message: string, type?: AlertType | undefined, timeout?: number | undefined) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export type updateUserProfileProps = {
  userId: string;
  user: UserDetails | undefined;
  addAlert: (message: string, type?: AlertType | undefined, timeout?: number | undefined) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export type deleteUserProps = {
  userId: string;
  clearLocalStorageItem: (itemName: string) => void;
  addAlert: (message: string, type?: AlertType | undefined, timeout?: number) => void;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
  navigate: NavigateFunction;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
