"use client"

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Account from "@/components/Payment/Account";
import PaymentDetailSelect from "@/components/common/PaymentDetailSelect";
import CommonInput from "@/components/common/CommonInput";
import ConfirmButton from "@/components/common/ConfirmButton";
import VerificationCode from "@/components/Payment/VerificaitionCode";
import Image from "next/image";
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
            <div className="font-medium text-xl text-primary dark:text-white mb-5">{`${isConfirm? 'Bank Confirmation' : 'Bank Details'}`}</div>
            <div className="flex flex-wrap md:flex-nowrap md:gap-12 gap-6">
              <div className="flex flex-col md:w-1/2 w-full md:gap-8 gap-6">
                <div className="flex items-center justify-between rounded-3xl bg-white dark:bg-primary border-none px-5 py-3">
                  <div className="flex items-center gap-3 text-lg font-medium text-primary dark:text-white">
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" className="fill-current dark:fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.7666 30.75H33.7666V33.75H3.7666V30.75ZM6.7666 18.75H9.7666V29.25H6.7666V18.75ZM14.2666 18.75H17.2666V29.25H14.2666V18.75ZM20.2666 18.75H23.2666V29.25H20.2666V18.75ZM27.7666 18.75H30.7666V29.25H27.7666V18.75ZM3.7666 11.25L18.7666 3.75L33.7666 11.25V17.25H3.7666V11.25ZM18.7666 12.75C19.1644 12.75 19.546 12.592 19.8273 12.3107C20.1086 12.0294 20.2666 11.6478 20.2666 11.25C20.2666 10.8522 20.1086 10.4706 19.8273 10.1893C19.546 9.90804 19.1644 9.75 18.7666 9.75C18.3688 9.75 17.9872 9.90804 17.7059 10.1893C17.4246 10.4706 17.2666 10.8522 17.2666 11.25C17.2666 11.6478 17.4246 12.0294 17.7059 12.3107C17.9872 12.592 18.3688 12.75 18.7666 12.75Z" fill=""/>
                    </svg>
                    Bank Transfer
                  </div>
                  <Image src={`${!isConfirm ? "/images/icon/icon-checked2.svg" : "/images/icon/icon-checked.svg"}`} width={22} height={22} alt="icon2"/>
                </div>
                {/*Payment Details */}
                <div className="bg-white dark:bg-primary rounded-3xl md:px-8 px-4 md:py-6 py-4">
                  <div className="font-medium text-xl text-primary dark:text-white mb-3">Payment Details</div>
                  <div className="flex flex-col gap-3">
                    <CommonInput title="Full Name" placeholder="Beneficiary name"/>
                    <PaymentDetailSelect title="IBN" placeholder="IBN"/>
                    <PaymentDetailSelect title="Zip Code" placeholder="5647"/>
                    <PaymentDetailSelect title="City" placeholder="New York"/>
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