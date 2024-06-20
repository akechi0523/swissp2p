"use client"

import Image from "next/image";
import { useTransactionContext } from "@/context/TransactionContext";

let icon;

const Select = () => {
	const { orderNo, currency, amount, setValues } = useTransactionContext();
	const handleCurrencySelect = (currency: string) => {
		setValues((prev) => ({ ...prev, currency: currency}))
	}

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
			<div className="text-base font-normal text-primary dark:text-white mb-3">You will Pay
				<div className="flex items-center justify-between mt-1 rounded-full border-[1px] border-third dark:border-secondary px-6 md:py-3 py-2">
					<div className="flex items-center gap-2 font-medium">
						<Image src="/images/icon/icon-chf.svg" width={24} height={24} alt="CHF"/>
						CHF
					</div>
					<input id="amount" type="text" className="w-30 dark:bg-primary placeholder-secondary text-right text-primary dark:text-white text-base outline-none" placeholder="500.00" value={amount}
						onChange={(e)=> {
							setValues((prev) => ({...prev, amount: e.target.value}));
						}}
					></input>
				</div>
			</div>
			<div className="text-base font-normal text-primary dark:text-white">You will Receive
				<div className="flex items-center justify-between mt-1 rounded-full border-[1px] border-third dark:border-secondary px-6 md:py-3 py-2">
					<div className="flex items-center gap-2 font-medium">
						<Image src={icon} width={24} height={24} alt="USDT"/>
						{currency}
					</div>
					<input className="w-30 dark:bg-primary placeholder-secondary text-right text-primary dark:text-white text-base outline-none" placeholder="500.00" value={amount} readOnly></input>
				</div>
			</div>

			<div className="flex justify-between text-base text-secondary px-3 py-2">
				<div>1 {currency} = 1 CHF</div>
				<div>Best Rate</div>
			</div>

			<div className="text-base text-primary dark:text-white">Description
				<p className="text-sm text-secondary py-2">Lorem ipsum dolor sit amet consectetur. Erat donec etiam id dictum id ac. Vulputate egestas id lacus mauris lectus hac. Nunc semper malesuada sed pharetra tellus vitae.</p>
			</div>
		</div>
	);
	
}

export default Select;