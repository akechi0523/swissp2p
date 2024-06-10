import Image from "next/image";

interface Props {
	icon_src: string;
	content: string;
}

const PaymentSelect = ({icon_src, content}:Props) => {
	return (
		<button className="flex items-center gap-3 text-primary font-medium rounded-2xl border-[1px] border-[#E6E8EC] px-6 py-3">
			<Image src={icon_src} width={36} height={36} alt={content}/>
			{content}
		</button>
	);
}

export default PaymentSelect;