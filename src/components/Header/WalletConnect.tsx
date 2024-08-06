"use client"

import WalletType from './WalletType';
import CoinType from './CoinType';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const WalletConnect = () => {
  const [openModalCoin, setModalCoin] = useState(false);
  const [walletName, setwalletName] = useState('Metamask');
  const [coinName, setCoinName] = useState(['Ethereum','ETH']);
  const [coinNameAbb, setCoinNameAbb] = useState('ETH')
  const modalRef = useRef(null);

  const handleModal = () => {
    setModalCoin(false);
  }
  const handleModalCoin = () => {
    setModalCoin(true);
  }

  const setWallet = () => {
    if (coinName[0] === 'Tron')
      setwalletName('Tronlink')
    else if (coinName[0] === 'Solana')
      setwalletName('Phantom')
    else setwalletName('Metamask')
  }
  const setCoin = (name: any) => {
    setCoinName(name);
    setModalCoin(false);
  }
  useEffect(() => {
    setWallet();
  }, [coinName])

  return (
    <div className='relative flex gap-2'>
      <button
        className={`px-4 flex items-center gap-1.5 py-2 rounded-xl bg-primary text-white text-sm ${coinName[0] === 'Ethereum' ? 'from-[#a78bfa] to-[#6d28d9] bg-gradient-to-r' :
          (coinName[0] === 'Arbitrum' ? 'from-[#06b6d4] to-[#082f49] bg-gradient-to-r' :
            (coinName[0] === 'Optimism' ? 'from-[#4c0519] to-[#be123c] bg-gradient-to-r' :
              (coinName[0] === 'Base' ? 'from-[#172554] to-[#1d4ed8] bg-gradient-to-r' :
                (coinName[0] === 'BNB Chain' ? 'from-[#ca8a04] to-[#fde68a] bg-gradient-to-r' :
                  (coinName[0] === 'Avalanche' ? 'from-[#4c0519] to-[#f43f5e] bg-gradient-to-r' :
                    (coinName[0] === 'Solana' ? 'from-green-400 to-[#7c3aed] bg-gradient-to-r' :
                      (coinName[0] === 'Tron' ? 'from-[#4c0519] to-[#be123c] bg-gradient-to-r' :
                        'dark:bg-secondary'
                      )))))))}`}
        onClick={handleModalCoin}
      >
        {coinName[0] != "Connect Coin" &&
          <Image src={`${coinName[0] === 'Ethereum' ? '/images/logo/ethereum_logo.svg' : (coinName[0] === 'Arbitrum' ? '/images/logo/arbitrum-logo.svg' :
            (coinName[0] === 'Optimism' ? '/images/logo/optimism-logo.svg' :
              (coinName[0] === 'Base' ? '/images/logo/base-logo.svg' :
                (coinName[0] === 'BNB Chain' ? '/images/logo/bnbchain-logo.svg' :
                  (coinName[0] === 'Avalanche' ? '/images/logo/avalanche-logo.svg' :
                    (coinName[0] === 'Solana' ? '/images/logo/solana_logo.svg' :
                      (coinName[0] === 'Tron' ? '/images/logo/tron-logo.svg' :
                        ''
                      )))))))}`} width={`${coinName[0] === 'Ethereum' ? 16: 20}`} height={20} alt="icon" 
          />
        }
        <span className='md:block hidden'>{coinName[0]}</span>
        <span className='md:hidden block'>{coinName[1]}</span>
        <Image src={"/images/icon/arrow-down.svg"} width={12} height={12} alt="icon" />
      </button>

      <button
        className={`flex gap-1.5 md:px-4 md:py-2 px-2 py-2 md:rounded-full rounded-xl bg-primary text-white text-sm ${coinName[0] === 'Tron' ? 'from-[#1e40af] to-[#3b82f6] bg-gradient-to-r' :
          (coinName[0] === 'Solana' ? 'from-[#5b21b6] to-[#a78bfa] bg-gradient-to-r' :
            'from-[#78350f] to-[#d97706] bg-gradient-to-r'
          )
          }`}
        onClick={handleModal}
      ><Image src={`${coinName[0] === 'Tron' ? '/images/icon/icon-wallet/icon-tronlink.svg' :
        (coinName[0] === 'Solana' ? '/images/icon/icon-wallet/icon-phantom.svg' :
          (coinName[0] === 'Ethereum' ? '/images/icon/icon-metamask.svg' :
            (coinName[0] === 'Arbitrum' ? '/images/icon/icon-metamask.svg' :
              (coinName[0] === 'Optimism' ? '/images/icon/icon-metamask.svg' :
                (coinName[0] === 'Base' ? '/images/icon/icon-metamask.svg' :
                  (coinName[0] === 'BNB Chain' ? '/images/icon/icon-metamask.svg' :
                    (coinName[0] === 'Avalanche' ? '/images/icon/icon-metamask.svg' : ''
                    )))))))}`} width={18} height={18} alt="icon"/>
        <span className='hidden md:block'>{walletName}</span>
      </button>
      {openModalCoin &&
        <div className='absolute w-full z-99999 flex' style={{top: "60px"}}>
          <div ref={modalRef} className='flex flex-col gap-4 bg-white dark:bg-primary rounded-3xl px-3 py-3 shadow-6 shadow-neutral-400'>
            <div onClick={() => setCoin(['Ethereum', 'ETH'])}>
              <CoinType icon='/images/logo/ethereum_logo.svg' name='Ethereum' />
            </div>
            <div onClick={() => setCoin(['Arbitrum', 'ARB'])}>
              <CoinType icon='/images/logo/arbitrum-logo.svg' name='Arbitrum' />
            </div>
            {/* <CoinType icon='/images/icon/icon-coinbase.svg' name='Coinbase Wallet' /> */}
            <div onClick={() => setCoin(['Optimism', 'OP'])}>
              <CoinType icon='/images/logo/optimism-logo.svg' name='Optimism' />
            </div>
            <div onClick={() => setCoin(['Base', 'Base'])}>
              <CoinType icon='/images/logo/base-logo.svg' name='Base' />
            </div>
            <div onClick={() => setCoin(['BNB Chain', 'BNB'])}>
              <CoinType icon='/images/logo/bnbchain-logo.svg' name='BNB Chain' />
            </div>
            <div onClick={() => setCoin(['Avalanche', 'AVAX'])}>
              <CoinType icon='/images/logo/avalanche-logo.svg' name='Avalanche' />
            </div>
            <div onClick={() => setCoin(['Solana', 'SOL'])}>
              <CoinType icon='/images/logo/solana_logo.svg' name='Solana' />
            </div>
            <div onClick={() => setCoin(['Tron', 'TRN'])}>
              <CoinType icon='/images/logo/tron-logo.svg' name='Tron' />
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default WalletConnect;