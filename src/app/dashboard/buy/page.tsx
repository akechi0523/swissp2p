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
        <div className="pr-16">
          <div className="font-medium text-xl text-primary mb-5">Overview</div>
          <BuyAndSellButton />
          <div className="flex gap-12">
            <div className="flex w-1/2 flex-col gap-8">
              <Select />
              <PaymentMethod />
            </div>
            <div className="flex w-1/2 flex-col gap-8">
              <ReceivingMethod />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}