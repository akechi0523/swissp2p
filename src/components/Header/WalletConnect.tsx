"use client"

import WalletType from './WalletType';
import CoinType from './CoinType';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const WalletConnect = () => {
  const [openModalCoin, setModalCoin] = useState(false);
  const [walletName, setwalletName] = useState('Metamask');
  const [coinName, setCoinName] = useState('Ethereum');
  const modalRef = useRef(null);

  const handleModal = () => {
    setModalCoin(false);
  }
  const handleModalCoin = () => {
    setModalCoin(true);
  }

  const setWallet = () => {
    if (coinName === 'Tron')
      setwalletName('Tronlink')
    else if (coinName === 'Solana')
      setwalletName('Phantom')
    else setwalletName('Metamask')
  }
  const setCoin = (name: string) => {
    setCoinName(name);
    setModalCoin(false);
  }

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);
  useEffect(() => {
    setWallet()
  }, [coinName])

  return (
    <>
      <button
        className={`px-4 flex py-2 rounded-xl bg-primary text-white text-sm ${coinName === 'Ethereum' ? 'from-[#a78bfa] to-[#6d28d9] bg-gradient-to-r' :
          (coinName === 'Arbitrum' ? 'from-[#06b6d4] to-[#082f49] bg-gradient-to-r' :
            (coinName === 'Optimism' ? 'from-[#4c0519] to-[#be123c] bg-gradient-to-r' :
              (coinName === 'Base' ? 'from-[#172554] to-[#1d4ed8] bg-gradient-to-r' :
                (coinName === 'BNB Chain' ? 'from-[#ca8a04] to-[#fde68a] bg-gradient-to-r' :
                  (coinName === 'Avalanche' ? 'from-[#4c0519] to-[#f43f5e] bg-gradient-to-r' :
                    (coinName === 'Solana' ? 'from-green-400 to-[#7c3aed] bg-gradient-to-r' :
                      (coinName === 'Tron' ? 'from-[#4c0519] to-[#be123c] bg-gradient-to-r' :
                        'dark:bg-secondary'
                      )))))))}`}
        onClick={handleModalCoin}
      >
        {coinName != "Connect Coin" &&
          <Image src={`${coinName === 'Ethereum' ? '/images/logo/ethereum_logo.svg' : (coinName === 'Arbitrum' ? '/images/logo/arbitrum-logo.svg' :
            (coinName === 'Optimism' ? '/images/logo/optimism-logo.svg' :
              (coinName === 'Base' ? '/images/logo/base-logo.svg' :
                (coinName === 'BNB Chain' ? '/images/logo/bnbchain-logo.svg' :
                  (coinName === 'Avalanche' ? '/images/logo/avalanche-logo.svg' :
                    (coinName === 'Solana' ? '/images/logo/solana_logo.svg' :
                      (coinName === 'Tron' ? '/images/logo/tron-logo.svg' :
                        ''
                      )))))))}`} width={17} height={17} alt="icon" className='mt-0.5 me-2' />}
        {coinName}
        <Image src={"/images/icon/arrow-down.svg"} width={12} height={12} alt="icon" className='mt-2 ms-2' />
      </button>

      <button
        className={`px-4 flex py-2 rounded-full bg-primary text-white text-sm ${coinName === 'Tron' ? 'from-[#1e40af] to-[#3b82f6] bg-gradient-to-r' :
          (coinName === 'Solana' ? 'from-[#5b21b6] to-[#a78bfa] bg-gradient-to-r' :
            'from-[#78350f] to-[#d97706] bg-gradient-to-r'
          )
          }`}
        onClick={handleModal}
      ><Image src={`${coinName === 'Tron' ? '/images/icon/icon-wallet/icon-tronlink.svg' :
        (coinName === 'Solana' ? '/images/icon/icon-wallet/icon-phantom.svg' :
          (coinName === 'Ethereum' ? '/images/icon/icon-metamask.svg' :
            (coinName === 'Arbitrum' ? '/images/icon/icon-metamask.svg' :
              (coinName === 'Optimism' ? '/images/icon/icon-metamask.svg' :
                (coinName === 'Base' ? '/images/icon/icon-metamask.svg' :
                  (coinName === 'BNB Chain' ? '/images/icon/icon-metamask.svg' :
                    (coinName === 'Avalanche' ? '/images/icon/icon-metamask.svg' : ''
                    )))))))}`} width={14} height={14} alt="icon" className='mt-1 me-2' />
        {walletName}
      </button>

      {openModalCoin &&
        <div className='absolute top-[80px] 2xl:right-19 md:right-24 w-full z-99999 flex md:justify-end justify-center right-0 px-6 mr-24'>
          <div ref={modalRef} className='flex flex-col gap-4 sm:w-50 bg-white dark:bg-primary rounded-3xl px-6 py-3 shadow-6 shadow-neutral-400'>
            <div onClick={() => setCoin('Ethereum')}>
              <CoinType icon='/images/logo/ethereum_logo.svg' name='Ethereum' />
            </div>
            <div onClick={() => setCoin('Arbitrum')}>
              <CoinType icon='/images/logo/arbitrum-logo.svg' name='Arbitrum' />
            </div>
            {/* <CoinType icon='/images/icon/icon-coinbase.svg' name='Coinbase Wallet' /> */}
            <div onClick={() => setCoin('Optimism')}>
              <CoinType icon='/images/logo/optimism-logo.svg' name='Optimism' />
            </div>
            <div onClick={() => setCoin('Base')}>
              <CoinType icon='/images/logo/base-logo.svg' name='Base' />
            </div>
            <div onClick={() => setCoin('BNB Chain')}>
              <CoinType icon='/images/logo/bnbchain-logo.svg' name='BNB Chain' />
            </div>
            <div onClick={() => setCoin('Avalanche')}>
              <CoinType icon='/images/logo/avalanche-logo.svg' name='Avalanche' />
            </div>
            <div onClick={() => setCoin('Solana')}>
              <CoinType icon='/images/logo/solana_logo.svg' name='Solana' />
            </div>
            <div onClick={() => setCoin('Tron')}>
              <CoinType icon='/images/logo/tron-logo.svg' name='Tron' />
            </div>
          </div>
        </div>
      }

    </>
  );
};

export default WalletConnect;