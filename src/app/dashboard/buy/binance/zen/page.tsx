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
              <div className="bg-white rounded-3xl px-8 py-6">
                <div className="font-medium text-xl text-primary dark:text-white mb-3">Receiving Method</div>
                <div className="flex flex-col gap-4">
                  <div className='flex items-center justify-center gap-3 bg-third text-base text-primary dark:text-white font-bold rounded-2xl border-none py-3'>
                    <Image src='/images/icon/icon-binance-secondary.svg' width={36} height={36} alt='Binance Pay'/>
                    Binance Pay
                  </div>
                </div>
              </div>
              {/*Payment Method */}
              <div className="bg-white rounded-3xl px-8 py-6">
                <div className="font-medium text-xl text-primary dark:text-white mb-3">Payment Method</div>
                <div className="flex flex-col gap-3">
                  <div className={`flex items-center gap-3 text-primary dark:text-white font-medium rounded-2xl bg-third border-[1px] border-[#E6E8EC] hover:bg-[#E6E8EC] px-6 py-3`}>
                    <Image src='/images/icon/icon-zen.svg' width={36} height={36} alt='Zen'/>
                    Zen
                  </div>
                </div>
              </div>
              <div className="text-base text-primary dark:text-white">Description
                <p className="text-sm text-secondary py-2">Lorem ipsum dolor sit amet consectetur. Erat donec etiam id dictum id ac. Vulputate egestas id lacus mauris lectus hac. Nunc semper malesuada sed pharetra tellus vitae.</p>
              </div>
            </div>
            
            <div className="flex w-1/2 flex-col gap-8">
              {/*Payment Details */}
              <div className="bg-white rounded-3xl px-8 py-6">
                <div className="font-medium text-xl text-primary dark:text-white mb-3">Payment Details</div>
                <div className="flex flex-col gap-3">
                  <PaymentDetailSelect title="Full Name" placeholder="Account holder name"/>
                  <PaymentDetailSelect title="Email Address" placeholder="Eamil"/>
                  <PaymentDetailSelect title="IBN" placeholder="IBN"/>
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