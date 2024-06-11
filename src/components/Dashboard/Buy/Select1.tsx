"use client"

import Image from "next/image";
import { useTransactionContext } from "@/context/TransactionContext";

let icon;

const Select = () => {
	const { orderNo, currency, amount, setValues } = useTransactionContext();
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
		<div className="bg-white rounded-3xl px-8 py-6">
			<div className="font-medium text-xl text-primary mb-3">Select</div>
			<div className="flex gap-5 mb-5">
				<div 
					className={`flex w-1/3 gap-2 items-center justify-center py-3 border-[1px] border-[#E6E8EC] rounded-full ${currency == "USDT" ? "bg-[#E6E8EC]" : "bg-white"} text-base font-medium text-primary`}
				>
					<Image src="/images/icon/icon-usdt.svg" width={24} height={24} alt="USDT" />
					USDT
				</div>

				<div
					className={`flex w-1/3 gap-2 items-center justify-center py-3 border-[1px] border-[#E6E8EC] rounded-full ${currency == "BTC" ? "bg-[#E6E8EC]" : "bg-white"} text-base font-medium text-primary`}
				>
					<Image src="/images/icon/icon-btc.svg" width={24} height={24} alt="BTC" />
					BTC
				</div>

				<div
					className={`flex w-1/3 gap-2 items-center justify-center py-3 border-[1px] border-[#E6E8EC] rounded-full ${currency == "ETH" ? "bg-[#E6E8EC]" : "bg-white"} text-base font-medium text-primary`}
				>
					<Image src="/images/icon/icon-eth.svg" width={24} height={24} alt="ETH" />
					ETH
				</div>
			</div>
			
			<div className="text-base font-normal text-primary mb-3">Order No:
				<span className="text-secondary pl-3">{orderNo}</span>
			</div>
			<div className="text-base font-normal text-primary mb-3">You will Pay
				<div className="flex items-center justify-between mt-1 rounded-full border-[1px] border-[#E6E8EC] px-6 py-3">
					<div className="flex items-center gap-2 font-medium">
						<Image src="/images/icon/icon-chf.svg" width={24} height={24} alt="CHF"/>
						CHF
					</div>
					{amount}
				</div>
			</div>
			<div className="text-base font-normal text-primary">You will Receive
				<div className="flex items-center justify-between mt-1 rounded-full border-[1px] border-[#E6E8EC] px-6 py-3">
					<div className="flex items-center gap-2 font-medium">
						<Image src={icon} width={24} height={24} alt="USDT"/>
						{currency}
					</div>
					<input className="placeholder-secondary text-right text-primary text-base outline-none" value={amount} readOnly />
				</div>
			</div>

			<div className="flex justify-between text-base text-secondary px-3 py-2">
				<div>1 {currency} = 1 CHF</div>
				<div>Best Rate</div>
			</div>
		</div>
	);
	
}

export default Select;