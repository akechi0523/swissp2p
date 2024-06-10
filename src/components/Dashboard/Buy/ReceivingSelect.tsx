import Image from "next/image";
import Link from "next/link";

interface Props {
	path: string;
	bgcolor: string;
	icon_size: number;
	icon_src: string;
	content: string;
}

const ReceivingSelect = ({path, bgcolor, icon_src, icon_size, content}: Props) => {
	return (
		<Link href={path} className={`flex items-center justify-center gap-3 text-base text-white font-bold rounded-2xl border-none py-3 ${bgcolor}`}>
			<Image src={icon_src} width={icon_size} height={icon_size} alt={content}/>
			{content}
		</Link>
	);
}

export default ReceivingSelect;