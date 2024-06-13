"use client"

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Account from "@/components/Payment/Account";
import ConfirmButton from "@/components/common/ConfirmButton";
import VerificationCode from "@/components/Payment/VerificaitionCode";
import CommonComboBox from "@/components/common/CommonComboBox";
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
          <div className="pr-16">
            <div className="font-medium text-xl text-primary mb-5">{`${isConfirm? 'Wallet Confirmation' : 'Wallet Details'}`}</div>
            <div className="flex gap-12">
              <div className="flex flex-col w-1/2 gap-8">
                <Account icon_src1="/images/icon/icon-bank.svg" name="Wallet Address" icon_src2={`${!isConfirm ? "/images/icon/icon-checked2.svg" : "/images/icon/icon-checked.svg"}`}/>
                {/*Wallet Details */}
                <div className="bg-white rounded-3xl px-8 py-6">
                  <div className="font-medium text-xl text-primary mb-3">Wallet Details</div>
                  <div className="flex flex-col">
                    <CommonComboBox options={selectCurrencyOptions} select="Select Currency" isConfirm={isConfirm}/>
                    <CommonComboBox options={selectNetworkOptions} select="Select Network" isConfirm={isConfirm}/>
                  </div>
                </div>
                {/**Wallet Address */}
                <div className="bg-white rounded-3xl px-8 py-6">
                  <div className="font-medium text-xl text-primary mb-3">Wallet Address</div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-center bg-third text-secondary rounded-full border-none px-6 py-3">
                      Wallet Address
                    </div>
                    <div className="flex items-center gap-2 font-medium text-primary">
                      <Image src='/images/icon/icon-tron.svg' width={24} height={24} alt="icon"/>
                      Tron
                    </div>
                    { !isConfirm &&
                      <div className="text-base text-primary">Description
                        <p className="text-sm text-secondary py-2">Lorem ipsum dolor sit amet consectetur. Erat donec etiam id dictum id ac. Vulputate egestas id lacus mauris lectus hac. Nunc semper malesuada sed pharetra tellus vitae.</p>
                      </div>
                    }
                  </div>
                </div>
                {!isConfirm && <ConfirmButton handleClick={handleClick} />}
                { isConfirm && <AddWallet />}
              </div>
              <div className="flex flex-col w-1/2 gap-8">
              { !isConfirm && 
                <>
                  <div className="text-base text-primary">Description
                    <p className="text-sm text-secondary py-2">Lorem ipsum dolor sit amet consectetur. Erat donec etiam id dictum id ac. Vulputate egestas id lacus mauris lectus hac. Nunc semper malesuada sed pharetra tellus vitae.</p>
                  </div>
                  <div>
                    <div className="font-medium text-xl text-primary mb-5">Verification Code</div>
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