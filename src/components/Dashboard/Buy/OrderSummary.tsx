"use client"

import { useState } from "react";
import Link from "next/link";
import Transaction from "../../common/Transaction";

const OrderSummary = () => {
	const [open, setOpen] = useState<boolean>(false);
	const handleClick = () => {
		setOpen(!open);
	}

	return (
		<div className="bg-white dark:bg-primary rounded-3xl px-8 py-6">
			<div className="font-medium text-xl text-primary dark:text-white mb-3">Order Summary</div>
			<div className="flex justify-between mb-3 px-8">
				<button className="text-base text-secondary focus:text-[#04C063]">Completed</button>
				<button className="text-base text-secondary focus:text-[#04C063]">Pending</button>
				<button className="text-base text-secondary focus:text-[#04C063]">Cancel</button>
			</div>
			<div className="flex flex-col gap-4">
				<Transaction icon_src="/images/icon/icon-usdt.svg" name="USDT" value="500.00"/>
				<Transaction icon_src="/images/icon/icon-usdt.svg" name="USDT" value="500.00"/>
				<Transaction icon_src="/images/icon/icon-usdt.svg" name="USDT" value="500.00"/>
				<Link 
					href="#" 
					className="flex items-center justify-center" 
					onClick={(e) => {
						e.preventDefault;
						handleClick();
					}}>
					<svg
						className={`-translate-y-1/2 fill-secondary ${
							open && "rotate-180"
						}`}
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
							fill=""
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
}

export default OrderSummary;