"use client"

import Image from "next/image";
import ReceivingSelect from "../Buy/ReceivingSelect";
import { useTransactionContext } from "@/context/TransactionContext";
import { useEffect } from "react";

const Select = () => {
	const { orderNo, currency, amount, receivingMethod, setValues } = useTransactionContext();
	const handleCurrencySelect = (currency: string) => {
		setValues((prev) => ({ ...prev, currency: currency}))
	}
	const handleReceivingSelect = (receivingMethod: string) => {
		setValues((prev) => ({ ...prev, receivingMethod: receivingMethod}));
	}

	let icon;
	let route;

	switch (currency) {
		case "USDT": 
			icon = '/images/icon/icon-usdt.svg';
			break;
		case "BTC": 
			icon = '/images/icon/icon-btc.svg';
			break;
		case "ETH": 
			icon = '/images/icon/icon-eth.svg';
			break;
		default:
			icon = '/images/icon/icon-usdt.svg';
			break;
	}

	return (
		<div className="bg-white dark:bg-primary rounded-3xl md:px-8 px-4 md:py-6 py-4">
			<div className="font-medium text-xl text-primary dark:text-white mb-3">Select</div>
			<div className="flex md:gap-5 gap-2 mb-5">
				<button
					onClick={() => handleCurrencySelect("USDT")} 
					className={`flex w-1/3 gap-2 items-center justify-center py-3 border-[1px] border-third dark:border-secondary rounded-full ${currency == "USDT" ? "bg-third dark:bg-secondary" : ""} hover:bg-third dark:hover:bg-secondary text-base font-medium text-primary dark:text-white`}
				>
					<Image src="/images/icon/icon-usdt.svg" width={24} height={24} alt="USDT" />
					USDT
				</button>

				<button
					onClick={() => handleCurrencySelect("BTC")} 
					className={`flex w-1/3 gap-2 items-center justify-center py-3 border-[1px] border-third dark:border-secondary rounded-full ${currency == "BTC" ? "bg-third dark:bg-secondary" : ""} hover:bg-third dark:hover:bg-secondary text-base font-medium text-primary dark:text-white`}
				>
					<Image src="/images/icon/icon-btc.svg" width={24} height={24} alt="BTC" />
					BTC
				</button>

				<button
					onClick={() => handleCurrencySelect("ETH")} 
					className={`flex w-1/3 gap-2 items-center justify-center py-3 border-[1px] border-third dark:border-secondary rounded-full ${currency == "ETH" ? "bg-third dark:bg-secondary" : ""} hover:bg-third dark:hover:bg-secondary text-base font-medium text-primary dark:text-white`}
				>
					<Image src="/images/icon/icon-eth.svg" width={24} height={24} alt="ETH" />
					ETH
				</button>
			</div>
			
			<div className="text-base font-normal text-primary dark:text-white mb-3">Order No:
				<span className="text-secondary pl-3">{orderNo}</span>
			</div>			
      <div className="flex items-center justify-between mt-1 rounded-full border-[1px] border-third dark:border-secondary px-6 md:py-3 py-2">
        <div className="flex items-center gap-2 font-medium text-primary dark:text-white">
          <Image src={icon} width={24} height={24} alt="USDT"/>
          {currency}
        </div>
        <input id="amount" type="text" className="w-30 dark:bg-primary placeholder-secondary text-right text-primary dark:text-white text-base outline-none" placeholder="500.00" value={amount}
          onChange={(e)=> {
            setValues((prev) => ({...prev, amount: e.target.value}));
						console.log(amount);
          }}
        ></input>
      </div>

			<div className="flex justify-between text-base text-secondary px-3 py-2">
				<div>1 {currency} = 1 CHF</div>
				<div>Best Rate</div>
			</div>

			<div className="flex flex-col gap-4 mt-4">
        <ReceivingSelect path={`${amount ? 'sell/binance' : '#'}`} bgcolor="bg-[#F2C94C]" icon_size={36} icon="/images/icon/icon-binance.svg" content="Binance Pay" />
        <ReceivingSelect path={`${amount ? 'sell/wallet' : '#'}`} bgcolor="bg-primary dark:bg-secondary" icon_size={36} icon="/images/icon/icon-wallet.svg" content="Connet Wallet" />
      </div>
		</div>
	);
	
}

export default Select;