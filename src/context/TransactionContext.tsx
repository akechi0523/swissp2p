"use client"

import { createContext, useContext, useState, ReactNode } from "react";

type ContextType = {
  exchangeType: string;
  orderNo: string;
  currency: string;
  amount: string;
  paymentMethod: string;
  receivingMethod: string;
  setValues: React.Dispatch<React.SetStateAction<ContextType>>;
};

const TransactionContext = createContext<ContextType | undefined>(undefined);

export const TransactionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [values, setValues] = useState<ContextType>({
    exchangeType: 'Buy',
    orderNo: 'h4566h',
    currency: 'USDT',
    amount: '',
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

