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
                    <svg width="36" height="36" viewBox="0 0 25 24" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                      <g id="simple-icons:binance" clip-path="url(#clip0_1_32213)">
                        <path id="Vector" d="M17.3193 13.9197L20.0373 16.6357L12.6843 23.9887L5.33131 16.6367L8.04831 13.9197L12.6843 18.5797L17.3193 13.9197ZM21.9563 9.28372L24.6953 11.9997L21.9803 14.7157L19.2633 11.9997L21.9563 9.28372ZM12.6843 9.28372L15.4003 11.9757L12.6833 14.6927L9.96731 11.9997L12.6843 9.28372ZM3.41131 9.28372L6.10531 11.9997L3.41331 14.6917L0.695312 11.9997L3.41131 9.28372ZM12.6853 0.0117188L20.0353 7.33972L17.3183 10.0547L12.6853 5.41972L8.04931 10.0797L5.33231 7.36372L12.6853 0.0117188Z" fill=""/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_32213">
                          <rect width="24" height="24" fill="white" transform="translate(0.695312)"/>
                        </clipPath>
                      </defs>
                    </svg>
                    Binance Pay
                  </div>
                </div>
              </div>
              {/*Payment Method */}
              <div className="bg-white dark:bg-primary rounded-3xl px-8 py-6">
                <div className="font-medium text-xl text-primary dark:text-white mb-3">Payment Method</div>
                <div className="flex flex-col gap-3">
                  <div className={`flex items-center gap-3 text-primary dark:text-white font-medium rounded-2xl bg-third dark:bg-secondary border-[1px] border-third dark:border-secondary px-6 py-3`}>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" className="fill-current dark:fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.7666 30.75H33.7666V33.75H3.7666V30.75ZM6.7666 18.75H9.7666V29.25H6.7666V18.75ZM14.2666 18.75H17.2666V29.25H14.2666V18.75ZM20.2666 18.75H23.2666V29.25H20.2666V18.75ZM27.7666 18.75H30.7666V29.25H27.7666V18.75ZM3.7666 11.25L18.7666 3.75L33.7666 11.25V17.25H3.7666V11.25ZM18.7666 12.75C19.1644 12.75 19.546 12.592 19.8273 12.3107C20.1086 12.0294 20.2666 11.6478 20.2666 11.25C20.2666 10.8522 20.1086 10.4706 19.8273 10.1893C19.546 9.90804 19.1644 9.75 18.7666 9.75C18.3688 9.75 17.9872 9.90804 17.7059 10.1893C17.4246 10.4706 17.2666 10.8522 17.2666 11.25C17.2666 11.6478 17.4246 12.0294 17.7059 12.3107C17.9872 12.592 18.3688 12.75 18.7666 12.75Z" fill=""/>
                    </svg>
                    Bank Transfer
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
                  <PaymentDetailSelect title="Company Name" placeholder="Account holder name"/>
                  <PaymentDetailSelect title="IBN" placeholder="IBN"/>
                  <PaymentDetailSelect title="Zip Code" placeholder="5647"/>
                  <PaymentDetailSelect title="City" placeholder="New York"/>
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