import Image from "next/image";

interface Props {
  placeholder: string;
	title: string;
}

const PaymentDetailSelect = ({placeholder, title}: Props) => {
	return (
		<>
      <div className="text-base text-primary">
        {title}
      </div>
      <div className="flex items-center justify-between rounded-full border-[1px] border-[#E6E8EC] px-6 py-3">
        <input className="text-sm items-center text-primary placeholder-secondary" placeholder={placeholder} />
        <Image src='/images/icon/icon-copy.svg' width={18} height={18} alt="Copy Icon"/>
      </div>
    </>
  );
} 

export default PaymentDetailSelect;