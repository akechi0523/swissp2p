"use client"

import { createContext, useContext, useState, ReactNode } from "react";

type ContextType = {
  exchangeType: string;
  currency: string;
  amount: number;
  paymentMethod: string;
  receivingMethod: string;
  setValues: React.Dispatch<React.SetStateAction<ContextType>>;
};

const TransactionContext = createContext<ContextType | undefined>(undefined);

export const TransactionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [values, setValues] = useState<ContextType>({
    exchangeType: 'Buy',
    currency: '',
    amount: 0,
    paymentMethod: '',
    receivingMethod: '',
    setValues: () => {}
  });

  return (
    <TransactionContext.Provider value={{...values, setValues}}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionContext = () => {
  const context = useContext(TransactionContext);
  if (context === undefined) {
    throw new Error('useTransactionContext must be used within a TransactionProvider');
  }
  return context;
};

// "use client"

// import React, { createContext, useContext, useReducer, ReactNode } from "react";

// type ContextType = {
//   exchangeType: string;
//   currency: string;
//   amount: number;
//   paymentMethod: string;
//   receivingMethod: string;
// };

// type Action = { type: string; payload: any };

// const initialState: ContextType = {
//   exchangeType: 'Buy',
//   currency: '',
//   amount: 0,
//   paymentMethod: '',
//   receivingMethod: '',
// };

// const reducer = (state: ContextType, action: Action): ContextType => {
//   switch (action.type) {
//     case 'SET_VALUES':
//       return { ...state, ...action.payload };
//     default:
//       return state;
//   }
// };

// const TransactionContext = createContext<{ state: ContextType; dispatch: React.Dispatch<Action> } | undefined>(undefined);

// export const TransactionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <TransactionContext.Provider value={{ state, dispatch }}>
//       {children}
//     </TransactionContext.Provider>
//   );
// };

// export const useTransactionContext = () => {
//   const context = useContext(TransactionContext);
//   if (context === undefined) {
//     throw new Error('useTransactionContext must be used within a TransactionProvider');
//   }
//   return context;
// };