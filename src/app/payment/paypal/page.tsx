"use client"

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Account from "@/components/Payment/Account";
import PaymentDetailSelect from "@/components/common/PaymentDetailSelect";
import CommonInput from "@/components/common/CommonInput";
import ConfirmButton from "@/components/common/ConfirmButton";
import VerificationCode from "@/components/Payment/VerificaitionCode";
import { useState } from "react";

export default function Buy() {
  const [isConfirm, setIsConfirm] = useState(false);

  const handleClick = () => {
    setIsConfirm(!isConfirm);
  }

  return (
    <>
        <DefaultLayout>
          <div className="md:pr-16">
            <div className="font-medium text-xl text-primary dark:text-white mb-5">{`${isConfirm? 'Paypal Confirmation' : 'Paypal Details'}`}</div>
            <div className="flex flex-wrap md:flex-nowrap md:gap-12 gap-6">
              <div className="flex flex-col md:w-1/2 w-full md:gap-8 gap-6">
                <Account icon_src1="/images/icon/icon-bank.svg" name="Paypal" icon_src2={`${!isConfirm ? "/images/icon/icon-checked2.svg" : "/images/icon/icon-checked.svg"}`}/>
                {/*Payment Details */}
                <div className="bg-white dark:bg-primary rounded-3xl md:px-8 px-4 md:py-6 py-4">
                  <div className="font-medium text-xl text-primary dark:text-white mb-3">Payment Details</div>
                  <div className="flex flex-col gap-3">
                    <CommonInput title="Full Name" placeholder="Beneficiary name"/>
                    <PaymentDetailSelect title="Email Address" placeholder="IBN"/>
                    <PaymentDetailSelect title="Phone Number" placeholder="5647"/>
                    <PaymentDetailSelect title="Tag Name" placeholder="New York"/>
                  </div>
                </div>
                {!isConfirm && <ConfirmButton handleClick={handleClick} />}
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