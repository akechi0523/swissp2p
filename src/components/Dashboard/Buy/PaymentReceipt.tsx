import Image from "next/image";

const PaymentReceipt = () => {
  return (
    <div className="bg-white dark:bg-primary rounded-3xl md:px-8 px-4 md:py-6 py-4">
      <div className="font-medium text-xl text-primary dark:text-white mb-3">Payment Receipt</div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center w-[66px] h-[66px] rounded-2xl">
          <Image src='/images/icon/icon-upload.svg' width={44} height={44} alt="Paymant Receipt"/>
        </div>
      </div>
    </div>
  );
}

export default PaymentReceipt;