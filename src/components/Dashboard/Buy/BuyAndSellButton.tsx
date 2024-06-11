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
		<div className="flex px-8 py-7 rounded-3xl bg-white gap-5 mb-5">
			<Link href="/dashboard/buy" onClick={() => handleClick('Buy')} className={`rounded-full font-bold text-sm px-30 py-5 border-[2px] ${pathname.includes("buy") ? "text-white bg-[#04C063]":"text-[#04C063] bg-white border-[#04C063]"}`}>Buy</Link>
			<Link href="/dashboard/sell" onClick={() => handleClick('Sell')} className={`rounded-full font-bold text-sm px-30 py-5 border-[2px] ${pathname.includes("sell") ? "text-white bg-[#FF3032]":"text-[#FF3032] bg-white border-[#FF3032]"}`}>Sell</Link>
		</div>
	);
}

export default BuyAndSellButton;