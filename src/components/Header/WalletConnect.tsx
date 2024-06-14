"use client"

import WalletType from './WalletType';
import React, { useState, useRef, useEffect } from 'react';

const WalletConnect = () => {
  const [openModal, setModal] = useState(false);
  const modalRef = useRef(null);

  const handleModal = () => {
    setModal(!openModal);
  }

  const handleClickOutside = () => {
    if (modalRef.current) {
      setModal(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        className="px-4 py-2 rounded-full bg-primary dark:bg-secondary text-white text-sm"
        onClick={handleModal}
      >
        Wallet
      </button>
      {openModal &&
        <div className='absolute top-[80px] 2xl:right-19 md:right-14 w-full z-99999 flex md:justify-end justify-center right-0 px-6'>
          <div ref={modalRef} className='flex flex-col gap-4 sm:w-125 bg-white dark:bg-primary rounded-3xl px-6 py-3 shadow-6 shadow-neutral-400'>
            <div>
              <div className="font-medium text-xl text-primary dark:text-white mb-3">Connect Wallet</div>        
              <div className="font-normal text-base text-secondary">Choose how you want to connect. There are several 
              wallet providers.</div>
            </div>
            <WalletType icon='/images/icon/icon-metamask.svg' name='Metamask'/>     
            <WalletType icon='/images/icon/icon-walletconnect.svg' name='Wallet Connect'/>     
            <WalletType icon='/images/icon/icon-coinbase.svg' name='Coinbase Wallet'/>
            <button className="flex items-center justify-center text-base font-medium text-primary dark:text-white rounded-full border-[1px] border-thrid dark:border-secondary px-6 py-3 mb-3 hover:bg-third dark:hover:bg-secondary">
              See More
            </button>     
          </div>
        </div>          
      }
    </>
  );
};

export default WalletConnect;