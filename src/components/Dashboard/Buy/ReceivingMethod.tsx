"use client"

import ReceivingSelect from "./ReceivingSelect";
import { useTransactionContext } from "@/context/TransactionContext";

const ReceivingMethod = () => {
  const {amount, paymentMethod, receivingMethod, setValues} = useTransactionContext();
  let route ;
    switch(paymentMethod) {
      case "Bank Transfer":
        route = 'bank';
        break;
      case "Twint":
        route = 'twint'
        break;
      case "Zen":
        route = 'zen';
        break;
      case "Wise":
        route = 'wise';
        break;
      case "Revolut":
        route = 'revolut';
        break;
      default:
        route = "#";
        break;
    }
  
  return (
    <div className="bg-white dark:bg-primary rounded-3xl px-8 py-6">
      <div className="font-medium text-xl text-primary dark:text-white mb-3">Receiving Method</div>
      <div className="flex flex-col gap-4">
        <ReceivingSelect path={`${amount ? 'buy/binance/' + route : '#'}`} bgcolor="bg-[#F2C94C]" icon="/images/icon/icon-binance.svg" icon_size={36} content="Binance Pay"/>
        <ReceivingSelect path={`${amount ? 'buy/wallet/' + route : '#'}`} bgcolor="bg-[#2F80ED]" icon="/images/icon/icon-wallet.svg" icon_size={36} content="Wallet Deposit"/>
      </div>
    </div>
  );
}

export default ReceivingMethod;