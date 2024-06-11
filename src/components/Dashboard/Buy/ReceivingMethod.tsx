"use client"

import ReceivingSelect from "./ReceivingSelect";
import { useTransactionContext } from "@/context/TransactionContext";

const ReceivingMethod = () => {
  const {amount, paymentMethod, receivingMethod, setValues} = useTransactionContext();
  const handleReceivingSelect = (receivingMethod: string) => {
    setValues((prev) => ({ ...prev, receivingMethod: receivingMethod}))
  }

  let route ;
  if (receivingMethod == 'Binance Pay') {
    switch(paymentMethod) {
      case "Bank Transfer":
        route = 'buy/binance/bank';
        break;
      case "Twint":
        route = 'buy/binance/twint'
        break;
      case "Zen":
        route = 'buy/binance/zen';
        break;
      case "Wise":
        route = 'buy/binance/wise';
        break;
      case "Revolut":
        route = 'buy/binance/revolut';
        break;
      default:
        route = "#";
        break;
    }
  } else {
    switch(paymentMethod) {
      case "Bank Transfer":
        route = 'buy/wallet/bank';
        break;
      case "Twint":
        route = 'buy/wallet/twint'
        break;
      case "Zen":
        route = 'buy/wallet/zen';
        break;
      case "Wise":
        route = 'buy/wallet/wise';
        break;
      case "Revolut":
        route = 'buy/wallet/revolut';
        break;
      default:
        route = "#";
        break;
    }
  }
  

  return (
    <div className="bg-white rounded-3xl px-8 py-6">
      <div className="font-medium text-xl text-primary mb-3">Receiving Method</div>
      <div className="flex flex-col gap-4">
        <ReceivingSelect path={`${amount ? route : '#'}`} bgcolor="bg-[#F2C94C]" icon_size={36} icon_src="/images/icon/icon-binance.svg" content="Binance Pay" handleClick={() => handleReceivingSelect("Binance Pay")} />
        <ReceivingSelect path={`${amount ? route : '#'}`} bgcolor="bg-[#2F80ED]" icon_size={36} icon_src="/images/icon/icon-wallet.svg" content="Wallet Deposit" handleClick={() => handleReceivingSelect("Wallet Deposit")} />
      </div>
    </div>
  );
}

export default ReceivingMethod;