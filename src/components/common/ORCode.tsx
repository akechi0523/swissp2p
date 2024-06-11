"use client"

import Image from "next/image";

const QRCode = () => {
  return (
    <div className="bg-white rounded-3xl px-8 py-6">
      <div className="font-medium text-xl text-primary mb-3">QR Code</div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center bg-[#04C063] bg-opacity-5 w-[185px] h-[185px] rounded-2xl">
          <Image src='/images/icon/icon-qrcode.svg' width={131} height={131} alt="QR Code"/>
        </div>
      </div>
    </div>
  );
}

export default QRCode;