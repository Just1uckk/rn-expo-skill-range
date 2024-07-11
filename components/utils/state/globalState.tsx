import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { GlobalContextInterface, GlobalStateInterface } from './interfaces';

const initialState: GlobalStateInterface = {
  user: null,
};

export const GlobalContext = createContext<GlobalContextInterface | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, setState] = useState<GlobalStateInterface>(initialState);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
