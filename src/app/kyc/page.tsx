"use client"

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CountryComboBox from "@/components/KYC/CountryComboBox";
import Uplaod from "@/components/KYC/Upload";
import DocumentSelect from "@/components/KYC/DocumentSelect";


export default function Bank() {
  return (
    <>
      <DefaultLayout>
        <div className="md:pr-16">
          <div className="font-medium text-xl text-primary dark:text-white mb-4">Verify your profile identity</div>
          <div className="font-normal text-base text-secondary mb-8">Submit following to initiate verification process</div>
          <div className="flex flex-wrap md:flex-nowrap md:gap-12 gap-6">
            <div className="flex md:w-1/2 w-full flex-col gap-6">
              <CountryComboBox />
              <DocumentSelect />
              <Uplaod title="Upload Front Part" />
              <Uplaod title="Upload Back Part" />
            </div>
            <div className="flex md:w-1/2 w-full flex-col md:gap-8 gap-6">
              {/*Payment Details */}
              <Uplaod title="Upload Video" />
              <div className="text-base text-primary dark:text-white">Description
                <p className="text-sm text-secondary py-2">Lorem ipsum dolor sit amet consectetur. Erat donec etiam id dictum id ac. Vulputate egestas id lacus mauris lectus hac. Nunc semper malesuada sed pharetra tellus vitae.</p>
              </div>
              <button className="flex items-center justify-center gap-3 text-base text-white font-bold rounded-2xl border-none md:py-4.5 py-3.5 bg-[#04C063]">
                Verify
              </button>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}