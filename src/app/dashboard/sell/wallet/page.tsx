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
          <div className="font-medium text-xl text-primary mb-5">Overview</div>
          <BuyAndSellButton />
          <div className="flex gap-8">
            <div className="flex w-1/2 flex-col gap-8">
              {/*Selct */}
              <Select />              
            </div>
            
            <div className="flex w-1/2 flex-col gap-8">
              {/**Payment Method */}
              <div className="bg-white rounded-3xl px-8 py-6">
                <div className="font-medium text-xl text-primary mb-3">Payment Method</div>
                <div className="flex flex-col gap-3">
                  <PaymentSelect bgcolor={paymentMethod == "Bank Transfer" ? "bg-[#E6E8EC]" : "bg-white"} icon_src="/images/icon/icon-bank.svg" content="Bank Transfer" handleClick={() => handlePaymentSelect("Bank Transfer")}/>
                  <PaymentSelect bgcolor={paymentMethod == "Twint" ? "bg-[#E6E8EC]" : "bg-white"} icon_src="/images/icon/icon-twint.svg" content="Twint" handleClick={() => handlePaymentSelect("Twint")}/>
                  <PaymentSelect bgcolor={paymentMethod == "Paypal" ? "bg-[#E6E8EC]" : "bg-white"} icon_src="/images/icon/icon-paypal.svg" content="Paypal" handleClick={() => handlePaymentSelect("Paypal")}/>
                  <PaymentSelect bgcolor={paymentMethod == "Zen" ? "bg-[#E6E8EC]" : "bg-white"} icon_src="/images/icon/icon-zen.svg" content="Zen" handleClick={() => handlePaymentSelect("Zen")}/>
                  <PaymentSelect bgcolor={paymentMethod == "Wise" ? "bg-[#E6E8EC]" : "bg-white"} icon_src="/images/icon/icon-wise.svg" content="Wise" handleClick={() => handlePaymentSelect("Wise")}/>
                  <PaymentSelect bgcolor={paymentMethod == "Revolut" ? "bg-[#E6E8EC]" : "bg-white"} icon_src="/images/icon/icon-revolut.svg" content="Revolut" handleClick={() => handlePaymentSelect("Revolut")}/>
                  {(amount && paymentMethod) && <div className="flex flex-col mt-4">
                    <ReviewTransaction />
                  </div>}
                </div>
              </div>
              <div className="text-base text-primary">Description
                <p className="text-sm text-secondary py-2">Lorem ipsum dolor sit amet consectetur. Erat donec etiam id dictum id ac. Vulputate egestas id lacus mauris lectus hac. Nunc semper malesuada sed pharetra tellus vitae.</p>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}