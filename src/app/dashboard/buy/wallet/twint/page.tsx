"use client"

import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import BuyAndSellButton from "@/components/Dashboard/Buy/BuyAndSellButton";
import Select from "@/components/Dashboard/Buy/Select1";
import ReviewTransaction from "@/components/Dashboard/Buy/ReviewTransaction";
import PaymentDetailSelect from "@/components/common/PaymentDetailSelect";
import QRCode from "@/components/common/ORCode";
import PaymentReceipt from "@/components/Dashboard/Buy/PaymentReceipt";


export default function Bank() {
  return (
    <>
      <DefaultLayout>
        <div className="pr-16">
          <div className="font-medium text-xl text-primary dark:text-white mb-5">Overview</div>
          <BuyAndSellButton />
          <div className="flex gap-12">
            <div className="flex w-1/2 flex-col gap-8">
              {/*Selct */}
              <Select />
              {/*Receiving Method */}
              <div className="bg-white dark:bg-primary rounded-3xl px-8 py-6">
                <div className="font-medium text-xl text-primary dark:text-white mb-3">Receiving Method</div>
                <div className="flex flex-col gap-4">
                  <div className='flex items-center justify-center gap-3 bg-third dark:bg-secondary text-base text-primary dark:text-white font-bold rounded-2xl border-none py-3'>
                    <svg width="36" height="36" viewBox="0 0 25 25" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.8074 7.17957H18.4174C18.0874 5.26957 16.5274 3.80957 14.6574 3.80957H4.82735C3.56735 3.80957 2.53735 4.90957 2.53735 6.24957C2.53735 6.33957 2.55735 6.41957 2.56735 6.50957C2.55735 6.54957 2.53735 6.58957 2.53735 6.63957V17.9396C2.53735 19.9996 4.21735 21.6796 6.26735 21.6796H18.8074C20.8574 21.6796 22.5374 19.9996 22.5374 17.9396V10.9096C22.5374 8.84957 20.8574 7.17957 18.8074 7.17957ZM18.2474 15.6896C17.5574 15.6896 16.9874 15.1296 16.9874 14.4296C16.9874 13.7296 17.5574 13.1596 18.2474 13.1596C18.9474 13.1596 19.5174 13.7296 19.5174 14.4296C19.5174 15.1296 18.9474 15.6896 18.2474 15.6896ZM4.82735 5.30957H14.6574C15.7074 5.30957 16.5874 6.09957 16.8774 7.17957H4.82735C4.38735 7.17957 4.03735 6.75957 4.03735 6.24957C4.03735 5.72957 4.38735 5.30957 4.82735 5.30957Z" fill=""/>
                    </svg>
                    Wallet Deposit
                  </div>
                </div>
              </div>
              {/*Payment Method */}
              <div className="bg-white dark:bg-primary rounded-3xl px-8 py-6">
                <div className="font-medium text-xl text-primary dark:text-white mb-3">Payment Method</div>
                <div className="flex flex-col gap-3">
                  <div className={`flex items-center gap-3 text-primary dark:text-white font-medium rounded-2xl bg-third dark:bg-secondary border-[1px] border-third dark:border-secondary px-6 py-3`}>
                    <Image src='/images/icon/icon-twint.svg' width={36} height={36} alt='Twint'/>
                    Twint
                  </div>
                </div>
              </div>
              <div className="text-base text-primary dark:text-white">Description
                <p className="text-sm text-secondary py-2">Lorem ipsum dolor sit amet consectetur. Erat donec etiam id dictum id ac. Vulputate egestas id lacus mauris lectus hac. Nunc semper malesuada sed pharetra tellus vitae.</p>
              </div>
            </div>
            
            <div className="flex w-1/2 flex-col gap-8">
              {/*Payment Details */}
              <div className="bg-white dark:bg-primary rounded-3xl px-8 py-6">
                <div className="font-medium text-xl text-primary dark:text-white mb-3">Payment Details</div>
                <div className="flex flex-col gap-3">
                  <PaymentDetailSelect title="Full Name" placeholder="Account holder name"/>
                  <PaymentDetailSelect title="Phone Number" placeholder="Phone Number"/>
                </div>
              </div>
              <QRCode />
              <PaymentReceipt />
              <ReviewTransaction />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}