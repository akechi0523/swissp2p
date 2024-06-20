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
		<button onClick={handleClick} className={`flex items-center gap-3 text-primary dark:text-white font-medium rounded-3xl ${bgcolor} border-[1px] border-third dark:border-secondary hover:bg-third dark:hover:border-secondary px-6 md:py-3 py-2`}>
			<Image src={icon_src} width={36} height={36} alt={content}/>
			{content}
		</button>
	);
}

export default PaymentSelect;