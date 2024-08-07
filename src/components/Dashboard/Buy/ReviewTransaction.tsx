"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTransactionContext } from '@/context/TransactionContext';

const ReviewTransaction = () => {
  const [openModal, setModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleModal = () => {
    setModal(!openModal);
  }
  
  const {exchangeType, currency, amount, paymentMethod, receivingMethod, setValues} = useTransactionContext();
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
    <>
      <button
          className='flex items-center justify-center text-white font-medium rounded-2xl bg-[#7A6FC1] border-[1px] border-[#7A6FC1] md:py-4 py-3'
          onClick={handleModal}
        >Review Transaction</button>
        {openModal &&
          <div className='fixed top-0 left-0 w-full h-full z-99999 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='flex flex-col md:gap-6 gap-3 bg-white dark:bg-primary rounded-3xl md:px-16 px-4 md:py-12 py-4 mx-3 shadow-6 shadow-neutral-500'>
              <div className="font-medium text-xl text-primary dark:text-white md:mb-3">Review Transaction</div>
              <div className='flex items-center justify-between text-base font-normal text-primary dark:text-white'>
                <div>Transaction Type</div>
                <div className='text-[#04C063]'>{exchangeType}</div>
              </div>
              <div className='flex items-center justify-between text-base font-normal text-primary dark:text-white'>
                <div>Transaction Time</div>
                <div className='flex items-center gap-1'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className='stroke-current' xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.321 5.10417L15.1126 4.3125M4.0293 4.3125L4.82096 5.10417" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.5708 18.166C13.5058 18.166 16.6958 14.976 16.6958 11.041C16.6958 7.10599 13.5058 3.91602 9.5708 3.91602C5.63577 3.91602 2.4458 7.10599 2.4458 11.041C2.4458 14.976 5.63577 18.166 9.5708 18.166Z" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.57064 8.27051V11.4372L11.154 13.0205M9.57064 3.52051V2.33301M7.9873 2.33301H11.154" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  5 Min.
                </div>
              </div>
              <div className='flex items-center justify-between text-base font-normal text-primary dark:text-white'>
                <div>You wil pay</div>
                <div className='flex justify-between w-40'>
                  <div className='flex items-center gap-2'>
                    <Image src="/images/icon/icon-chf.svg" width={24} height={24} alt="Watch"></Image>
                    CHF
                  </div>
                  <span className='text-secondary'>{amount}</span>
                </div>
              </div>
              <div className='flex items-center justify-between text-base font-normal text-primary dark:text-white md:gap-32'>
                <div>You wil receive</div>
                <div className='flex justify-between w-40'>                  
                  <div className='flex items-center gap-2'>
                    <Image src={icon} width={24} height={24} alt="Watch"></Image>
                    {currency}
                  </div>
                  <span className='text-secondary'>{amount}</span>
                </div>
              </div>
              <div className='flex items-center justify-between text-base font-normal text-primary dark:text-white'>
                <div>Payment Method</div>
                <div>{paymentMethod}</div>
              </div>

              {/*checkbox*/}
              <div className="flex max-w-100 items-start gap-3">
                <label className="relative flex items-center rounded-full pt-1 cursor-pointer" htmlFor="checkbox">
                  <input type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-primary dark:border-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                    id="checkbox" checked={isChecked}
                    onClick={() => setIsChecked(!isChecked)} readOnly/>
                  <span
                    className="absolute pt-1 text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                      stroke="currentColor" strokeWidth="1">
                      <path fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"></path>
                    </svg>
                  </span>
                </label>
                <label htmlFor="checkbox" className="text-base text-secondary">I understand, and have read and accept the <span className="text-primary dark:text-white">Terms & Conditions</span></label>
              </div>

              {/*cancel & confirm*/}
              <div className='flex justify-between gap-10'>
                <button
                  className='flex w-1/2 items-center justify-center text-secondary font-medium rounded-2xl bg-white dark:bg-primary border-[1px] border-secondary md:py-4 py-3'
                  onClick={() => {handleModal(); setIsChecked(false);}}
                >Cancel</button>
                <Link 
                href={`${isChecked ? '/order' : '#'}`}
                  className='flex w-1/2 items-center justify-center text-white font-medium rounded-2xl bg-[#7A6FC1] border-[1px] border-[#7A6FC1] md:py-4 py-3'
                  onClick={() => {if(isChecked) {handleModal(); setIsChecked(false);}}}
                >Confirm</Link>
              </div>
            </div>
          </div>
          
        }
    </>
      
  );
};

export default ReviewTransaction;