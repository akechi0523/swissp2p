import Image from "next/image";

interface Props {
	icon_src: string;
	name: string;
	value: string;
}

const Transaction = ({icon_src, name, value}: Props) => {
	return (
		<div className="flex items-center justify-between rounded-full text-primary dark:text-white border-[1px] border-thrid dark:border-secondary px-6 py-3">
			<div className="flex items-center gap-2 font-medium ">
				<Image src={icon_src} width={24} height={24} alt="icon"/>
				{name}
			</div>
			{value}
		</div>
	);
} 

export default Transaction;