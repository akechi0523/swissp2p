"use client"

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import BuyAndSellButton from "@/components/Dashboard/Buy/BuyAndSellButton";
import Select from "@/components/Dashboard/Buy/Select";
import PaymentMethod from "@/components/Dashboard/Buy/PaymentMethod";
import ReceivingMethod from "@/components/Dashboard/Buy/ReceivingMethod";

export default function Buy() {
  return (
    <>
      <DefaultLayout>
        <div className="md:pr-16">
          <div className="font-medium text-xl text-primary dark:text-white mb-5">Overview</div>
          <BuyAndSellButton />
          <div className="flex flex-wrap md:flex-nowrap md:gap-12 gap-6">
            <div className="flex md:w-1/2 w-full flex-col md:gap-8 gap-6">
              <Select />
              <PaymentMethod />
            </div>
            <div className="flex md:w-1/2 w-full flex-col md:gap-8 gap-6">
              <ReceivingMethod />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}