import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface GlobalStateType {
  user: any;
}

interface GlobalContextType {
  state: GlobalStateType;
  setState: Dispatch<SetStateAction<GlobalStateType>>;
}

const initialState: GlobalStateType = {
  user: null,
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, setState] = useState<GlobalStateType>(initialState);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
