import { createContext } from 'react';
import type { UserContextProps } from '../../types/context.types';

export const UserContext = createContext<UserContextProps | undefined>(undefined);
