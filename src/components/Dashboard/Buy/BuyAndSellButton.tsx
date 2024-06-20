"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransactionContext } from "@/context/TransactionContext";


const BuyAndSellButton = () => {
	const pathname = usePathname();
	const {exchangeType, currency, amount, orderNo, paymentMethod, receivingMethod, setValues} = useTransactionContext();

	const handleClick = (exchangeType: string) => {
		setValues((prev) => ({...prev, exchangeType: exchangeType, amount:'', currency:'USDT', orderNo:'', paymentMethod:'', receivingMethod:''}));
	}


	return (
		<div className="flex md:px-8 px-4 md:py-7 py-4 rounded-xl md:rounded-3xl bg-white dark:bg-primary gap-5 mb-5">
			<Link href="/dashboard/buy" onClick={() => {handleClick('Buy'); console.log(receivingMethod)}} className={`flex items-center justify-center w-1/2 md:w-full rounded-full font-bold text-base md:px-30 md:py-4 py-3 border-[2px] ${pathname.includes("buy") ? "text-white bg-[#04C063] border-[#04C063]":"text-[#04C063] border-[#04C063]"}`}>Buy</Link>
			<Link href="/dashboard/sell" onClick={() => handleClick('Sell')} className={`flex items-center justify-center w-1/2 md:w-full rounded-full font-bold text-base md:px-30 md:py-4 py-3 border-[2px] ${pathname.includes("sell") ? "text-white bg-[#FF3032] border-[#FF3032]":"text-[#FF3032] border-[#FF3032]"}`}>Sell</Link>
		</div>
	);
}

export default BuyAndSellButton;