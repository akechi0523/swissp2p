"use client"

import React from "react";
import Image from "next/image";

interface Props {
	bgcolor: string;
	icon_src: string;
	content: string;
	handleClick: () => void;
}

const PaymentSelect = ({bgcolor, icon_src, content, handleClick}: Props) => {
	return (
		<button onClick={handleClick} className={`flex items-center gap-3 text-primary font-medium rounded-2xl ${bgcolor} border-[1px] border-[#E6E8EC] hover:bg-[#E6E8EC] px-6 py-3`}>
			<Image src={icon_src} width={36} height={36} alt={content}/>
			{content}
		</button>
	);
}

export default PaymentSelect;