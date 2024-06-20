"use client"

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Account from "@/components/Payment/Account";
import ConfirmButton from "@/components/common/ConfirmButton";
import VerificationCode from "@/components/Payment/VerificaitionCode";
import PaymentComboBox from "@/components/common/PaymentComboBox";
import AddWallet from "@/components/Payment/AddWallet";
import Image from "next/image";
import { useState } from "react";

const selectCurrencyOptions = [
  {id:1, name:'USDT',icon:'/images/icon/icon-usdt.svg', token:''},
  {id:2, name:'BTC',icon:'/images/icon/icon-btc.svg', token:''},
  {id:3, name:'ETH',icon:'/images/icon/icon-eth.svg', token:''}
]
const selectNetworkOptions = [
  {id:1, name:'TRON',icon:'/images/icon/icon-tron.svg', token:'TRC20'},
]

export default function Buy() {
  const [isConfirm, setIsConfirm] = useState(false);

  const handleClick = () => {
    setIsConfirm(!isConfirm);
  }

  return (
    <>
        <DefaultLayout>
          <div className="md:pr-16">
            <div className="font-medium text-xl text-primary dark:text-white mb-5">{`${isConfirm? 'Wallet Confirmation' : 'Wallet Details'}`}</div>
            <div className="flex flex-wrap md:flex-nowrap md:gap-12 gap-6">
              <div className="flex flex-col md:w-1/2 w-full md:gap-8 gap-6">
                <div className="flex items-center justify-between rounded-3xl bg-white dark:bg-primary border-none px-5 py-3">
                  <div className="flex items-center gap-3 text-lg font-medium text-primary dark:text-white">
                    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 9.9375C1.5 7.45222 3.51472 5.4375 6 5.4375H30C32.4853 5.4375 34.5 7.45222 34.5 9.9375C34.5 10.7659 33.8284 11.4375 33 11.4375H27C22.8579 11.4375 19.5 14.7954 19.5 18.9375C19.5 23.0796 22.8579 26.4375 27 26.4375H33C33.8284 26.4375 34.5 27.1091 34.5 27.9375C34.5 30.4228 32.4853 32.4375 30 32.4375H6C3.51472 32.4375 1.5 30.4228 1.5 27.9375V9.9375Z" fill=""/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M27 14.4375H33C33.8284 14.4375 34.5 15.1091 34.5 15.9375V21.9375C34.5 22.7659 33.8284 23.4375 33 23.4375H27C24.5147 23.4375 22.5 21.4228 22.5 18.9375C22.5 16.4522 24.5147 14.4375 27 14.4375ZM27 20.4375C27.8284 20.4375 28.5 19.7659 28.5 18.9375C28.5 18.1091 27.8284 17.4375 27 17.4375C26.1716 17.4375 25.5 18.1091 25.5 18.9375C25.5 19.7659 26.1716 20.4375 27 20.4375Z" fill=""/>
                    </svg>
                    Wallet Address
                  </div>
                  <Image src={`${!isConfirm ? "/images/icon/icon-checked2.svg" : "/images/icon/icon-checked.svg"}`} width={22} height={22} alt="icon2"/>
                </div>
                {/*Wallet Details */}
                <div className="bg-white dark:bg-primary rounded-3xl md:px-8 px-4 md:py-6 py-4">
                  <div className="font-medium text-xl text-primary dark:text-white mb-3">Wallet Details</div>
                  <div className="flex flex-col">
                    <PaymentComboBox options={selectCurrencyOptions} select="Select Currency" isConfirm={isConfirm}/>
                    <PaymentComboBox options={selectNetworkOptions} select="Select Network" isConfirm={isConfirm}/>
                  </div>
                </div>
                {/**Wallet Address */}
                <div className="bg-white dark:bg-primary rounded-3xl md:px-8 px-4 md:py-6 py-4">
                  <div className="font-medium text-xl text-primary dark:text-white mb-3">Wallet Address</div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-center bg-third dark:bg-secondary text-secondary dark:text-white rounded-full border-none px-6 py-3">
                      Wallet Address
                    </div>
                    <div className="flex items-center gap-2 font-medium text-primary dark:text-white">
                      <Image src='/images/icon/icon-tron.svg' width={24} height={24} alt="icon"/>
                      Tron
                    </div>
                    { !isConfirm &&
                      <div className="text-base text-primary dark:text-white">Description
                        <p className="text-sm text-secondary py-2">Lorem ipsum dolor sit amet consectetur. Erat donec etiam id dictum id ac. Vulputate egestas id lacus mauris lectus hac. Nunc semper malesuada sed pharetra tellus vitae.</p>
                      </div>
                    }
                  </div>
                </div>
                {!isConfirm && <ConfirmButton handleClick={handleClick} />}
                { isConfirm && <AddWallet />}
              </div>
              <div className="flex flex-col md:w-1/2 w-full md:gap-8 gap-6">
              { !isConfirm && 
                <>
                  <div className="text-base text-primary dark:text-white">Description
                    <p className="text-sm text-secondary py-2">Lorem ipsum dolor sit amet consectetur. Erat donec etiam id dictum id ac. Vulputate egestas id lacus mauris lectus hac. Nunc semper malesuada sed pharetra tellus vitae.</p>
                  </div>
                  <div>
                    <div className="font-medium text-xl text-primary dark:text-white mb-5">Verification Code</div>
                    <div className="flex flex-col gap-3">
                      <VerificationCode />
                    </div>
                  </div>
                </>
              }
              </div>
            </div>
          </div>
        </DefaultLayout>
    </>
  );
}