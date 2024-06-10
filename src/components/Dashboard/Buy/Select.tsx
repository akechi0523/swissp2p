"use client"

import Image from "next/image";
import Link from "next/link";
import { useTransactionContext } from "@/context/TransactionContext";

const Select = () => {
	// const {state, dispatch} = useTransactionContext();

	// const handleCurrencySelect = (currency: string) => {
	// 	dispatch({type: 'SET_VALUES', payload:{ ...state, currency: currency} });
	// }
	
	const { exchangeType, currency, amount, paymentMethod, receivingMethod, setValues } = useTransactionContext();
	const handleCurrencySelect = (currency: string) => {
		setValues((prev) => ({ ...prev, currency: currency}))
	}

	return (
		<div className="bg-white rounded-3xl px-8 py-6">
			<div className="font-medium text-xl text-primary mb-3">Select{currency}</div>
			<div className="flex gap-5 mb-5">
				<button
					onClick={() => handleCurrencySelect("USDT")} 
					className="flex w-1/3 gap-2 items-center justify-center py-3 border-[1px] border-[#E6E8EC] rounded-full focus:bg-[#E6E8EC] text-base font-medium text-primary"
				>
					<Image src="/images/icon/icon-usdt.svg" width={24} height={24} alt="USDT" />
					USDT
				</button>

				<button
					onClick={() => handleCurrencySelect("BTC")} 
					className="flex w-1/3 gap-2 items-center justify-center py-3 border-[1px] border-[#E6E8EC] rounded-full focus:bg-[#E6E8EC] text-base font-medium text-primary"
				>
					<Image src="/images/icon/icon-btc.svg" width={24} height={24} alt="BTC" />
					BTC
				</button>

				<button
					onClick={() => handleCurrencySelect("ETH")} 
					className="flex w-1/3 gap-2 items-center justify-center py-3 border-[1px] border-[#E6E8EC] rounded-full focus:bg-[#E6E8EC] text-base font-medium text-primary"
				>
					<Image src="/images/icon/icon-eth.svg" width={24} height={24} alt="ETH" />
					ETH
				</button>
			</div>
			
			<div className="text-base font-normal text-primary mb-3">Order No:
				<span className="text-secondary pl-3">h4566h</span>
			</div>
			<div className="text-base font-normal text-primary mb-3">You will Pay
				<div className="flex items-center justify-between mt-1 rounded-full border-[1px] border-[#E6E8EC] px-6 py-3">
					<div className="flex items-center gap-2 font-medium">
						<Image src="/images/icon/icon-chf.svg" width={24} height={24} alt="CHF"/>
						CHF
					</div>
					<input className="placeholder-secondary text-right text-primary text-base outline-none" placeholder="500.00"></input>
				</div>
			</div>
			<div className="text-base font-normal text-primary">You will Receive
				<div className="flex items-center justify-between mt-1 rounded-full border-[1px] border-[#E6E8EC] px-6 py-3">
					<div className="flex items-center gap-2 font-medium">
						<Image src="/images/icon/icon-usdt.svg" width={24} height={24} alt="USDT"/>
						USDT
					</div>
					<input className="placeholder-secondary text-right text-primary text-base outline-none" placeholder="500.00"></input>
				</div>
			</div>

			<div className="flex justify-between text-base text-secondary px-3 py-2">
				<div>1 USD = 1 CHF</div>
				<div>Best Rate</div>
			</div>

			<div className="text-base text-primary">Description
				<p className="text-sm text-secondary py-2">Lorem ipsum dolor sit amet consectetur. Erat donec etiam id dictum id ac. Vulputate egestas id lacus mauris lectus hac. Nunc semper malesuada sed pharetra tellus vitae.</p>
			</div>
		</div>
	);
	
}

export default Select;