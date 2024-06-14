"use client"

import Image from "next/image";
import { useTransactionContext } from "@/context/TransactionContext";
import { usePathname } from "next/navigation";


const Select = () => {
	const { orderNo, currency, amount, receivingMethod, setValues } = useTransactionContext();
	const path = usePathname();

	let icon;
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
		<div className="bg-white dark:bg-primary rounded-3xl px-8 py-6">
			<div className="font-medium text-xl text-primary dark:text-white mb-3">Select</div>
			<div className="flex gap-5 mb-5">
				<div 
					className={`flex w-1/3 gap-2 items-center justify-center py-3  border-[1px] border-third dark:border-secondary rounded-full ${currency == "USDT" ? "bg-third dark:bg-secondary" : ""}  text-base font-medium text-primary dark:text-white`}
				>
					<Image src="/images/icon/icon-usdt.svg" width={24} height={24} alt="USDT" />
					USDT
				</div>

				<div
					className={`flex w-1/3 gap-2 items-center justify-center py-3  border-[1px] border-third dark:border-secondary rounded-full ${currency == "BTC" ? "bg-third dark:bg-secondary" : ""}  text-base font-medium text-primary dark:text-white`}
				>
					<Image src="/images/icon/icon-btc.svg" width={24} height={24} alt="BTC" />
					BTC
				</div>

				<div
					className={`flex w-1/3 gap-2 items-center justify-center py-3  border-[1px] border-third dark:border-secondary rounded-full ${currency == "ETH" ? "bg-third dark:bg-secondary" : ""}  text-base font-medium text-primary dark:text-white`}
				>
					<Image src="/images/icon/icon-eth.svg" width={24} height={24} alt="ETH" />
					ETH
				</div>
			</div>
			
			<div className="text-base font-normal text-primary dark:text-white mb-3">Order No:
				<span className="text-secondary pl-3">{orderNo}</span>
			</div>
			<div className="text-base font-normal text-primary dark:text-white mb-3">Deposit Amount
				<div className="flex items-center justify-between mt-1 rounded-full  border-[1px] border-third dark:border-secondary px-6 py-3">
					<div className="flex items-center gap-2 font-medium">
						<Image src={icon} width={24} height={24} alt="USDT"/>
						{currency}
					</div>
					{amount}
				</div>
			</div>
			<div className="text-base font-normal text-primary dark:text-white">Receiving Amount
				<div className="flex items-center justify-between mt-1 rounded-full  border-[1px] border-third dark:border-secondary px-6 py-3">
					<div className="flex items-center gap-2 font-medium">
						<Image src="/images/icon/icon-chf.svg" width={24} height={24} alt="CHF"/>
						CHF
					</div>
					{amount}
				</div>
			</div>

			<div className="flex justify-between text-base text-secondary px-3 py-2">
				<div>1 {currency} = 1 CHF</div>
				<div>Best Rate</div>
			</div>

			{path.includes('binance') ? <div className='flex items-center justify-center gap-3 bg-third dark:bg-secondary text-base text-primary dark:text-white font-bold rounded-2xl border-none py-3 mt-4'>
				<svg width="36" height="36" viewBox="0 0 25 24" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg">
					<g id="simple-icons:binance" clip-path="url(#clip0_1_32213)">
						<path id="Vector" d="M17.3193 13.9197L20.0373 16.6357L12.6843 23.9887L5.33131 16.6367L8.04831 13.9197L12.6843 18.5797L17.3193 13.9197ZM21.9563 9.28372L24.6953 11.9997L21.9803 14.7157L19.2633 11.9997L21.9563 9.28372ZM12.6843 9.28372L15.4003 11.9757L12.6833 14.6927L9.96731 11.9997L12.6843 9.28372ZM3.41131 9.28372L6.10531 11.9997L3.41331 14.6917L0.695312 11.9997L3.41131 9.28372ZM12.6853 0.0117188L20.0353 7.33972L17.3183 10.0547L12.6853 5.41972L8.04931 10.0797L5.33231 7.36372L12.6853 0.0117188Z" fill=""/>
					</g>
					<defs>
						<clipPath id="clip0_1_32213">
							<rect width="24" height="24" fill="white" transform="translate(0.695312)"/>
						</clipPath>
					</defs>
				</svg>
				Binance Pay
			</div> : <div className='flex items-center justify-center gap-3 bg-third dark:bg-secondary text-base text-primary dark:text-white font-bold rounded-2xl border-none py-3 mt-4'>
				<svg width="36" height="36" viewBox="0 0 25 25" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg">
					<path d="M18.8074 7.17957H18.4174C18.0874 5.26957 16.5274 3.80957 14.6574 3.80957H4.82735C3.56735 3.80957 2.53735 4.90957 2.53735 6.24957C2.53735 6.33957 2.55735 6.41957 2.56735 6.50957C2.55735 6.54957 2.53735 6.58957 2.53735 6.63957V17.9396C2.53735 19.9996 4.21735 21.6796 6.26735 21.6796H18.8074C20.8574 21.6796 22.5374 19.9996 22.5374 17.9396V10.9096C22.5374 8.84957 20.8574 7.17957 18.8074 7.17957ZM18.2474 15.6896C17.5574 15.6896 16.9874 15.1296 16.9874 14.4296C16.9874 13.7296 17.5574 13.1596 18.2474 13.1596C18.9474 13.1596 19.5174 13.7296 19.5174 14.4296C19.5174 15.1296 18.9474 15.6896 18.2474 15.6896ZM4.82735 5.30957H14.6574C15.7074 5.30957 16.5874 6.09957 16.8774 7.17957H4.82735C4.38735 7.17957 4.03735 6.75957 4.03735 6.24957C4.03735 5.72957 4.38735 5.30957 4.82735 5.30957Z" fill=""/>
				</svg>
				Wallet Address
			</div>}
		</div>
	);
	
}

export default Select;