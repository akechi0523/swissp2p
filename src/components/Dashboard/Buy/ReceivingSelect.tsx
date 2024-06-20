import Image from "next/image";
import Link from "next/link";

interface Props {
	path: string;
	bgcolor: string;
	icon_size: number;
	icon: string;
	content: string;
}

const ReceivingSelect = ({path, bgcolor, icon, icon_size, content}: Props) => {
	return (
		<Link href={path} className={`flex items-center justify-center gap-3 text-base text-white font-bold rounded-2xl border-none md:py-3 py-2 ${bgcolor}`}>
			<Image src={icon} width={icon_size} height={icon_size} alt='icon'/>
			{content}
		</Link>
	);
}

export default ReceivingSelect;