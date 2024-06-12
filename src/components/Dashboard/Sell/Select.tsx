"use client"

import Image from "next/image";
import ReceivingSelect from "../Buy/ReceivingSelect";
import { useTransactionContext } from "@/context/TransactionContext";

const Select = () => {
	const { orderNo, currency, amount, receivingMethod, setValues } = useTransactionContext();
	const handleCurrencySelect = (currency: string) => {
		setValues((prev) => ({ ...prev, currency: currency}))
	}
	const handleReceivingSelect = (receivingMethod: string) => {
		setValues((prev) => ({ ...prev, receivingMethod: receivingMethod}))
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

	switch (receivingMethod) {
		case "Binance Pay" :
			route = 'sell/binance';
			break;
		case "Connet Wallet" :
			route = 'sell/wallet';
			break;
		default:
			route = '#'
			break;
		}

	return (
		<div className="bg-white rounded-3xl px-8 py-6">
			<div className="font-medium text-xl text-primary mb-3">Select</div>
			<div className="flex gap-5 mb-5">
				<button
					onClick={() => handleCurrencySelect("USDT")} 
					className={`flex w-1/3 gap-2 items-center justify-center py-3 border-[1px] border-[#E6E8EC] rounded-full ${currency == "USDT" ? "bg-[#E6E8EC]" : "bg-white"} hover:bg-[#E6E8EC] text-base font-medium text-primary`}
				>
					<Image src="/images/icon/icon-usdt.svg" width={24} height={24} alt="USDT" />
					USDT
				</button>

				<button
					onClick={() => handleCurrencySelect("BTC")} 
					className={`flex w-1/3 gap-2 items-center justify-center py-3 border-[1px] border-[#E6E8EC] rounded-full ${currency == "BTC" ? "bg-[#E6E8EC]" : "bg-white"} hover:bg-[#E6E8EC] text-base font-medium text-primary`}
				>
					<Image src="/images/icon/icon-btc.svg" width={24} height={24} alt="BTC" />
					BTC
				</button>

				<button
					onClick={() => handleCurrencySelect("ETH")} 
					className={`flex w-1/3 gap-2 items-center justify-center py-3 border-[1px] border-[#E6E8EC] rounded-full ${currency == "ETH" ? "bg-[#E6E8EC]" : "bg-white"} hover:bg-[#E6E8EC] text-base font-medium text-primary`}
				>
					<Image src="/images/icon/icon-eth.svg" width={24} height={24} alt="ETH" />
					ETH
				</button>
			</div>
			
			<div className="text-base font-normal text-primary mb-3">Order No:
				<span className="text-secondary pl-3">{orderNo}</span>
			</div>			
      <div className="flex items-center justify-between mt-1 rounded-full border-[1px] border-[#E6E8EC] px-6 py-3">
        <div className="flex items-center gap-2 font-medium">
          <Image src={icon} width={24} height={24} alt="USDT"/>
          {currency}
        </div>
        <input id="amount" type="text" className="placeholder-secondary text-right text-primary text-base outline-none" placeholder="500.00" 
          onChange={(e)=> {
            setValues((prev) => ({...prev, amount: e.target.value}));
          }}
        ></input>
      </div>

			<div className="flex justify-between text-base text-secondary px-3 py-2">
				<div>1 {currency} = 1 CHF</div>
				<div>Best Rate</div>
			</div>

			<div className="flex flex-col gap-4 mt-4">
        <ReceivingSelect path={`${amount ? route : '#'}`} bgcolor="bg-[#F2C94C]" icon_size={36} icon_src="/images/icon/icon-binance.svg" content="Binance Pay" handleClick={() => handleReceivingSelect("Binance Pay")} />
        <ReceivingSelect path={`${amount ? route : '#'}`} bgcolor="bg-primary" icon_size={36} icon_src="/images/icon/icon-wallet.svg" content="Connet Wallet" handleClick={() => handleReceivingSelect("Connet Wallet")} />
      </div>
		</div>
	);
	
}

export default Select;