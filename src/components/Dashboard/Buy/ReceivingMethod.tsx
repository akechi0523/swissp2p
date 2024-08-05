"use client"

import ReceivingSelect from "./ReceivingSelect";
import { useTransactionContext } from "@/context/TransactionContext";

const ReceivingMethod = () => {
  
  return (
    <div className="bg-white dark:bg-primary rounded-3xl md:px-8 px-4 md:py-6 py-4">
      <div className="font-medium text-xl text-primary dark:text-white mb-3">Receiving Method</div>
      <div className="flex flex-col gap-4">
        <ReceivingSelect path={``} bgcolor="bg-[#F2C94C]" icon="/images/icon/icon-binance.svg" icon_size={36} content="Binance Pay"/>
        <ReceivingSelect path={``} bgcolor="bg-[#2F80ED]" icon="/images/icon/icon-wallet.svg" icon_size={36} content="Wallet Deposit"/>
      </div>
    </div>
  );
}

export default ReceivingMethod;