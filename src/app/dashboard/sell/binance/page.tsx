"use client"

import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import BuyAndSellButton from "@/components/Dashboard/Buy/BuyAndSellButton";
import Select from "@/components/Dashboard/Sell/Select1";
import ReviewTransaction from "@/components/Dashboard/Sell/ReviewTransaction";
import PaymentDetailSelect from "@/components/common/PaymentDetailSelect";
import QRCode from "@/components/common/ORCode";
import PaymentSelect from "@/components/Dashboard/Buy/PaymentSelect";
import { useTransactionContext } from "@/context/TransactionContext";

export default function Bank() {
	const {amount, paymentMethod, setValues} = useTransactionContext();

	const handlePaymentSelect = (paymentMethod: string) => {
		setValues((prev) => ({ ...prev, paymentMethod: paymentMethod}));
	}

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
              {/*Payment Details */}
              <div className="bg-white dark:bg-primary rounded-3xl px-8 py-6">
                <div className="font-medium text-xl text-primary dark:text-white mb-3">Payment Details</div>
                <div className="flex flex-col gap-3">
                  <PaymentDetailSelect title="Binance ID" placeholder="Binance ID"/>
                  <PaymentDetailSelect title="Pay ID" placeholder="Pay ID"/>
                  <PaymentDetailSelect title="Email ID" placeholder="5647"/>
                </div>
              </div>
              <QRCode />
              
            </div>
            
            <div className="flex w-1/2 flex-col gap-8">
              {/**Payment Method */}
              <div className="bg-white dark:bg-primary rounded-3xl px-8 py-6">
                <div className="font-medium text-xl text-primary dark:text-white mb-3">Payment Method</div>
                <div className="flex flex-col gap-3">
                  <button onClick={() => handlePaymentSelect("Bank Transfer")} className={`flex items-center gap-3 text-primary dark:text-white font-medium rounded-2xl ${paymentMethod == "Bank Transfer" ? "bg-third dark:bg-secondary" : "dark:bg-primary"} border-[1px] border-third dark:border-secondary hover:bg-third dark:hover:border-secondary px-6 py-3`}>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" className="fill-current dark:fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.7666 30.75H33.7666V33.75H3.7666V30.75ZM6.7666 18.75H9.7666V29.25H6.7666V18.75ZM14.2666 18.75H17.2666V29.25H14.2666V18.75ZM20.2666 18.75H23.2666V29.25H20.2666V18.75ZM27.7666 18.75H30.7666V29.25H27.7666V18.75ZM3.7666 11.25L18.7666 3.75L33.7666 11.25V17.25H3.7666V11.25ZM18.7666 12.75C19.1644 12.75 19.546 12.592 19.8273 12.3107C20.1086 12.0294 20.2666 11.6478 20.2666 11.25C20.2666 10.8522 20.1086 10.4706 19.8273 10.1893C19.546 9.90804 19.1644 9.75 18.7666 9.75C18.3688 9.75 17.9872 9.90804 17.7059 10.1893C17.4246 10.4706 17.2666 10.8522 17.2666 11.25C17.2666 11.6478 17.4246 12.0294 17.7059 12.3107C17.9872 12.592 18.3688 12.75 18.7666 12.75Z" fill=""/>
                    </svg>
                    Bank Transfer
                  </button>
                  <PaymentSelect bgcolor={paymentMethod == "Twint" ? "bg-third dark:bg-secondary" : "dark:bg-primary"} icon_src="/images/icon/icon-twint.svg" content="Twint" handleClick={() => handlePaymentSelect("Twint")}/>
                  <PaymentSelect bgcolor={paymentMethod == "Paypal" ? "bg-third dark:bg-secondary" : "dark:bg-primary"} icon_src="/images/icon/icon-paypal.svg" content="Paypal" handleClick={() => handlePaymentSelect("Paypal")}/>
                  <PaymentSelect bgcolor={paymentMethod == "Zen" ? "bg-third dark:bg-secondary" : "dark:bg-primary"} icon_src="/images/icon/icon-zen.svg" content="Zen" handleClick={() => handlePaymentSelect("Zen")}/>
                  <PaymentSelect bgcolor={paymentMethod == "Wise" ? "bg-third dark:bg-secondary" : "dark:bg-primary"} icon_src="/images/icon/icon-wise.svg" content="Wise" handleClick={() => handlePaymentSelect("Wise")}/>
                  <PaymentSelect bgcolor={paymentMethod == "Revolut" ? "bg-third dark:bg-secondary" : "dark:bg-primary"} icon_src="/images/icon/icon-revolut.svg" content="Revolut" handleClick={() => handlePaymentSelect("Revolut")}/>
                  {(amount && paymentMethod) && <div className="flex flex-col mt-4">
                    <ReviewTransaction />
                  </div>}
                </div>
              </div>
              <div className="text-base text-primary dark:text-white">Description
                <p className="text-sm text-secondary py-2">Lorem ipsum dolor sit amet consectetur. Erat donec etiam id dictum id ac. Vulputate egestas id lacus mauris lectus hac. Nunc semper malesuada sed pharetra tellus vitae.</p>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}