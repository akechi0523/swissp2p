"use client"

import CommonInput from "../common/CommonInput";
import PaymentDetailSelect from "../common/PaymentDetailSelect";
import CheckBoxProfile from "./CheckBoxProfile";
import { useState } from "react";

const ProfileInfo = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="bg-white dark:bg-primary rounded-3xl md:px-8 px-4 md:py-6 py-4">
      <div className="font-medium text-xl text-primary dark:text-white mb-3">Personal Infomation</div>
      <div className="flex flex-wrap md:flex-nowrap md:gap-12 gap-3">
        <div className="flex flex-col md:w-1/2 w-full gap-3">
          <CommonInput title="Full Name" placeholder="Zain Bator"/>
          <PaymentDetailSelect title="Email Address" placeholder="Eamil"/>
          <PaymentDetailSelect title="Address" placeholder="Address"/>
        </div>
        <div className="flex flex-col md:w-1/2 w-full gap-3">
          <CommonInput title="Date of Birth" placeholder="15-Jul-1996"/>
          <PaymentDetailSelect title="Phone Number" placeholder="Eamil"/>
          <CheckBoxProfile checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        </div>
      </div>
      <div>
          <button className="items-center justify-center text-base text-white font-bold rounded-2xl border-none md:w-1/4 w-full md:py-4.5 py-3.5 mt-5 bg-[#04C063]">
            Create Account
          </button>
        </div>
    </div>
  );
}

export default ProfileInfo;