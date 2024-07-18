'use client'

import Link from "next/link";
import Image from "next/image";
import LPHeader from "./LPHeader";
import { useState } from "react";

const LP = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-full md:h-screen bg-white px-3 md:px-10 lg:px-50">
      <LPHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 mb-10 md:mb-0 md:mt-0 gap-15">
        <div className="flex flex-col gap-6">
          <div className="text-primary text-6xl font-bold">SwissP2P Bridge</div>
          <div className="text-secondary text-base">Buy & Sell Crypto in Minutes</div>
          <Link href='/' className="md:w-40 px-6 py-3 text-white text-center bg-primary rounded-full text-nowrap">Get started</Link>
        </div>
        <div className="flex items-center justify-center md:w-150 md:h-150 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#88f7bf] from-5% to-white to-70% filter">
          <Image src={'/images/icon/hero.svg'} width={450} height={450} alt="hero"></Image>
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row md:gap-20 gap-8">
        <div className="">
          <div className="text-secondary text-xl mb-4">Paymaent Method</div>
          <div className="flex gap-5  flex-wrap">
            <Image src={'/images/icon/icon-payment/bank.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-payment/twint.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-payment/revolut.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-payment/paypal.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-payment/zen.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-payment/wise.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-payment/binance.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-payment/wallet.svg'} width={32} height={32} alt="icon" />
          </div>
        </div>  
        <div className="">
          <div className="text-secondary text-xl mb-4">Paymaent Method</div>
          <div className="flex gap-5  flex-wrap">
            <Image src={'/images/icon/icon-chain/bnb.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-chain/eth.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-chain/trx.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-chain/btc.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-chain/op.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-chain/arb.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-chain/base.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-chain/ava.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-chain/sol.svg'} width={32} height={32} alt="icon" />
          </div>
        </div>
        <div className="">
          <div className="text-secondary text-xl mb-4">Wallets</div>
          <div className="flex gap-5 ">
            <Image src={'/images/icon/icon-wallet/phantom.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-wallet/metamask.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-wallet/trust.svg'} width={32} height={32} alt="icon" />
            <Image src={'/images/icon/icon-wallet/coin.svg'} width={32} height={32} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LP;