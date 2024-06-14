import Image from "next/image";
import Link from "next/link";

interface Props {
	icon_src1: string;
	icon_src2: string;
	name: string;
}

const Account = ({icon_src1, name, icon_src2}: Props) => {
	return (
		<div className="flex items-center justify-between rounded-3xl bg-white dark:bg-primary border-none px-5 py-3">
			<div className="flex items-center gap-3 text-lg font-medium text-primary dark:text-white">
				<Image src={icon_src1} width={36} height={36} alt="icon1"/>
				{name}
			</div>
			<Image src={icon_src2} width={22} height={22} alt="icon2"/>
		</div>
	);
} 

export default Account;