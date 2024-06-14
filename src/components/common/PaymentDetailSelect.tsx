import Image from "next/image";

interface Props {
  placeholder: string;
	title: string;
}

const PaymentDetailSelect = ({placeholder, title}: Props) => {
	return (
		<>
      <div className="text-base text-primary dark:text-white">
        {title}
      </div>
      <div className="flex items-center justify-between rounded-full border-[1px] border-thrid dark:border-secondary px-6 py-3">
        <input className="w-30 dark:bg-primary text-sm items-center text-primary dark:text-white placeholder-secondary outline-none" placeholder={placeholder} />
        <Image src='/images/icon/icon-copy.svg' width={18} height={18} alt="Copy Icon"/>
      </div>
    </>
  );
} 

export default PaymentDetailSelect;