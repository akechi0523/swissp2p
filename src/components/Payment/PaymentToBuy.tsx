import Image from "next/image";
import Link from "next/link";

interface Props {
	icon_src: string;
	name: string;
  link: string;
}

const PaymentToBuy = ({icon_src, name, link}: Props) => {
	return (
		<div className="flex items-center justify-between rounded-3xl bg-white border-none px-5 py-3">
			<div className="flex items-center gap-3 text-base font-medium text-primary dark:text-white">
				<Image src={icon_src} width={36} height={36} alt="icon"/>
				{name}
			</div>
			<Link href={link} className="bg-[#04C063] px-5 py-1.5 text-base text-white rounded-xl ">Connect</Link>
		</div>
	);
} 

export default PaymentToBuy;